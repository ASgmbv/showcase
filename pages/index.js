import { Box } from "@chakra-ui/react";
import Features from "../components/features";
import Footer from "../components/footer";
import Form from "../components/form";
import BannerSlider from "../components/slider";
import { Testimonials } from "../components/testimonials";
import Works from "../components/works";
import Head from "next/head";
import Header from "../components/header";
import { queryProjects, queryServices } from "lib/queries";

export const getStaticProps = async () => {
	const services = await queryServices({
		pageSize: 4,
	});

	const projects = await queryProjects({
		pageSize: 4,
	});

	return {
		props: {
			projects,
			services,
		},
		revalidate: 1,
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
