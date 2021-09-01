import { Box } from "@chakra-ui/react";
import Features from "../components/features";
import Footer from "../components/footer";
import Form from "../components/form";
import BannerSlider from "../components/slider";
import { Testimonials } from "../components/testimonials";
import Works from "../components/works";

export default function Home() {
	return (
		<Box>
			<BannerSlider />
			<Box height="200px"></Box>
			<Features />
			<Box height="200px"></Box>
			<Works />
			<Box height="200px"></Box>
			<Testimonials />
			<Form />
			<Footer />
		</Box>
	);
}
