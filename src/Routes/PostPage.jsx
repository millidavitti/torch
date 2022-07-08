import React from "react";
import postPage from "components/Reuse/CSS/postPage.module.css";
import post from "components/Reuse/CSS/post.module.css";
import Author from "components/Reuse/Author";
import seven from "assets/images/seven.jpg";
import eight from "assets/images/eight.jpg";
import Container from "components/Reuse/Container";
import Margin from "components/Reuse/Margin";
import { FacebookLogo, TwitterLogo } from "phosphor-react";
import PostWrap from "components/Reuse/PostWrap";
import PostFlex from "components/Reuse/PostFlex";
import Post from "components/Reuse/Post";
import Thumbnail from "components/Reuse/Thumbnail";
import PostInfo from "components/Reuse/PostInfo";
import TitlePreview from "components/Reuse/TitlePreview";
import ReadMore from "components/Reuse/ReadMore";
import Date from "components/Reuse/Date";
import SectionHeader from "components/Reuse/SectionHeader";
import Grid from "components/Reuse/Grid";
import GridLeft from "components/Reuse/GridLeft";
import Sidebar from "components/Reuse/Sidebar";
import Sticky from "components/Reuse/Sticky";
import TopTrend from "components/Reuse/TopTrend";
import TrendingPost from "components/Reuse/TrendingPost";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import { MoonLoader } from "react-spinners";

