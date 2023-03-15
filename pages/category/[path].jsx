import Head from "next/head";
// Css
import postcss from "../../components/Reuse/CSS/post.module.css";
import PostDate from "../../components/Reuse/Date";
// Components
import Post from "../../components/Reuse/Post";
import PostFlex from "../../components/Reuse/PostFlex";
import PostInfo from "../../components/Reuse/PostInfo";
import PostWrap from "../../components/Reuse/PostWrap";
import ReadMore from "../../components/Reuse/ReadMore";
import TitlePreview from "../../components/Reuse/TitlePreview";
import TopTrend from "../../components/Reuse/TopTrend";
import TrendingPost from "../../components/Reuse/TrendingPost";
import TrendsWrap from "../../components/Reuse/TrendsWrap";
import Thumbnail from "../../components/Reuse/Thumbnail";
import Grid from "../../components/Reuse/Grid";
import GridLeft from "../../components/Reuse/GridLeft";
import Sidebar from "../../components/Reuse/Sidebar";
import Sticky from "../../components/Reuse/Sticky";
import AuthCard from "../../components/AuthorCard/AuthCard";
import Author from "../../components/Reuse/Author";
import Container from "../../components/Reuse/Container";
import { mockPosts, categories } from "../../serverless/mock";
import authorController from "../../serverless/controllers/author.controller";
import trendingController from "../../serverless/controllers/trending.controller";
import categoryPostController from "../../serverless/controllers/categoryPost.controller";

export default function Category(props) {
	const categoryPosts = JSON.parse(props.posts);
	console.log(categoryPosts);

	const flexPosts = [];

	for (let i = 0; i < categoryPosts.length; i++) {
		const post = categoryPosts[i];
		if (i) {
			flexPosts.push(
				<Post key={post.title}>
					<Thumbnail src={post.thumb} alt={post.title} />
					<PostInfo>
						<PostDate
							date={new Date(post.published).toDateString()}
							head={false}
						/>
						<h2 className={postcss.singlePostHead}>
							{post.categories[0].name}
						</h2>
						<TitlePreview title={post.title} preview={post.snippet} />
						<ReadMore postID={post.title} />
					</PostInfo>
				</Post>,
			);
		}
	}

	const categoryPost = categoryPosts[0];
	return (
		<Container>
			<Head>
				<meta name='description' content='Torch Blog Categories' />
				<meta
					property='og:image'
					content='https://res.cloudinary.com/torch-cms-media/image/upload/v1658568341/logo_5d3d7f7c34_a598a29434.svg'
				/>
				<title>Categories : {categories[0].name}</title>
			</Head>
			<PostWrap>
				<PostFlex>
					<div className={postcss.thumbWrap}>
						<img
							src={categoryPost.thumb}
							alt={categoryPost.title}
							className={postcss.thumb}
						/>
						<Author
							name={categoryPost.author.name}
							src={categoryPost.author.avatar}
						/>
					</div>
					<PostInfo>
						<PostDate
							css={postcss.date}
							date={new Date(categoryPost.published).toDateString()}
							head={true}
						/>
						<TitlePreview
							title={categoryPost.title}
							preview={categoryPost.snippet}
						/>
						<ReadMore postID={categoryPost.title} />
					</PostInfo>
				</PostFlex>
			</PostWrap>
			<Grid>
				<GridLeft>
					<PostWrap>
						<PostFlex>{flexPosts}</PostFlex>
					</PostWrap>
					<AuthCard author={props.author} />
				</GridLeft>

				<Sidebar>
					<Sticky>
						<TrendsWrap posts={props.trendingPosts} />
					</Sticky>
				</Sidebar>
			</Grid>
		</Container>
	);
}

export async function getServerSideProps({ params }) {
	const { path } = params;
	const author = await authorController();
	const trendingPosts = await trendingController();
	const posts = await categoryPostController(path);

	return {
		props: {
			author,
			trendingPosts,
			posts,
		},
	};
}
