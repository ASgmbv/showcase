import { Box } from "@chakra-ui/react";
import Features from "../components/features";
import Footer from "../components/footer";
import Form from "../components/form";
import BannerSlider from "../components/slider";
import { Testimonials } from "../components/testimonials";
import Works from "../components/works";
import Head from "next/head";
import Header from "../components/header";

export default function Home() {
	return (
		<>
			<Head>
				<title>Showcase</title>
			</Head>

			<BannerSlider />
			<Box position="relative">
				<Header />
				<Features />
				<Works />
				<Testimonials />
				<Form />
				<Footer />
			</Box>
		</>
	);
}
