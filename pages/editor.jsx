import React, { useReducer, useRef } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import axios from "axios";
import useSWR from "swr";
import postPage from "../components/Reuse/CSS/postPage.module.css";
import postcss from "../components/Reuse/CSS/post.module.css";
import readmore from "../components/Reuse/CSS/readMore.module.css";
import Container from "../components/Reuse/Container";
import Margin from "../components/Reuse/Margin";
import { Plus } from "phosphor-react";
import Grid from "../components/Reuse/Grid";
import GridLeft from "../components/Reuse/GridLeft";
import Sidebar from "../components/Reuse/Sidebar";

export default function ContentManagement() {
	const [post, setPost] = useReducer(drafPostReducer, draftPost);
	const [state, dispatch] = useReducer(reducer, componentState);
	const thumbnailRef = useRef();
	const updatePost = ({ target }) => setPost({ type: "update", target });
	const { data: authors, isLoading: authorLoading } = useSWR(
		"/api/authors",
		fetcher,
	);
	const { data: categories, isLoading: categoriesLoading } = useSWR(
		"/api/category",
		fetcher,
	);

	if (authorLoading) return;
	if (categoriesLoading) return;

	const postAuthor = authors.find((author) => author._id === state.authorID);
	const postCategory = categories.find((cat) => cat._id === state.categoryID);

	console.log(post);

	return (
		<Container>
			<Head>
				<meta name='description' content='Blog Post' />
				<meta property='og:image' content={"url"} />
				<title>Content Management</title>
			</Head>
			<Margin>
				<div className={postPage.wrap}>
					<div className={postPage.thumbnail}>
						<img src={post?.thumb} alt='' />
						<div className={postPage.overlay}>
							{/* Category */}
							<h2 className={postPage.tag}>
								{postCategory?.name || "Pick Category"}
							</h2>
							{/* Title */}
							<Margin>
								<input
									className={postPage.title}
									style={{ color: "black" }}
									contentEditable
									id='title'
									onChange={updatePost}
									placeholder='Title'
								/>
							</Margin>
							{/* Author */}
							<div className={postcss.wrapAuth}>
								<img
									src={postAuthor?.avatar}
									alt={postAuthor?.name || "Author's Name"}
									className={postcss.avatar}
								/>

								{/* <input author /> */}
								<h3 className={postcss.name}>
									{postAuthor?.name || "Author's Name"}
								</h3>
							</div>
						</div>
					</div>

					{/* Content Editor */}
					<Grid>
						<Editor setPost={setPost} content={post.content} />

						<Sidebar>
							<Margin>
								<h2>Authors</h2>
								<ol>
									{authors.map((author) => (
										<li
											style={{
												padding: "5px",
												cursor: "pointer",
												margin: "5px 0",
												background: "#ccced1",
											}}
											id={author._id}
											onClick={(e) => {
												dispatch({ type: "pick-author", value: e.target.id });
												setPost({
													type: "update",
													target: { id: e.target.id, type: "author" },
												});
											}}
											key={author.name}
										>
											{author.name}
										</li>
									))}
								</ol>
								<h2>Categories</h2>
								<ol>
									{categories.map((category) => (
										<li
											style={{
												padding: "5px",
												cursor: "pointer",
												background: "#ccced1",
												margin: "5px 0",
											}}
											id={category._id}
											onClick={(e) => {
												dispatch({ type: "pick-category", value: e.target.id });
												setPost({
													type: "update",
													target: { id: e.target.id, type: "categories" },
												});
											}}
											key={category.name}
										>
											{category.name}
										</li>
									))}
								</ol>
							</Margin>
						</Sidebar>
					</Grid>

					{/* Thumbnail */}
					<Margin>
						<h2>Thumb</h2>
						<input
							type='url'
							id='thumb'
							onChange={updatePost}
							value={post.thumb}
							ref={thumbnailRef}
						/>
					</Margin>

					{/* Snippet */}
					<Margin>
						<h2>Snippet</h2>
						<textarea
							id='snippet'
							rows='7'
							cols='40'
							placeholder='Snippet'
							maxLength={300}
							onChange={updatePost}
							value={post.snippet}
						/>
					</Margin>

					{/* Editor's Pick */}
					<Margin>
						<h2>Editors Pick</h2>
						<input id='editorsPick' type='checkbox' onChange={updatePost} />
					</Margin>

					{/* Featured */}
					<Margin>
						<h2>Featured</h2>
						<input id='featured' type='checkbox' onChange={updatePost} />
					</Margin>

					{/* Tags and Date */}
					<Grid>
						<GridLeft>
							<Margin>
								{/* Tags */}
								<div className={postPage.postContent}>
									{/* Content Footer */}
									<div className={postPage.contentFooter}>
										<p className={postPage.date}>
											{new Date(post.published).toDateString()}
										</p>

										{/* <Tag tags={parsedPost?.tags} /> */}
										<div className={postPage.tagTools}>
											{/* Tags */}

											<h2>Tags</h2>
											<div className={postPage.toolRack}>
												<Plus
													weight='bold'
													size={20}
													cursor='pointer'
													className={postPage.addTag}
													onClick={() =>
														setPost({ type: "tags", value: post.tag })
													}
												/>
											</div>
											{/* Footer Tag */}
											<div className={postPage.footerTag}>
												{/* Optimistic Update */}
												{post.tags.map((tag) => (
													<p key={tag} className={postPage.tagEntity}>
														{tag}
													</p>
												))}
												{/* Tag Input */}
												{
													<div className={postPage.tagEntity}>
														<input
															type='text'
															id='tag'
															onChange={({ target }) =>
																setPost({
																	type: "update",
																	target,
																})
															}
															value={post.tag}
														/>
													</div>
												}
											</div>
										</div>
									</div>
								</div>
							</Margin>
						</GridLeft>
					</Grid>
				</div>
			</Margin>

			{/* Publish */}
			<button
				className={readmore.readMore}
				style={{ textAlign: "center" }}
				onClick={() => {
					if (!URL_PATTERN.test(post.thumb)) {
						thumbnailRef.current.focus();
						return;
					}
					axios.post("/api/new-post", {
						post,
					});
				}}
			>
				Publish
			</button>
		</Container>
	);
}

