import React from "react";
import Head from "next/head";
// Components
import Slider from "../components/Hero/Slider";
import Hero from "../components/Hero/Hero";
import EditorsPick from "../components/EditorsPick/EditorsPick";
import SectionHeader from "../components/Reuse/SectionHeader";
import AuthCard from "../components/AuthorCard/AuthCard";
import PostWrap from "../components/Reuse/PostWrap";
import Container from "../components/Reuse/Container";
import Margin from "../components/Reuse/Margin";
import Grid from "../components/Reuse/Grid";
import Sticky from "../components/Reuse/Sticky";
import GridLeft from "../components/Reuse/GridLeft";
import Sidebar from "../components/Reuse/Sidebar";
import Featured from "../components/Hero/Featured";
import Travel from "../components/Travel";
import Health from "../components/Health";
import Latest from "../components/Latest";
import TrendsWrap from "../components/Reuse/TrendsWrap";

// CSS
import editors from "../components/EditorsPick/editors.module.css";
import authCard from "../components/AuthorCard/authCard.module.css";

export default function Home() {
	return (
		<Container>
			<Head>
				<meta
					property='og:image'
					content='https://res.cloudinary.com/torch-cms-media/image/upload/v1658568341/logo_5d3d7f7c34_a598a29434.svg'
				/>
				<title>Torch</title>
			</Head>

			<Hero>
				<Slider />
				<Featured />
			</Hero>
			<section className={editors.editorsPick}>
				<SectionHeader
					text={`Editor's Pick`}
					description='Lorem ipsum dolor sit amet adipisicing elit.'
				/>
				<EditorsPick />
			</section>
			{/* Travel News */}
			<PostWrap>
				<SectionHeader
					text='Travel News'
					description='Get the latest travel articles'
				/>
				<Margin>
					<Travel />
				</Margin>
			</PostWrap>
			{/* Health News */}
			<PostWrap>
				<SectionHeader
					text='Health News'
					description='Get the most benificial health articles'
				/>
				<Health />
			</PostWrap>
			{/* Latest News */}
			<PostWrap>
				<SectionHeader
					text={"Latest News"}
					description='Get the latest articles as the they publish'
				/>
				<Grid>
					<GridLeft>
						<Latest />
					</GridLeft>
					{/* Sidebar */}
					<Sidebar>
						<Sticky>
							<TrendsWrap />
						</Sticky>
					</Sidebar>
				</Grid>
			</PostWrap>
			<section className={authCard.container}>
				<AuthCard
					description={
						"Nascetur netus, nascetur ante elit sodales. Placerat class ante lacus consequat sapien ante elit sodales "
					}
				/>
			</section>
		</Container>
	);
}
