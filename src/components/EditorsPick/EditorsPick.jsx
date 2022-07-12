import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";
import { MoonLoader } from "react-spinners";

import editors from "components/EditorsPick/editors.module.css";
import EditorTab from "./EditorTab";
import CircularBtn from "./CircularBtn";

const GET_EDITORS_PICK = gql`
	query ($var: PostFiltersInput, $size: PaginationArg) {
		posts(filters: $var, pagination: $size) {
			data {
				id
				attributes {
					title
					snippet
					publishedAt
					thumb {
						data {
							attributes {
								url
							}
						}
					}
					categories {
						data {
							attributes {
								IDN
							}
						}
					}
					author {
						data {
							attributes {
								name
								avatar {
									data {
										attributes {
											url
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
`;

export default function EditorsPick() {
	const { data, loading } = useQuery(GET_EDITORS_PICK, {
		variables: {
			var: {
				editorsPick: {
					eq: true,
				},
			},
			size: {
				pageSize: 3,
			},
		},
	});

	const [idd, setIdd] = useState();
	const [picks, setPicks] = useState();

	useEffect(() => {
		if (!loading) {
			setIdd(data.posts.data[0].id);
			setPicks(tempPicks);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loading]);

	if (loading)
		return (
			<MoonLoader
				cssOverride={{ margin: "0 auto" }}
				color='var(--secondary)'
				size={25}
			/>
		);

	// Used on first render
	const tempPicks = data.posts.data.map((pick, index) =>
		!index ? { ...pick, isActive: true } : { ...pick, isActive: false },
	);
	const tempID = data.posts.data[0].id;

	const renderBtns = !picks
		? tempPicks?.map(({ id, isActive }) => (
				<CircularBtn key={id} id={id} Fn={switchPicks} isActive={isActive} />
		  ))
		: picks?.map(({ id, isActive }) => (
				<CircularBtn key={id} id={id} Fn={switchPicks} isActive={isActive} />
		  ));

	function switchPicks(id) {
		setIdd(id);
		setPicks((pre) =>
			pre.map((pick) =>
				pick.id === id
					? { ...pick, isActive: true }
					: { ...pick, isActive: false },
			),
		);
	}

	// Select Post
	const pick = !picks
		? tempPicks.find((pick) => pick.id === tempID)
		: picks.find((pick) => pick.id === idd);

	return (
		<SwitchTransition>
			<CSSTransition key={idd} timeout={1000} classNames={editors}>
				<EditorTab btns={renderBtns} pick={pick} />
			</CSSTransition>
		</SwitchTransition>
	);
}
