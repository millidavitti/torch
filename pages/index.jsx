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
import Grid from "../components/Reuse/Grid";
import Sticky from "../components/Reuse/Sticky";
import GridLeft from "../components/Reuse/GridLeft";
import Sidebar from "../components/Reuse/Sidebar";
import Featured from "../components/Hero/Featured";
import LayoutOne from "../components/LayoutOne";
import LayoutTwo from "../components/LayoutTwo";
import Latest from "../components/Latest";
import TrendsWrap from "../components/Reuse/TrendsWrap";

// CSS
import editors from "../components/EditorsPick/editors.module.css";
import authCard from "../components/AuthorCard/authCard.module.css";
// Controllers
import postController from "../serverless/controllers/post.controller";
import authorController from "../serverless/controllers/author.controller";
import categoryController from "../serverless/controllers/category.controller";
import slideController from "../serverless/controllers/slide.controller";
import featuredController from "../serverless/controllers/featured.controller";
import editorsPickController from "../serverless/controllers/editorsPick.controller";
import layoutOneController from "../serverless/controllers/layoutOne.controller";
import layoutTwoController from "../serverless/controllers/layoutTwo.controller";
import latestController from "../serverless/controllers/latest.controller";
import trendingController from "../serverless/controllers/trending.controller";

export default function Home(props) {
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
				<Slider posts={props.slidePosts} />
				<Featured post={props.featuredPosts} />
			</Hero>
			<section className={editors.editorsPick}>
				<SectionHeader
					text={`Editor's Pick`}
					description='Curated posts by the author'
				/>
				<EditorsPick posts={props.editorsPickPosts} />
			</section>

			{/* Layout One */}
			<PostWrap>
				<LayoutOne posts={props.layoutOnePosts} />
			</PostWrap>

			{/* Layout Two */}
			<PostWrap>
				<LayoutTwo posts={props.layoutTwoPosts} />
			</PostWrap>

			{/* Latest News: Section Three */}
			<PostWrap>
				<SectionHeader
					text={"Latest News"}
					description='Get the latest articles as the they publish'
				/>
				<Grid>
					<GridLeft>
						<Latest posts={props.latestPosts} />
					</GridLeft>

					{/* Sidebar: Top Trending */}
					<Sidebar>
						<Sticky>
							<TrendsWrap posts={props.trendingPosts} />
						</Sticky>
					</Sidebar>
				</Grid>
			</PostWrap>

			{/* Author Card */}
			<section className={authCard.container}>
				<AuthCard author={props.author} />
			</section>
		</Container>
	);
}

export async function getServerSideProps() {
	const categories = await categoryController();
	const author = await authorController();
	const posts = await postController();
	const slidePosts = await slideController();
	const featuredPosts = await featuredController();
	const editorsPickPosts = await editorsPickController();
	const layoutOnePosts = await layoutOneController();
	const layoutTwoPosts = await layoutTwoController();
	const latestPosts = await latestController();
	const trendingPosts = await trendingController();

	return {
		props: {
			posts,
			author,
			categories,
			slidePosts,
			featuredPosts,
			editorsPickPosts,
			layoutOnePosts,
			layoutTwoPosts,
			latestPosts,
			trendingPosts,
		},
	};
}
