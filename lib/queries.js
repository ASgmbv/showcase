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

export async function queryBlogPosts(options) {
	const response = await Client().query(
		Prismic.Predicates.at("document.type", "blog_post"),
		{
			pageSize: 100,
			orderings: "[document.last_publication_date desc]",
			...options,
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
	gallery: gallery.map((image) => image.image.url),
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

const parseProject = ({
	id,
	uid,
	first_publication_date,
	last_publication_date,
	data: {
		title,
		description,
		cover,
		gallery,
		client,
		location,
		service,
		object,
		start_date,
		end_date,
	},
}) => ({
	id,
	slug: uid,
	createdAt: first_publication_date,
	changedAt: last_publication_date,
	title,
	description,
	cover: cover.url || "/blogs/post3.png",
	gallery: gallery.map((image) => image.image.url),
	client,
	location,
	service,
	object,
	start_date,
	end_date,
});

export async function queryProjects(options) {
	const response = await Client().query(
		Prismic.Predicates.at("document.type", "project"),
		{
			orderings: "[document.last_publication_date desc]",
			pageSize: 100,
			...options,
		}
	);

	return response.results.map((item) => {
		return parseProject(item);
	});
}

export async function queryProjectBySlug(slug) {
	const post = await Client().getByUID("project", slug);

	return parseProject(post);
}

const parseTestimonial = ({
	id,
	uid,
	first_publication_date,
	last_publication_date,
	data: { name, description, testimonial },
}) => ({
	id,
	slug: uid,
	createdAt: first_publication_date,
	changedAt: last_publication_date,
	name,
	description: description || "Customer",
	testimonial,
});

export async function queryTestimonials(options) {
	const response = await Client().query(
		Prismic.Predicates.at("document.type", "testimonial"),
		{
			orderings: "[document.last_publication_date desc]",
			pageSize: 100,
			...options,
		}
	);

	return response.results.map((item) => {
		return parseTestimonial(item);
	});
}

const parseTeamMember = ({
	id,
	uid,
	first_publication_date,
	last_publication_date,
	data: { name, photo, position },
}) => ({
	id,
	slug: uid,
	createdAt: first_publication_date,
	changedAt: last_publication_date,
	name,
	photo: photo.url || "/blogs/post3.png",
	position,
});

export async function queryTeamMembers(options) {
	const response = await Client().query(
		Prismic.Predicates.at("document.type", "team_member"),
		{
			orderings: "[document.last_publication_date desc]",
			pageSize: 100,
			...options,
		}
	);

	return response.results.map((item) => {
		return parseTeamMember(item);
	});
}

const parseFAQ = ({
	id,
	uid,
	first_publication_date,
	last_publication_date,
	data: { question, answer },
}) => ({
	id,
	slug: uid,
	createdAt: first_publication_date,
	changedAt: last_publication_date,
	question,
	answer,
});

export async function queryFAQs(options) {
	const response = await Client().query(
		Prismic.Predicates.at("document.type", "faq"),
		{
			orderings: "[document.last_publication_date desc]",
			pageSize: 100,
			...options,
		}
	);

	return response.results.map((item) => {
		return parseFAQ(item);
	});
}
