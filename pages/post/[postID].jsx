import React from "react";
import postPage from "../../components/Reuse/CSS/postPage.module.css";
import post from "../../components/Reuse/CSS/post.module.css";
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
import { useRouter } from "next/router";
import Head from "next/head";
import TrendsWrap from "../../components/Reuse/TrendsWrap";

import { mockPosts } from "../../serverless/mock";

export default function PostPage({ data }) {
	const { postID } = useRouter().query;

	return (
		<Container>
			<Head>
				<meta name='description' content='Blog Post' />
				<meta property='og:image' content={"url"} />
				<title>{mockPosts[0].title}</title>
			</Head>
			<Margin>
				<div className={postPage.wrap}>
					{/* Thumbnail */}
					<div className={postPage.thumbnail}>
						<img src={"url"} alt='' />
						<div className={postPage.overlay}>
							<p className={postPage.tag}>{mockPosts[0].categories[0]}</p>
							<Margin>
								<h1 className={postPage.title}>{mockPosts[0].title}</h1>
							</Margin>
							<Author
								cssWrap={post.wrapAuth}
								cssAvatar={post.avatar}
								cssName={post.name}
								name={mockPosts[0].author.name}
								src={mockPosts[0].author.avatar}
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
											<Author
												cssWrap={postPage.wrapAuth}
												cssAvatar={postPage.avatar}
												cssName={postPage.name}
												name={mockPosts[0].author.name}
												src={mockPosts[0].author.avatar}
											/>
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
									<article className={postPage.contentWrap}>
										{
											<div
												dangerouslySetInnerHTML={{
													__html: mockPosts[0].content,
												}}
											/>
										}
									</article>
									{/* Content Footer */}
									<div className={postPage.contentFooter}>
										<p className={postPage.date}>
											{new Date(mockPosts[0].published).toDateString()}
										</p>
										<Tag postID={postID} />
									</div>
								</div>
								<Margin>
									<div className={postPage.postAuthor}>
										<img src={mockPosts[0].author.avatar} alt='' />
										<div className={postPage.postAuthinfo}>
											<h2>Donald Abua</h2>
											<p>
												Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Non facilis aperiam, perferendis earum odit eligendi?
											</p>
										</div>
									</div>
								</Margin>
								<PostWrap>
									<SectionHeader text={"Related Posts"} />
									<RelatedPost category={mockPosts[0].categories} />
								</PostWrap>
							</Margin>
						</GridLeft>
						<Sidebar>
							<Sticky>
								<TrendsWrap />
							</Sticky>
						</Sidebar>
					</Grid>
				</div>
			</Margin>
		</Container>
	);
}
