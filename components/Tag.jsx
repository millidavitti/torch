import { gql, useQuery, useMutation } from "@apollo/client";
import React, { useState } from "react";
import postPage from "./Reuse/CSS/postPage.module.css";
import { Plus, Square } from "phosphor-react";
import { MoonLoader } from "react-spinners";
import { useRef } from "react";

const GET_TAGS = gql`
	query GetTags($tags: TagFiltersInput) {
		tags(filters: $tags) {
			data {
				attributes {
					tag
				}
			}
		}
	}
`;

const POST_TAG = gql`
	mutation ($dataInput: TagInput!) {
		createTag(data: $dataInput) {
			data {
				id
			}
		}
	}
`;

export default function Tag({ postID }) {
	const [tagVal, setTagVal] = useState();
	const [newTag, setNewTag] = useState(false);
	const inputRef = useRef();
	useState(() => inputRef.current?.focus(), []);
	const { data, loading } = useQuery(GET_TAGS, {
		variables: {
			tags: {
				posts: {
					id: {
						eq: postID,
					},
				},
			},
		},
	});

	const [addTag, { error, reset }] = useMutation(POST_TAG);

	if (loading)
		return (
			<MoonLoader
				cssOverride={{ margin: "auto" }}
				color='var(--secondary)'
				size={25}
			/>
		);

	if (error) {
		setTimeout(() => reset(), 1000);
		return (
			<div className={postPage.tagTools}>
				<div className={postPage.footerTag}>
					<div className={postPage.tagEntity}>
						<p>Tag exists already!</p>
					</div>
				</div>
			</div>
		);
	}

	if (!data.tags.data.length)
		return (
			<div className={postPage.tagTools}>
				<div className={postPage.toolRack}>
					<Plus
						weight='bold'
						size={20}
						cursor='pointer'
						className={postPage.addTag}
						onClick={() => setNewTag(true)}
					/>
					<Square
						weight='bold'
						size={20}
						cursor='pointer'
						className={postPage.showMore}
					/>
				</div>
				<div className={postPage.footerTag}>
					<div className={postPage.tagEntity}>
						{newTag || <p>No tags yet! Hover to create :)</p>}
						{newTag && (
							<div className={postPage.tagEntity}>
								<input
									type='text'
									onChange={(e) => {
										const {
											target: { value },
										} = e;
										setTagVal(value);
									}}
									ref={inputRef}
									onKeyDown={submit}
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		);

	function submit(e) {
		const { key } = e;
		if (key === "Escape") setNewTag(false);
		if (key !== "Enter") return;
		addTag({
			variables: {
				dataInput: {
					tag: tagVal,
					posts: [postID],
					publishedAt: "2022-07-12T11:03:00Z",
				},
			},
			refetchQueries: [{ query: GET_TAGS }, "GetTags"],
		});
		setNewTag(false);
	}

	const {
		tags: { data: tagData },
	} = data;
	const renderTags = tagData.map((attr, id) => {
		return (
			<div key={id} className={postPage.tagEntity}>
				<p key={id}>{attr.attributes.tag}</p>
			</div>
		);
	});
	return (
		<div className={postPage.tagTools}>
			<div className={postPage.toolRack}>
				<Plus
					weight='bold'
					size={20}
					cursor='pointer'
					className={postPage.addTag}
					onClick={() => setNewTag(true)}
				/>
				<Square
					weight='bold'
					size={20}
					cursor='pointer'
					className={postPage.showMore}
				/>
			</div>
			<div className={postPage.footerTag}>
				{renderTags}
				{newTag && (
					<div className={postPage.tagEntity}>
						<input
							type='text'
							onChange={(e) => {
								const {
									target: { value },
								} = e;
								setTagVal(value);
							}}
							onKeyDown={submit}
						/>
					</div>
				)}
			</div>
		</div>
	);
}
