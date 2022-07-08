import React from "react";
import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

// Components
import MobileNav from "components/Navigation/MobileNav";
import DeskItems from "components/Navigation/DeskItems";
import { ReactComponent as Logo } from "assets/logo.svg";
import { MoonLoader } from "react-spinners";

const GET_MENU = gql`
	query GetMenu {
		menus {
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
	const { data, loading, error } = useQuery(GET_MENU);
	if (error)
		return (
			<header style={{ display: "flex", alignItems: "center" }}>
				<Link to='/'>
					<Logo className='logo' />
				</Link>

				<p style={{ margin: "0 auto" }}>ERROR: Failed to get menu data!!</p>
			</header>
		);

	if (loading)
		return (
			<header style={{ display: "flex", alignItems: "center" }}>
				<Link to='/'>
					<Logo className='logo' />
				</Link>

				{/* <p style={{ margin: "0 auto" }}>Loading...</p> */}
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
			<Link to='/'>
				<Logo className='logo' />
			</Link>
			<MobileNav Logo={Logo} menu={menu} />
			<DeskItems menu={menu} />
		</header>
	);
}
