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

export default function PostPage() {
	return (
		<Container>
			<Margin>
				<div className={postPage.wrap}>
					{/* Thumbnail */}
					<div className={postPage.thumbnail}>
						<img src={eight} alt='' />
						<div className={postPage.overlay}>
							<p className={postPage.tag}>Fashion</p>
							<h1>
								don't let what you cannot do interfere
							</h1>
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
										<div
											className={
												postPage.stick
											}
										>
											<Author
												cssWrap={
													postPage.wrapAuth
												}
												cssAvatar={
													postPage.avatar
												}
												cssName={
													postPage.name
												}
												name={"Vegan Bake"}
												src={seven}
											/>
											<div
												className={
													postPage.share
												}
											>
												<p>Share:</p>
												<div
													className={
														postPage.shareIcons
													}
												>
													<FacebookLogo
														size={25}
														color={
															"var(--secondary)"
														}
														cursor={
															"pointer"
														}
													/>
													<TwitterLogo
														size={25}
														color={
															"var(--secondary)"
														}
														cursor={
															"pointer"
														}
													/>
												</div>
											</div>
										</div>
									</div>
									<article
										className={
											postPage.contentWrap
										}
									>
										<p>
											Lorem ipsum dolor sit
											amet consectetur,
											adipisicing elit. Alias
											expedita sit tempore esse
											libero maxime, incidunt
											beatae doloribus ex
											atque, nam sequi earum
											deleniti autem fugiat,
											ducimus consequuntur.
											Sapiente, assumenda
											accusantium dolorem
											minima magni pariatur
											molestiae voluptatum.
											Reiciendis quam,
											recusandae dignissimos
											iure, doloremque
											quibusdam inventore animi
											magni officiis dicta
											minus, quia cumque esse
											debitis numquam nemo
											corrupti fugiat
											accusantium culpa
											corporis ducimus maxime
											nam minima! Ratione ipsam
											aut nostrum expedita et
											totam voluptatibus fuga?
											Minus ab est fugiat
											officiis quasi earum
											illum, accusamus,
											consectetur itaque
											molestias ea nobis nisi.
											Culpa perspiciatis
											provident non deserunt
											maxime doloremque facilis
											neque distinctio
											consequatur dolore
											asperiores maiores,
											cupiditate totam est
											doloribus eligendi illum
											illo? Neque, maxime nihil
											aliquid quo officia
											consequatur totam rerum
											in a enim, fuga expedita
											repellat iusto provident
											facere dignissimos
											molestiae dolor libero,
											accusantium eos nesciunt
											ullam cum amet. Eos illo
											porro iure harum,
											mollitia asperiores
											corporis magnam. Eos quod
											illo nulla, maiores ea
											dolorem tempora ex
											numquam! Laboriosam ex
											natus asperiores
											laudantium, beatae aut
											rerum provident, eos nam
											minima fugit quibusdam
											consequatur amet libero
											optio? Unde veritatis
											consequuntur expedita
											porro modi odio fugiat
											eligendi ea eveniet
											aliquam perferendis
											reprehenderit architecto
											a, neque nihil quasi
											praesentium quia? Dolorem
											assumenda eveniet, amet
											ad corrupti, voluptate,
											atque maiores iusto
											labore mollitia
											accusantium ipsa
											repudiandae illo quis
											earum ex voluptas quas?
											Quo, laborum aspernatur
											eveniet quia velit
											doloremque optio eaque
											porro nihil dolorem,
											atque similique
											consequuntur libero nisi
											reiciendis at nemo
											ratione omnis! Excepturi
											impedit ipsam hic
											delectus! Laborum, nobis
											aperiam recusandae in
											beatae corrupti. Quis
											vitae porro perspiciatis
											eveniet dicta repudiandae
											officia voluptates
											asperiores voluptas! Quod
											quae natus sapiente fuga
											corporis commodi expedita
											maxime dicta vel nihil.
											Aliquam deleniti iure id
											dolorem veritatis aut
											totam dicta, corrupti
											ipsum libero quisquam
											earum deserunt tempora
											sed voluptatibus
											similique autem. Eum
											perspiciatis consequatur
											numquam ad molestiae.
										</p>
									</article>
									{/* Content Footer */}
									<div
										className={
											postPage.contentFooter
										}
									>
										<p className={postPage.date}>
											Mar 6, 2019
										</p>
										<div
											className={
												postPage.footerTag
											}
										></div>
									</div>
								</div>
								<Margin>
									<div
										className={
											postPage.postAuthor
										}
									>
										<img src={eight} alt='' />
										<div
											className={
												postPage.postAuthinfo
											}
										>
											<h2>Donald Abua</h2>
											<p>
												Lorem ipsum dolor
												sit amet consectetur
												adipisicing elit.
												Non facilis aperiam,
												perferendis earum
												odit eligendi?
											</p>
										</div>
									</div>
								</Margin>
								<PostWrap>
									<SectionHeader
										text={"Related Posts"}
									/>
									<PostFlex>
										<Post>
											<Thumbnail src={eight} />
											<PostInfo>
												<Date
													date={
														"Mar 4, 2019"
													}
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
													title={
														"New Post"
													}
													preview={
														"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolor animi ex voluptatem totam ab aut amet reiciendis, in laborum?"
													}
													href='https://google.com'
												/>
												<ReadMore
													href={
														"https://google.com"
													}
												/>
											</PostInfo>
										</Post>
										<Post>
											<Thumbnail src={eight} />
											<PostInfo>
												<Date
													date={
														"Mar 4, 2019"
													}
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
													title={
														"New Post"
													}
													preview={
														"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolor animi ex voluptatem totam ab aut amet reiciendis, in laborum?"
													}
													href='https://google.com'
												/>
												<ReadMore
													href={
														"https://google.com"
													}
												/>
											</PostInfo>
										</Post>
										<Post>
											<Thumbnail src={eight} />
											<PostInfo>
												<Date
													date={
														"Mar 4, 2019"
													}
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
													title={
														"New Post"
													}
													preview={
														"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolor animi ex voluptatem totam ab aut amet reiciendis, in laborum?"
													}
													href='https://google.com'
												/>
												<ReadMore
													href={
														"https://google.com"
													}
												/>
											</PostInfo>
										</Post>
										<Post>
											<Thumbnail src={eight} />
											<PostInfo>
												<Date
													date={
														"Mar 4, 2019"
													}
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
													title={
														"New Post"
													}
													preview={
														"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolor animi ex voluptatem totam ab aut amet reiciendis, in laborum?"
													}
													href='https://google.com'
												/>
												<ReadMore
													href={
														"https://google.com"
													}
												/>
											</PostInfo>
										</Post>
										<Post>
											<Thumbnail src={eight} />
											<PostInfo>
												<Date
													date={
														"Mar 4, 2019"
													}
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
													title={
														"New Post"
													}
													preview={
														"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolor animi ex voluptatem totam ab aut amet reiciendis, in laborum?"
													}
													href='https://google.com'
												/>
												<ReadMore
													href={
														"https://google.com"
													}
												/>
											</PostInfo>
										</Post>
										<Post>
											<Thumbnail src={eight} />
											<PostInfo>
												<Date
													date={
														"Mar 4, 2019"
													}
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
													title={
														"New Post"
													}
													preview={
														"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolor animi ex voluptatem totam ab aut amet reiciendis, in laborum?"
													}
													href='https://google.com'
												/>
												<ReadMore
													href={
														"https://google.com"
													}
												/>
											</PostInfo>
										</Post>
										<Post>
											<Thumbnail src={eight} />
											<PostInfo>
												<Date
													date={
														"Mar 4, 2019"
													}
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
													title={
														"New Post"
													}
													preview={
														"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolor animi ex voluptatem totam ab aut amet reiciendis, in laborum?"
													}
													href='https://google.com'
												/>
												<ReadMore
													href={
														"https://google.com"
													}
												/>
											</PostInfo>
										</Post>
										<Post>
											<Thumbnail src={eight} />
											<PostInfo>
												<Date
													date={
														"Mar 4, 2019"
													}
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
													title={
														"New Post"
													}
													preview={
														"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolor animi ex voluptatem totam ab aut amet reiciendis, in laborum?"
													}
													href='https://google.com'
												/>
												<ReadMore
													href={
														"https://google.com"
													}
												/>
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
