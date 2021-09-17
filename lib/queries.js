import { Client } from "./prismic";
import Prismic from "@prismicio/client";

const parseBlogPost = ({
	id,
	uid,
	first_publication_date,
	last_publication_date,
	data: { title, content, category, cover },
}) => ({
	id,
	slug: uid,
	createdAt: first_publication_date,
	changedAt: last_publication_date,
	title,
	content,
	category,
	cover: cover.url || "/blogs/post3.png",
});

export async function queryAllBlogPosts() {
	const response = await Client().query(
		Prismic.Predicates.at("document.type", "blog_post"),
		{
			pageSize: 100,
			orderings: "[document.last_publication_date desc]",
		}
	);

	return response.results.map((item) => {
		return parseBlogPost(item);
	});
}

export async function queryBlogPostBySlug(slug) {
	const post = await Client().getByUID("blog_post", slug);

	return parseBlogPost(post);
}

const parseService = ({
	id,
	uid,
	first_publication_date,
	last_publication_date,
	data: { title, description, cover, gallery },
}) => ({
	id,
	slug: uid,
	createdAt: first_publication_date,
	changedAt: last_publication_date,
	title,
	description,
	cover: cover.url || "/blogs/post3.png",
	gallery,
});

export async function queryServices(options) {
	const response = await Client().query(
		Prismic.Predicates.at("document.type", "service"),
		{
			orderings: "[document.last_publication_date desc]",
			pageSize: 100,
			...options,
		}
	);

	return response.results.map((item) => {
		return parseService(item);
	});
}

export async function queryServiceBySlug(slug) {
	const post = await Client().getByUID("service", slug);

	return parseService(post);
}
