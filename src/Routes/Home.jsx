import React from "react";

// Components

import Slider from "components/Hero/Slider";
import Hero from "components/Hero/Hero";
import EditorsPick from "components/EditorsPick/EditorsPick";
import SectionHeader from "components/Reuse/SectionHeader";
import TitlePreview from "components/Reuse/TitlePreview";
import ReadMore from "components/Reuse/ReadMore";
import Author from "components/Reuse/Author";
import Date from "components/Reuse/Date";
import AuthCard from "components/AuthorCard/AuthCard";
import PostInfo from "components/Reuse/PostInfo";
import PostWrap from "components/Reuse/PostWrap";
import Container from "components/Reuse/Container";
import PostFlex from "components/Reuse/PostFlex";
import Thumbnail from "components/Reuse/Thumbnail";
import Margin from "components/Reuse/Margin";
import Post from "components/Reuse/Post";
import TrendingPost from "components/Reuse/TrendingPost";

// Assets

import six from "assets/images/six.jpg";
import eight from "assets/images/eight.jpg";
import nine from "assets/images/nine.jpg";
import ten from "assets/images/ten.jpg";

// CSS
import health from "components/Reuse/CSS/health.module.css";
import post from "components/Reuse/CSS/post.module.css";
import authCard from "components/AuthorCard/authCard.module.css";
import Grid from "components/Reuse/Grid";
import TopTrend from "components/Reuse/TopTrend";
import Sticky from "components/Reuse/Sticky";
import GridLeft from "components/Reuse/GridLeft";
import Sidebar from "components/Reuse/Sidebar";
import Featured from "components/Hero/Featured";
import Travel from "components/Travel";

export default function Home() {
	window.scrollTo(0, 0);

	return (
		<Container>
			<Hero>
				<Slider />
				<Featured />
			</Hero>
			<EditorsPick />
			{/* Travel News */}
			<PostWrap>
				<SectionHeader
					text='Travel News'
					description='Lorem ipsum dolor sit amet adipisicing elit.'
				/>
				<Margin>
					<Travel />
				</Margin>
			</PostWrap>
			{/* Health News */}
			<PostWrap>
				<SectionHeader
					text='Health News'
					description='Lorem ipsum dolor sit amet adipisicing elit.'
				/>
				<Margin>
					<PostFlex>
						<Thumbnail
							src={eight}
							css={post}
							href={"https://google.com"}
						/>
						<PostInfo>
							<Author
								cssWrap={health.wrapAuth}
								cssAvatar={health.avatar}
								cssName={health.name}
								name='Desmond Abua'
								src={six}
							/>
							<TitlePreview
								title={
									"If You Don’t Stand for Something You Will Fall for Anything"
								}
								preview={
									"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius et non aliquam dolor facere quam ducimus officia perspiciatis numquam assumenda."
								}
								href={"https://google.com"}
							/>
							<ReadMore />
						</PostInfo>
					</PostFlex>
				</Margin>
				<div className={health.postList}>
					<div>
						<TitlePreview
							cssWrap={`${health.wrapTp} ${health.modWrapTp}`}
							cssTitle={health.title}
							title={
								"The Greatest Thing in The World is to Know How to Belong to Oneself"
							}
							href={"https://google.com"}
						/>
						<Date css={health.date} date={"Jan 17, 2037"} head={false} />
					</div>
					<div>
						<TitlePreview
							cssWrap={`${health.wrapTp} ${health.modWrapTp}`}
							cssTitle={health.title}
							title={
								"The Two Most Powerful Warriors Are Patience and Time"
							}
							href={"https://google.com"}
						/>
						<Date css={health.date} date={"Jan 17, 2037"} head={false} />
					</div>
					<div>
						<TitlePreview
							cssWrap={`${health.wrapTp} ${health.modWrapTp}`}
							cssTitle={health.title}
							title={
								"You Will Become as Small as Your Controlling Desire"
							}
							href={"https://google.com"}
						/>
						<Date css={health.date} date={"Jan 17, 2037"} head={false} />
					</div>
				</div>
			</PostWrap>
			{/* Latest News */}
			<PostWrap>
				<SectionHeader
					text={"Latest News"}
					description={"Lorem ipsum dolor sit amet adipisicing elit."}
				/>
				<Grid>
					<GridLeft>
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

						{/* Others */}
						<PostFlex>
							<Post>
								<Thumbnail
									src={nine}
									css={post}
									href={"https://google.com"}
									alt={"me"}
								/>
								<PostInfo>
									<Date date={"Mar 4, 2019"} head={false} />
									<h2 className={post.singlePostHead}>Fashion</h2>
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
								<Thumbnail
									src={nine}
									css={post}
									href={"https://google.com"}
									alt={"me"}
								/>
								<PostInfo>
									<Date date={"Mar 4, 2019"} head={false} />
									<h2 className={post.singlePostHead}>Fashion</h2>
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
								<Thumbnail
									src={nine}
									css={post}
									href={"https://google.com"}
									alt={"me"}
								/>
								<PostInfo>
									<Date date={"Mar 4, 2019"} head={false} />
									<h2 className={post.singlePostHead}>Fashion</h2>
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
					</GridLeft>
					{/* Sidebar */}
					<Sidebar>
						<Sticky>
							<TopTrend>
								<TrendingPost />
								<TrendingPost />
								<TrendingPost />
								<TrendingPost />
								<TrendingPost />
							</TopTrend>
						</Sticky>
					</Sidebar>
				</Grid>
			</PostWrap>
			<section className={authCard.container}>
				<AuthCard
					name={"Davitti Vegan"}
					description={
						"Nascetur netus, nascetur ante elit sodales. Placerat class ante lacus consequat sapien ante elit sodales "
					}
				/>
			</section>
		</Container>
	);
}
