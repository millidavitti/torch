import React from "react";
// Component
import Post from "components/Reuse/Post";
import AuthCard from "components/AuthorCard/AuthCard";
import Author from "components/Reuse/Author";
import Date from "components/Reuse/Date";
import TitlePreview from "components/Reuse/TitlePreview";
import ReadMore from "components/Reuse/ReadMore";
import TrendingPost from "components/Reuse/TrendingPost";
import TopTrend from "components/Reuse/TopTrend";
import PostWrap from "components/Reuse/PostWrap";
import PostFlex from "components/Reuse/PostFlex";
import Container from "components/Reuse/Container";

// Assets
import nine from "assets/images/nine.jpg";
import ten from "assets/images/ten.jpg";
// Css
import post from "components/Reuse/CSS/post.module.css";
import category from "components/Reuse/CSS/category.module.css";

function Category() {
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
					<div className={post.info}>
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
					</div>
				</PostFlex>
			</PostWrap>

			<PostFlex>
				<Post css={category} />
				<Post css={category} />
				<Post css={category} />
				<Post css={category} />
				<Post css={category} />
				<Post css={category} />
			</PostFlex>
			<AuthCard
				name={"Donald Abua"}
				description={
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas veniam quia aspernatur culpa quibusdam!"
				}
			/>
			<TopTrend>
				<TrendingPost css={category} />
				<TrendingPost css={category} />
				<TrendingPost css={category} />
				<TrendingPost css={category} />
				<TrendingPost css={category} />
				<TrendingPost css={category} />
				<TrendingPost css={category} />
			</TopTrend>
		</Container>
	);
}
/*   <TitlePrev cssWrap={category.wrapTp}>
          <h2 className={category.title}>
            <a href="#"> </a>
            Pinketh effect on men
          </h2>
          <p className={category.postPreview}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            quas veniam quia aspernatur culpa quibusdam!+
          </p>
        </TitlePrev> */
export default Category;
