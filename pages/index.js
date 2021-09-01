import { Box } from "@chakra-ui/react";
import Features from "../components/features";
import Footer from "../components/footer";
import BannerSlider from "../components/slider";
import Works from "../components/works";

export default function Home() {
	return (
		<Box>
			<BannerSlider />
			<Box height="200px"></Box>
			<Features />
			<Box height="200px"></Box>
			<Works />
			<Footer />
		</Box>
	);
}
