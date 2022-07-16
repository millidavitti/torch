import React from "react";
import { At, Phone } from "phosphor-react";
import footer from "./footer.module.css";
import Logo from "../../public/assets/logo.svg";
import Socials from "../Reuse/Socials";
import Link from "next/Link";
export default function Footer() {
	return (
		<footer className={footer.footer}>
			<div className={footer.contact}>
				<figure className={footer.mail}>
					<At className={footer.at} size={20} />
					<figcaption className={footer.figcaption}>
						abuadonald@gmail.com
					</figcaption>
				</figure>
				<figure className={footer.phoneNum}>
					<Phone className={footer.phone} size={20} />
					<figcaption>+234 805 9739 872</figcaption>
				</figure>
			</div>
			{/* <Link href='/' className={footer.logo} style={{ cursor: "pointer" }}> */}
			<Logo />
			{/* </Link> */}
			<Socials css={footer} showFacebook={true} showTwitter={true} />
		</footer>
	);
}