const URL_PATTERN =
	/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

const fetcher = (url) => axios.get(url).then((res) => res.data);
const componentState = {
	authorID: "",
	categoryID: "",
	isValidUrl: false,
};

function reducer(state, action) {
	switch (action.type) {
		case "pick-author":
			return { ...state, authorID: action.value };
		case "pick-category":
			return { ...state, categoryID: action.value };
		case "invalid-url":
	}
}

function drafPostReducer(state, action) {
	switch (action.type) {
		case "update":
			if (action.target.type === "checkbox")
				return { ...state, [action.target.id]: action.target.checked };
			else if (action.target.type === "editor")
				return { ...state, [action.target.id]: action.target.value };
			else if (action.target.type === "date")
				return {
					...state,
					[action.target.id]: new Date(action.target.value).toISOString(),
				};
			else if (action.target.type === "url")
				return {
					...state,
					[action.target.id]: action.target.value,
				};
			else if (action.target.id === "tag")
				return {
					...state,
					[action.target.id]: action.target.value,
				};
			else if (action.target.type === "author")
				return { ...state, [action.target.type]: action.target.id };
			else if (action.target.type === "categories")
				return { ...state, [action.target.type]: [action.target.id] };
			else return { ...state, [action.target.id]: action.target.value };
		case "tags":
			return { ...state, tags: [...state.tags, action.value], tag: "" };
	}
}

const draftPost = {
	title: "",
	content: "",
	published: new Date(Date.now()).toISOString(),
	thumb: "",
	author: {
		name: "Donald Abua",
		avatar:
			"https://res.cloudinary.com/torch-cms-media/image/upload/v1673611182/avatar_vyu2q3.jpg",
	},
	categories: [],
	snippet: "",
	updated: null,
	editorsPick: false,
	featured: false,
	tags: [],
	tag: "",
	isPublished: false,
};

const Editor = ({ setPost, content }) => {
	const Comp = dynamic(() => import("../components/CKEditor"), { ssr: false });
	return <Comp setPost={setPost} content={content} />;
};
