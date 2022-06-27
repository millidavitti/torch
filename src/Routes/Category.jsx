// Assets
import nine from "assets/images/nine.jpg";
import ten from "assets/images/ten.jpg";
import four from "assets/images/four.jpg";
import AuthCard from "components/AuthorCard/AuthCard";
import Author from "components/Reuse/Author";
import Container from "components/Reuse/Container";
// Css
import post from "components/Reuse/CSS/post.module.css";
import Date from "components/Reuse/Date";
// Component
import Post from "components/Reuse/Post";
import PostFlex from "components/Reuse/PostFlex";
import PostInfo from "components/Reuse/PostInfo";
import PostWrap from "components/Reuse/PostWrap";
import ReadMore from "components/Reuse/ReadMore";
import TitlePreview from "components/Reuse/TitlePreview";
import TopTrend from "components/Reuse/TopTrend";
import TrendingPost from "components/Reuse/TrendingPost";
import Thumbnail from "components/Reuse/Thumbnail";
import React from "react";
import Grid from "components/Reuse/Grid";
import GridLeft from "components/Reuse/GridLeft";
import Sidebar from "components/Reuse/Sidebar";
import Sticky from "components/Reuse/Sticky";

export default function Category() {
	return (
		<Container>
			<PostWrap>
				<PostFlex>
					<div className={post.thumbWrap}>
						<img src={nine} alt='' className={post.thumb} />
						<a href={"https://google.com"}> </a>
						<Author
							cssWrap={post.wrapAuth}
							cssAvatar={post.avatar}
							cssName={post.name}
							name={"Vegan Bake"}
							src={ten}
						/>
					</div>
					<PostInfo>
						<Date
							css={post.date}
							date={"Dec 16, 3020"}
							head={true}
						/>
						<TitlePreview
							cssWrap={post.wrapTp}
							cssTitle={post.title}
							cssPreview={post.postPreview}
							title={
								"The Greatest Thing in The World is to Know How to Belong to Oneself"
							}
							preview={
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius et non aliquam dolor numquam assumenda."
							}
							href={"https://google.com"}
						/>
						<ReadMore href={"https://google.com"} />
					</PostInfo>
				</PostFlex>
			</PostWrap>
			<Grid>
				<GridLeft>
					<PostWrap>
						<PostFlex>
							<Post>
								<Thumbnail
									src={four}
									css={post}
									href={"https://google.com"}
									alt={"me"}
								/>
								<PostInfo>
									<Date
										date={"Mar 4, 2019"}
										head={false}
									/>
									<h2
										className={
											post.singlePostHead
										}
									>
										Fashion
									</h2>
									<TitlePreview
										title={"New Post"}
										preview={
											"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolor animi ex voluptatem totam ab aut amet reiciendis, in laborum?"
										}
										href='https://google.com'
									/>
									<ReadMore
										href={"https://google.com"}
									/>
								</PostInfo>
							</Post>
							<Post>
								<Thumbnail
									src={four}
									css={post}
									href={"https://google.com"}
									alt={"me"}
								/>
								<PostInfo>
									<Date
										date={"Mar 4, 2019"}
										head={false}
									/>
									<h2
										className={
											post.singlePostHead
										}
									>
										Fashion
									</h2>
									<TitlePreview
										cssWrap={post.wrapTp}
										cssTitle={post.title}
										cssPreview={post.postPreview}
										title={"New Post"}
										preview={
											"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolor animi ex voluptatem totam ab aut amet reiciendis, in laborum?"
										}
										href='https://google.com'
									/>
									<ReadMore
										href={"https://google.com"}
									/>
								</PostInfo>
							</Post>
							<Post>
								<Thumbnail
									src={four}
									css={post}
									href={"https://google.com"}
									alt={"me"}
								/>
								<PostInfo>
									<Date
										date={"Mar 4, 2019"}
										head={false}
									/>
									<h2
										className={
											post.singlePostHead
										}
									>
										Fashion
									</h2>
									<TitlePreview
										title={"New Post"}
										preview={
											"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolor animi ex voluptatem totam ab aut amet reiciendis, in laborum?"
										}
										href='https://google.com'
									/>
									<ReadMore
										href={"https://google.com"}
									/>
								</PostInfo>
							</Post>
							<Post>
								<Thumbnail
									src={four}
									css={post}
									href={"https://google.com"}
									alt={"me"}
								/>
								<PostInfo>
									<Date
										date={"Mar 4, 2019"}
										head={false}
									/>
									<h2
										className={
											post.singlePostHead
										}
									>
										Fashion
									</h2>
									<TitlePreview
										cssWrap={post.wrapTp}
										cssTitle={post.title}
										cssPreview={post.postPreview}
										title={"New Post"}
										preview={
											"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolor animi ex voluptatem totam ab aut amet reiciendis, in laborum?"
										}
										href='https://google.com'
									/>
									<ReadMore
										href={"https://google.com"}
									/>
								</PostInfo>
							</Post>
							<Post>
								<Thumbnail
									src={four}
									css={post}
									href={"https://google.com"}
									alt={"me"}
								/>
								<PostInfo>
									<Date
										date={"Mar 4, 2019"}
										head={false}
									/>
									<h2
										className={
											post.singlePostHead
										}
									>
										Fashion
									</h2>
									<TitlePreview
										cssWrap={post.wrapTp}
										cssTitle={post.title}
										cssPreview={post.postPreview}
										title={"New Post"}
										preview={
											"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolor animi ex voluptatem totam ab aut amet reiciendis, in laborum?"
										}
										href='https://google.com'
									/>
									<ReadMore
										href={"https://google.com"}
									/>
								</PostInfo>
							</Post>
							<Post>
								<Thumbnail
									src={four}
									css={post}
									href={"https://google.com"}
									alt={"me"}
								/>
								<PostInfo>
									<Date
										date={"Mar 4, 2019"}
										head={false}
									/>
									<h2
										className={
											post.singlePostHead
										}
									>
										Fashion
									</h2>
									<TitlePreview
										title={"New Post"}
										preview={
											"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolor animi ex voluptatem totam ab aut amet reiciendis, in laborum?"
										}
										href='https://google.com'
									/>
									<ReadMore
										href={"https://google.com"}
									/>
								</PostInfo>
							</Post>
							<Post>
								<Thumbnail
									src={four}
									css={post}
									href={"https://google.com"}
									alt={"me"}
								/>
								<PostInfo>
									<Date
										date={"Mar 4, 2019"}
										head={false}
									/>
									<h2
										className={
											post.singlePostHead
										}
									>
										Fashion
									</h2>
									<TitlePreview
										cssWrap={post.wrapTp}
										cssTitle={post.title}
										cssPreview={post.postPreview}
										title={"New Post"}
										preview={
											"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolor animi ex voluptatem totam ab aut amet reiciendis, in laborum?"
										}
										href='https://google.com'
									/>
									<ReadMore
										href={"https://google.com"}
									/>
								</PostInfo>
							</Post>
							<Post>
								<Thumbnail
									src={four}
									css={post}
									href={"https://google.com"}
									alt={"me"}
								/>
								<PostInfo>
									<Date
										date={"Mar 4, 2019"}
										head={false}
									/>
									<h2
										className={
											post.singlePostHead
										}
									>
										Fashion
									</h2>
									<TitlePreview
										title={"New Post"}
										preview={
											"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolor animi ex voluptatem totam ab aut amet reiciendis, in laborum?"
										}
										href='https://google.com'
									/>
									<ReadMore
										href={"https://google.com"}
									/>
								</PostInfo>
							</Post>
							<Post>
								<Thumbnail
									src={four}
									css={post}
									href={"https://google.com"}
									alt={"me"}
								/>
								<PostInfo>
									<Date
										date={"Mar 4, 2019"}
										head={false}
									/>
									<h2
										className={
											post.singlePostHead
										}
									>
										Fashion
									</h2>
									<TitlePreview
										cssWrap={post.wrapTp}
										cssTitle={post.title}
										cssPreview={post.postPreview}
										title={"New Post"}
										preview={
											"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolor animi ex voluptatem totam ab aut amet reiciendis, in laborum?"
										}
										href='https://google.com'
									/>
									<ReadMore
										href={"https://google.com"}
									/>
								</PostInfo>
							</Post>
							<Post>
								<Thumbnail
									src={four}
									css={post}
									href={"https://google.com"}
									alt={"me"}
								/>
								<PostInfo>
									<Date
										date={"Mar 4, 2019"}
										head={false}
									/>
									<h2
										className={
											post.singlePostHead
										}
									>
										Fashion
									</h2>
									<TitlePreview
										cssWrap={post.wrapTp}
										cssTitle={post.title}
										cssPreview={post.postPreview}
										title={"New Post"}
										preview={
											"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolor animi ex voluptatem totam ab aut amet reiciendis, in laborum?"
										}
										href='https://google.com'
									/>
									<ReadMore
										href={"https://google.com"}
									/>
								</PostInfo>
							</Post>
						</PostFlex>
					</PostWrap>
					<AuthCard
						name={"Donald Abua"}
						description={
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas veniam quia aspernatur culpa quibusdam!"
						}
					/>
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
						</TopTrend>
					</Sticky>
				</Sidebar>
			</Grid>
		</Container>
	);
}
