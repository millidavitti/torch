const date = new Date(Date.UTC(2023, 1));

const content = `
<p>
Meditation has been around for thousands of years and has been practiced by various cultures and religions around the world. In recent years, it has gained popularity as a tool for promoting mental health and well-being. Research has shown that regular meditation practice can have numerous benefits for mental health, including reduced stress, anxiety, and depression. In this blog post, we will explore the benefits of meditation for mental health in more detail.</p>

<article>
<h2>Reduces stress and anxiety</h2>

<p>One of the most commonly cited benefits of meditation is its ability to reduce stress and anxiety. When we meditate, we activate the parasympathetic nervous system, which is responsible for promoting feelings of relaxation and calmness. Regular meditation practice can help reduce cortisol levels, the hormone associated with stress. A study published in the Journal of Alternative and Complementary Medicine found that regular meditation practice can reduce anxiety symptoms in individuals with generalized anxiety disorder.</p></article>

<article>
<h2>Improves mood</h2>

<p>In addition to reducing stress and anxiety, regular meditation practice has been shown to improve mood. A study published in the Journal of Psychiatric Practice found that mindfulness meditation can improve symptoms of depression. Meditation has been found to increase the production of serotonin, a neurotransmitter that is responsible for regulating mood.</p></article>

<article>
<h2>Enhances focus and concentration</h2>

<p>Meditation has been found to enhance focus and concentration, which can be particularly beneficial for individuals with attention deficit hyperactivity disorder (ADHD). A study published in the Journal of Attention Disorders found that mindfulness meditation can improve attention and reduce hyperactivity in individuals with ADHD.</p></article>


<article>
<h2>Increases self-awareness</h2>

<p>Meditation can help individuals develop greater self-awareness, which is the ability to recognize and understand one's own thoughts, emotions, and behaviors. By becoming more self-aware, individuals can develop a greater understanding of their own mental health and well-being, and take steps to improve it.</p></article>

<article>
<h2>Improves sleep quality</h2>

<p>Sleep is essential for good mental health, and regular meditation practice has been shown to improve sleep quality. A study published in JAMA Internal Medicine found that mindfulness meditation can improve sleep quality in older adults with insomnia.</p></article>

<article>
<h2>Promotes feelings of empathy and compassion</h2>
<p>
Meditation has been found to promote feelings of empathy and compassion, which can be beneficial for both personal and social relationships. A study published in the journal Emotion found that loving-kindness meditation can increase feelings of compassion and empathy towards oneself and others.
</p>
</article>

<p>
In conclusion, regular meditation practice can have numerous benefits for mental health, including reducing stress and anxiety, improving mood, enhancing focus and concentration, increasing self-awareness, improving sleep quality, and promoting feelings of empathy and compassion. If you are interested in trying meditation, there are many resources available, including guided meditations, meditation apps, and classes. With regular practice, you may find that meditation can be a valuable tool for promoting mental health and well-being.
</p>
`;
export const mockPosts = [
	{
		title: "The Benefits of Meditation for Mental Health",
		content,
		published: date.toISOString(),
		thumb: "",
		author: {
			name: "Donald Abua",
			avatar:
				"https://res.cloudinary.com/torch-cms-media/image/upload/v1673611182/avatar_vyu2q3.jpg",
		},
		categories: ["Tech", "Food"],
		snippet:
			"Meditation has been around for thousands of years and has been practiced by various cultures and religions around the world. In recent years, it has gained popularity as a tool for promoting mental health and well-being. Research has shown that regular meditation practice can have numerous benefits for mental health, including reduced stress, anxiety, and depression.",
		updated: null,
		editorsPick: false,
		featured: false,
		tags: ["meditation", "depression", "mental health"],
	},
	{
		title: "The Benefits of Mental Health",
		content,
		published: date.toISOString(),
		thumb: "",
		author: {
			name: "Donald Abua",
			avatar:
				"https://res.cloudinary.com/torch-cms-media/image/upload/v1673611182/avatar_vyu2q3.jpg",
		},
		categories: ["Tech", "Food"],
		snippet:
			"Meditation has been around for thousands of years and has been practiced by various cultures and religions around the world. In recent years, it has gained popularity as a tool for promoting mental health and well-being. Research has shown that regular meditation practice can have numerous benefits for mental health, including reduced stress, anxiety, and depression.",
		updated: null,
		editorsPick: false,
		featured: false,
		tags: ["meditation", "depression", "mental health"],
	},
	{
		title: "The Meditation for Mental Health",
		content,
		published: date.toISOString(),
		thumb: "",
		author: {
			name: "Donald Abua",
			avatar:
				"https://res.cloudinary.com/torch-cms-media/image/upload/v1673611182/avatar_vyu2q3.jpg",
		},
		categories: ["Tech", "Food"],
		snippet:
			"Meditation has been around for thousands of years and has been practiced by various cultures and religions around the world. In recent years, it has gained popularity as a tool for promoting mental health and well-being. Research has shown that regular meditation practice can have numerous benefits for mental health, including reduced stress, anxiety, and depression.",
		updated: null,
		editorsPick: false,
		featured: false,
		tags: ["meditation", "depression", "mental health"],
	},
	{
		title: "The Benefits of Kung Fu for Mental Health",
		content,
		published: date.toISOString(),
		thumb: "",
		author: {
			name: "Donald Abua",
			avatar:
				"https://res.cloudinary.com/torch-cms-media/image/upload/v1673611182/avatar_vyu2q3.jpg",
		},
		categories: ["Tech", "Food"],
		snippet:
			"Meditation has been around for thousands of years and has been practiced by various cultures and religions around the world. In recent years, it has gained popularity as a tool for promoting mental health and well-being. Research has shown that regular meditation practice can have numerous benefits for mental health, including reduced stress, anxiety, and depression.",
		updated: null,
		editorsPick: false,
		featured: false,
		tags: ["meditation", "depression", "mental health"],
	},
];

export const menu = [
	{
		id: "Home",
		name: "Home",
		isdropDown: false,
		dropItems: [],
	},
	{
		id: "Categories",
		name: "Categories",
		isdropDown: true,
		dropItems: [],
		dropItemModel: "Category",
	},
	{
		id: "Archive",
		name: "Archive",
		isdropDown: true,
		dropItems: [],
		dropItemModel: "Archive",
	},
	{
		id: "Authors",
		name: "Authors",
		isdropDown: false,
		dropItems: [],
		dropItemModel: "Archive",
	},
];

export const categories = [
	{
		id: "Tech",
		name: "Tech",
		posts: [],
	},
	{
		id: "Food",
		name: "Food",
		posts: [],
	},
	{
		id: "Travel",
		name: "Travel",
		posts: [],
	},
];

export const archives = [
	{
		year: 2023,
		posts: [],
	},
	{
		year: 2024,
		posts: [],
	},
];
