import React from "react";
import { At, Phone } from "phosphor-react";
import footer from "components/Footer/footer.module.css";
import { ReactComponent as Logo } from "assets/logo.svg";
import Socials from "components/Reuse/Socials";
import { Link } from "react-router-dom";
function Footer() {
	return (
		<footer className={footer.footer}>
			<div className={footer.contact}>
				<figure className={footer.mail}>
					<At className={footer.at} size={20} />
					<figcaption>abuadonald@gmail.com</figcaption>
				</figure>
				<figure className={footer.phoneNum}>
					<Phone className={footer.phone} size={20} />
					<figcaption>+234 805 9739 872</figcaption>
				</figure>
			</div>
			<Link to={"/"} style={{ cursor: "pointer" }}>
				<Logo className={footer.logo} />
			</Link>
			<Socials css={footer} showFacebook={true} showTwitter={true} />
		</footer>
	);
}

export default Footer;
