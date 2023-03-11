import React from "react";
import postPage from "../../components/Reuse/CSS/postPage.module.css";
import Author from "../../components/Reuse/Author";
import Container from "../../components/Reuse/Container";
import Margin from "../../components/Reuse/Margin";
import { FacebookLogo, TwitterLogo } from "phosphor-react";
import PostWrap from "../../components/Reuse/PostWrap";
import SectionHeader from "../../components/Reuse/SectionHeader";
import Grid from "../../components/Reuse/Grid";
import GridLeft from "../../components/Reuse/GridLeft";
import Sidebar from "../../components/Reuse/Sidebar";
import Sticky from "../../components/Reuse/Sticky";
import RelatedPost from "../../components/Reuse/RelatedPost";
import Tag from "../../components/Tag";
import Head from "next/head";
import TrendsWrap from "../../components/Reuse/TrendsWrap";

import postPageController from "../../serverless/controllers/postpage.controller";
import relatedController from "../../serverless/controllers/related.controller";
import trendingController from "../../serverless/controllers/trending.controller";

export default function PostPage({ post, relatedPosts, trendingPosts }) {
	const parsedPost = JSON.parse(post);
	const relatedPostsParsed = JSON.parse(relatedPosts);
	return (
		<Container>
			<Head>
				<meta name='description' content='Blog Post' />
				<meta property='og:image' content={"url"} />
				<title>{parsedPost.title}</title>
			</Head>
			<Margin>
				<div className={postPage.wrap}>
					{/* Thumbnail */}
					<div className={postPage.thumbnail}>
						<img src={parsedPost.thumb} alt='' />
						<div className={postPage.overlay}>
							<p className={postPage.tag}>{parsedPost.categories[0].name}</p>
							<Margin>
								<h1 className={postPage.title}>{parsedPost.title}</h1>
							</Margin>
							<Author
								name={parsedPost.author.name}
								src={parsedPost.author.avatar}
							/>
						</div>
					</div>
					{/* Content */}
					<Grid>
						<GridLeft>
							<Margin>
								<div className={postPage.postContent}>
									<div className={postPage.leftBar}>
										<div className={postPage.stick}>
											{/* Auhtor */}
											<div className={postPage.wrapAuth}>
												<img
													src={parsedPost.author.avatar}
													alt={parsedPost.author.name}
													className={postPage.avatar}
												/>
												<h3 className={postPage.name}>
													{parsedPost.author.name}
												</h3>
											</div>

											{/* Share */}
											<div className={postPage.share}>
												<p>Share:</p>
												<div className={postPage.shareIcons}>
													<FacebookLogo
														size={25}
														color={"var(--secondary)"}
														cursor={"pointer"}
													/>
													<a
														href='https://twitter.com/share?ref_src=twsrc%5Etfw'
														className='twitter-share-button'
														data-show-count='false'
													>
														<TwitterLogo
															size={25}
															color={"var(--secondary)"}
															cursor={"pointer"}
														/>
													</a>
												</div>
											</div>
										</div>
									</div>

									{/* Blog Post */}
									<article className={postPage.contentWrap}>
										{
											<div
												dangerouslySetInnerHTML={{
													__html: parsedPost.content,
												}}
											/>
										}
									</article>
									{/* Content Footer */}
									<div className={postPage.contentFooter}>
										<p className={postPage.date}>
											{new Date(parsedPost.published).toDateString()}
										</p>
										<Tag tags={parsedPost.tag} />
									</div>
								</div>
								<Margin>
									<div className={postPage.postAuthor}>
										<img
											src={parsedPost.author.avatar}
											alt={parsedPost.author.name}
										/>
										<div className={postPage.postAuthinfo}>
											<h2>{parsedPost.author.name}</h2>
											<p>{parsedPost.author.bio}</p>
										</div>
									</div>
								</Margin>
								<PostWrap>
									<SectionHeader text={"Related Posts"} />
									<RelatedPost posts={relatedPostsParsed} />
								</PostWrap>
							</Margin>
						</GridLeft>
						<Sidebar>
							<Sticky>
								<TrendsWrap posts={trendingPosts} />
							</Sticky>
						</Sidebar>
					</Grid>
				</div>
			</Margin>
		</Container>
	);
}

export async function getServerSideProps({ params }) {
	const { postID } = params;
	const post = await postPageController(postID);
	const relatedPosts = await relatedController(JSON.parse(post).categories[0]);
	const trendingPosts = await trendingController();

	return {
		props: { post, relatedPosts, trendingPosts },
	};
}
