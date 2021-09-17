import { Box } from "@chakra-ui/react";
import Features from "../components/features";
import Footer from "../components/footer";
import Form from "../components/form";
import BannerSlider from "../components/slider";
import { Testimonials } from "../components/testimonials";
import Works from "../components/works";
import Head from "next/head";
import Header from "../components/header";
import { getPlaiceholder } from "plaiceholder";
import { mainProjects } from "../lib/data";
import { queryServices } from "lib/queries";

export const getStaticProps = async () => {
	let projects = mainProjects.map(async (item) => {
		const { base64, img } = await getPlaiceholder(item.image);

		delete img["width"];
		delete img["height"];

		return {
			...item,
			image: {
				...img,
				blurDataURL: base64,
			},
		};
	});

	projects = await Promise.all(projects);

	const services = await queryServices({
		pageSize: 4,
	});

	return {
		props: {
			projects,
			services,
		},
	};
};

export default function Home({ services, projects }) {
	return (
		<>
			<Head>
				<title>Showcase</title>
			</Head>

			<BannerSlider />
			<Box position="relative">
				<Header />
				<Features services={services} />
				<Works projects={projects} />
				<Testimonials />
				<Form />
				<Footer />
			</Box>
		</>
	);
}
