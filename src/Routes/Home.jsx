import React from "react";

// Components

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
// Assets
import five from "assets/images/five.jpg";
import six from "assets/images/six.jpg";
import seven from "assets/images/seven.jpg";
import eight from "assets/images/eight.jpg";
import nine from "assets/images/nine.jpg";
import ten from "assets/images/ten.jpg";

// CSS
import travel from "components/Reuse/CSS/travel.module.css";
import health from "components/Reuse/CSS/health.module.css";
import post from "components/Reuse/CSS/post.module.css";
import authCard from "components/AuthorCard/authCard.module.css";
import Thumbnail from "components/Reuse/Thumbnail";

function Home() {
	return (
		<Container>
			<Hero />
			<EditorsPick />
			{/* Travel News */}
			<section className={travel.travel}>
				<SectionHeader
					text='Travel News'
					description='Lorem ipsum dolor sit amet adipisicing elit.'
				/>
				<TitlePreview
					css={travel}
					cssWrap={travel.wrapTp}
					cssTitle={travel.title}
					cssPreview={travel.postPreview}
					title={"That Which Does Not Kill Us Makes Us Stronger"}
					preview={
						"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius et non aliquam dolor facere quam ducimus officia perspiciatis numquam assumenda."
					}
					href={"https://google.com"}
				/>
				<ReadMore />
				<Thumbnail
					src={five}
					css={travel}
					href={"https://google.com"}
				/>
				<div className={travel.flexRow}>
					<div>
						<Thumbnail
							src={six}
							css={travel}
							href={"https://google.com"}
						/>
						<TitlePreview
							cssWrap={travel.wrapTp}
							cssTitle={travel.title}
							cssPreview={travel.postPreview}
							title={
								"He Who Has a Why to Live Can Bear Almost Any How"
							}
							href={"https://google.com"}
						/>
					</div>
					<div>
						<Thumbnail
							src={seven}
							css={travel}
							href={"https://google.com"}
						/>
						<TitlePreview
							cssWrap={travel.wrapTp}
							cssTitle={travel.title}
							cssPreview={travel.postPreview}
							title={
								"We Are All in the Gutter, but Some of Us Are Looking at the Stars"
							}
							href={"https://google.com"}
						/>
					</div>
				</div>
			</section>
			{/* Health News */}
			<section className={health.health}>
				<SectionHeader
					text='Health News'
					description='Lorem ipsum dolor sit amet adipisicing elit.'
				/>
				<PostFlex>
					<Thumbnail
						src={eight}
						css={travel}
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
							cssWrap={health.wrapTp}
							cssTitle={health.title}
							cssPreview={health.postPreview}
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
						<Date
							css={health.date}
							date={"Jan 17, 2037"}
							head={false}
						/>
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
						<Date
							css={health.date}
							date={"Jan 17, 2037"}
							head={false}
						/>
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
						<Date
							css={health.date}
							date={"Jan 17, 2037"}
							head={false}
						/>
					</div>
				</div>
			</section>
			{/* Latest News */}
			<PostWrap>
				<SectionHeader
					text={"Latest News"}
					description={
						"Lorem ipsum dolor sit amet adipisicing elit."
					}
				/>
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

export default Home;