const GET_POST = gql`
	query ($postID: ID) {
		post(id: $postID) {
			data {
				attributes {
					title
					content
					thumb {
						data {
							attributes {
								url
							}
						}
					}
					categories {
						data {
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

export default function PostPage() {
	const { postID } = useParams();
	const { data, loading } = useQuery(GET_POST, {
		variables: {
			postID,
		},
	});
	if (loading)
		return (
			<MoonLoader
				cssOverride={{ margin: "auto" }}
				color='var(--secondary)'
				size={25}
			/>
		);
	const {
		post: {
			data: {
				attributes: {
					title,
					content,
					thumb: {
						data: {
							attributes: { url },
						},
					},
					categories: {
						data: [
							{
								attributes: { IDN },
							},
						],
					},
				},
			},
		},
	} = data;

	window.scrollTo(0, 0);
	return (
		<Container>
			<Margin>
				<div className={postPage.wrap}>
					{/* Thumbnail */}
					<div className={postPage.thumbnail}>
						<img src={`http://localhost:1337${url}`} alt='' />
						<div className={postPage.overlay}>
							<p className={postPage.tag}>{IDN}</p>
							<h1>{title}</h1>
							<Author
								cssWrap={post.wrapAuth}
								cssAvatar={post.avatar}
								cssName={post.name}
								name={"Vegan Bake"}
								src={seven}
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
												name={"Vegan Bake"}
												src={seven}
											/>
											<div className={postPage.share}>
												<p>Share:</p>
												<div className={postPage.shareIcons}>
													<FacebookLogo
														size={25}
														color={"var(--secondary)"}
														cursor={"pointer"}
													/>
													<TwitterLogo
														size={25}
														color={"var(--secondary)"}
														cursor={"pointer"}
													/>
												</div>
											</div>
										</div>
									</div>
									<article className={postPage.contentWrap}>
										{
											<div
												dangerouslySetInnerHTML={{
													__html: content,
												}}
											/>
										}
									</article>
									{/* Content Footer */}
									<div className={postPage.contentFooter}>
										<p className={postPage.date}>Mar 6, 2019</p>
										<div className={postPage.footerTag}></div>
									</div>
								</div>
								<Margin>
									<div className={postPage.postAuthor}>
										<img src={eight} alt='' />
										<div className={postPage.postAuthinfo}>
											<h2>Donald Abua</h2>
											<p>
												Lorem ipsum dolor sit amet consectetur
												adipisicing elit. Non facilis aperiam,
												perferendis earum odit eligendi?
											</p>
										</div>
									</div>
								</Margin>
								<PostWrap>
									<SectionHeader text={"Related Posts"} />
									<PostFlex>
										<Post>
											<Thumbnail src={eight} />
											<PostInfo>
												<Date date={"Mar 4, 2019"} head={false} />
												<h2 className={post.singlePostHead}>
													Fashion
												</h2>
												<TitlePreview
													title={"New Post"}
													preview={
														"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolor animi ex voluptatem totam ab aut amet reiciendis, in laborum?"
													}
													href='https://google.com'
												/>
												<ReadMore href={"https://google.com"} />
											</PostInfo>
										</Post>
										<Post>
											<Thumbnail src={eight} />
											<PostInfo>
												<Date date={"Mar 4, 2019"} head={false} />
												<h2 className={post.singlePostHead}>
													Fashion
												</h2>
												<TitlePreview
													title={"New Post"}
													preview={
														"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolor animi ex voluptatem totam ab aut amet reiciendis, in laborum?"
													}
													href='https://google.com'
												/>
												<ReadMore href={"https://google.com"} />
											</PostInfo>
										</Post>
										<Post>
											<Thumbnail src={eight} />
											<PostInfo>
												<Date date={"Mar 4, 2019"} head={false} />
												<h2 className={post.singlePostHead}>
													Fashion
												</h2>
												<TitlePreview
													title={"New Post"}
													preview={
														"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolor animi ex voluptatem totam ab aut amet reiciendis, in laborum?"
													}
													href='https://google.com'
												/>
												<ReadMore href={"https://google.com"} />
											</PostInfo>
										</Post>
										<Post>
											<Thumbnail src={eight} />
											<PostInfo>
												<Date date={"Mar 4, 2019"} head={false} />
												<h2 className={post.singlePostHead}>
													Fashion
												</h2>
												<TitlePreview
													title={"New Post"}
													preview={
														"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolor animi ex voluptatem totam ab aut amet reiciendis, in laborum?"
													}
													href='https://google.com'
												/>
												<ReadMore href={"https://google.com"} />
											</PostInfo>
										</Post>
										<Post>
											<Thumbnail src={eight} />
											<PostInfo>
												<Date date={"Mar 4, 2019"} head={false} />
												<h2 className={post.singlePostHead}>
													Fashion
												</h2>
												<TitlePreview
													title={"New Post"}
													preview={
														"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolor animi ex voluptatem totam ab aut amet reiciendis, in laborum?"
													}
													href='https://google.com'
												/>
												<ReadMore href={"https://google.com"} />
											</PostInfo>
										</Post>
										<Post>
											<Thumbnail src={eight} />
											<PostInfo>
												<Date date={"Mar 4, 2019"} head={false} />
												<h2 className={post.singlePostHead}>
													Fashion
												</h2>
												<TitlePreview
													title={"New Post"}
													preview={
														"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolor animi ex voluptatem totam ab aut amet reiciendis, in laborum?"
													}
													href='https://google.com'
												/>
												<ReadMore href={"https://google.com"} />
											</PostInfo>
										</Post>
										<Post>
											<Thumbnail src={eight} />
											<PostInfo>
												<Date date={"Mar 4, 2019"} head={false} />
												<h2 className={post.singlePostHead}>
													Fashion
												</h2>
												<TitlePreview
													title={"New Post"}
													preview={
														"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolor animi ex voluptatem totam ab aut amet reiciendis, in laborum?"
													}
													href='https://google.com'
												/>
												<ReadMore href={"https://google.com"} />
											</PostInfo>
										</Post>
										<Post>
											<Thumbnail src={eight} />
											<PostInfo>
												<Date date={"Mar 4, 2019"} head={false} />
												<h2 className={post.singlePostHead}>
													Fashion
												</h2>
												<TitlePreview
													title={"New Post"}
													preview={
														"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolor animi ex voluptatem totam ab aut amet reiciendis, in laborum?"
													}
													href='https://google.com'
												/>
												<ReadMore href={"https://google.com"} />
											</PostInfo>
										</Post>
									</PostFlex>
								</PostWrap>
							</Margin>
						</GridLeft>
						<Sidebar>
							<Sticky>
								<TopTrend>
									<TrendingPost />
									<TrendingPost />
									<TrendingPost />
									<TrendingPost />
									<TrendingPost />
									<TrendingPost />
									<TrendingPost />
									<TrendingPost />
									<TrendingPost />
									<TrendingPost />
								</TopTrend>
							</Sticky>
						</Sidebar>
					</Grid>
				</div>
			</Margin>
		</Container>
	);
}
