import Head from "next/head";
import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import axios from "axios";
import { useRouter } from "next/router";
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
import TrendsWrap from "../../components/Reuse/TrendsWrap";
import Thumbnail from "../../components/Reuse/Thumbnail";
import Grid from "../../components/Reuse/Grid";
import GridLeft from "../../components/Reuse/GridLeft";
import Sidebar from "../../components/Reuse/Sidebar";
import Sticky from "../../components/Reuse/Sticky";
import AuthCard from "../../components/AuthorCard/AuthCard";
import Author from "../../components/Reuse/Author";
import Container from "../../components/Reuse/Container";
import authorController from "../../serverless/controllers/author.controller";
import trendingController from "../../serverless/controllers/trending.controller";
import readmore from "../../components/Reuse/CSS/readmore.module.css";
import archivePostController from "../../serverless/controllers/archivePost.controller";
import archiveFindOneController from "../../serverless/controllers/archiveFindOne.controller";
import { ClockCounterClockwise } from "phosphor-react";
import ConditionalRender from "../../components/ConditionalRender";

export default function Archive(props) {
	const {
		posts: archivePosts,
		count,
		archive,
	} = JSON.parse(props.archivePosts);

	const [append, setAppend] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setAppend([]);
	}, [archive]);

	const flexPosts = [];

	for (let i = 0; i < archivePosts.length; i++) {
		const post = archivePosts[i];
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
						<ReadMore postID={post._id} />
					</PostInfo>
				</Post>,
			);
		}
	}
	const archivePost = archivePosts[0];

	return (
		<>
			<Head>
				<meta name='description' content='Torch Blog Categories' />
				<meta
					property='og:image'
					content='https://res.cloudinary.com/torch-cms-media/image/upload/v1658568341/logo_5d3d7f7c34_a598a29434.svg'
				/>
				<title>Archive Posts : {archive}</title>
			</Head>
			<Container>
				<ConditionalRender state={archivePosts.length}>
					{(state, fallback) => {
						return state ? (
							<PostWrap>
								<PostFlex>
									<div className={postcss.thumbWrap}>
										<img
											src={archivePost.thumb}
											alt={archivePost.title}
											className={postcss.thumb}
										/>
										<Author
											name={archivePost.author.name}
											src={archivePost.author.avatar}
										/>
									</div>
									<PostInfo>
										<PostDate
											css={postcss.date}
											date={new Date(archivePost.published).toDateString()}
											head={true}
										/>
										<TitlePreview
											title={archivePost.title}
											preview={archivePost.snippet}
										/>
										<ReadMore postID={archivePost._id} />
									</PostInfo>
								</PostFlex>
							</PostWrap>
						) : (
							fallback
						);
					}}
				</ConditionalRender>
				<Grid>
					<GridLeft>
						<ConditionalRender
							state={archivePosts.length}
							fallback={
								<ClockCounterClockwise size='100%' color='var(--secondary)' />
							}
						>
							{(state, fallback) => {
								return !state ? (
									<>
										<h2
											style={{ textAlign: "center", color: "var(--secondary)" }}
										>
											COME BACK NEXT YEAR
										</h2>
										{fallback}
									</>
								) : (
									<>
										<PostWrap>
											<PostFlex>
												{flexPosts}
												{append.map((post) => (
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
															<TitlePreview
																title={post.title}
																preview={post.snippet}
															/>
															<ReadMore postID={post._id} />
														</PostInfo>
													</Post>
												))}
											</PostFlex>

											{/* Load More */}
											{archivePosts.length + append.length !== count && (
												<button
													className={readmore.readMore}
													style={{ left: "43%", width: "auto" }}
													onClick={async () => {
														setIsLoading(true);

														const {
															data: { posts },
														} = await axios.get(
															`/api/archive-posts?from=${
																archivePosts.length + append.length
															}&archive=${archive}`,
														);

														setIsLoading(false);

														setAppend((prev) => [...prev, ...posts]);
													}}
												>
													{isLoading ? (
														<MoonLoader
															cssOverride={{ margin: "0 30px" }}
															color='var(--secondary)'
															size={15}
														/>
													) : (
														"Load More"
													)}
												</button>
											)}
										</PostWrap>
										<AuthCard author={props.author} />
									</>
								);
							}}
						</ConditionalRender>
					</GridLeft>

					<Sidebar>
						<Sticky>
							<TrendsWrap posts={props.trendingPosts} />
						</Sticky>
					</Sidebar>
				</Grid>
			</Container>
		</>
	);
}

function Render() {}
export async function getServerSideProps({ params }) {
	const { archive } = params;
	const author = await authorController();
	const trendingPosts = await trendingController();
	const { name: year } = JSON.parse(await archiveFindOneController(archive));

	const archivePosts = await archivePostController(2013 || +year);

	return {
		props: {
			author,
			trendingPosts,
			archivePosts,
		},
	};
}
