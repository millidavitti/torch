import React from "react";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";

// Components
import MobileNav from "../Navigation/MobileNav";
import DeskItems from "../Navigation/DeskItems";
import Logo from "../../public/assets/logo.svg";
import { MoonLoader } from "react-spinners";

const GET_MENU = gql`
	query Menus($menuID: [String]) {
		menus(sort: $menuID) {
			data {
				id
				attributes {
					IDD
					name
					path
					isDropDown
					categories {
						data {
							id
							attributes {
								IDN
								path
							}
						}
					}
					archives {
						data {
							id
							attributes {
								IDN
							}
						}
					}
				}
			}
		}
	}
`;

export default function Header() {
	const { data, loading, error } = useQuery(GET_MENU, {
		variables: {
			menuID: ["id:asc"],
		},
	});
	if (error)
		return (
			<header style={{ display: "flex", alignItems: "center" }}>
				<Link href='/'>
					<a>
						<Logo className='logo' />
					</a>
				</Link>
				<p style={{ margin: "0 auto" }}>ERROR: Failed to get menu data!!</p>
			</header>
		);

	if (loading)
		return (
			<header style={{ display: "flex", alignItems: "center" }}>
				<Link href='/'>
					<a>
						<Logo className='logo' />
					</a>
				</Link>
				<MoonLoader
					cssOverride={{ margin: "0 auto" }}
					color='var(--secondary)'
					size={25}
				/>
			</header>
		);

	const { menus } = data;
	const { data: menu } = menus;
	return (
		<header>
			<Link href='/'>
				<a>
					<Logo className='logo' />
				</a>
			</Link>
			<MobileNav Logo={Logo} menu={menu} />
			<DeskItems menu={menu} />
		</header>
	);
}
