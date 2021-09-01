import { Box, Container, Heading } from "@chakra-ui/react";
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
			<Box>
				<Container my="80px">
					<Heading textAlign="center" color="#094E8F">
						Our Services
					</Heading>
				</Container>
			</Box>
			<Features />
			<Box>
				<Container my="80px">
					<Heading textAlign="center" color="#094E8F">
						Our Projects
					</Heading>
				</Container>
			</Box>
			<Works />
			<Testimonials />
			<Form />
			<Footer />
		</Box>
	);
}
