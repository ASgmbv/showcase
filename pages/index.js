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
import { mainFeatures, mainProjects } from "../lib/data";

export const getStaticProps = async () => {
	let features = mainFeatures.map(async (item) => {
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

	features = await Promise.all(features);
	projects = await Promise.all(projects);

	return {
		props: {
			features,
			projects,
		},
	};
};

export default function Home({ features, projects }) {
	return (
		<>
			<Head>
				<title>Showcase</title>
			</Head>

			<BannerSlider />
			<Box position="relative">
				<Header />
				<Features features={features} />
				<Works projects={projects} />
				<Testimonials />
				<Form />
				<Footer />
			</Box>
		</>
	);
}
