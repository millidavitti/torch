import React from "react";
import { InstagramLogo, TwitterLogo } from "phosphor-react";
import useSWR from "swr";

export default function DeskItems({ children }) {
	const { data: author, isLoading } = useSWR("/api/author");
	if (isLoading) return;
	return (
		<nav className='desk-nav'>
			<ul className='desk-menu-items'>{children}</ul>
			<div className='desk-socials'>
				<a href={author.socials.instagram}>
					<InstagramLogo size={30} color='#273136' />
				</a>
				<a href={author.socials.twitter}>
					<TwitterLogo size={30} color='#273136' />
				</a>
			</div>
		</nav>
	);
}
