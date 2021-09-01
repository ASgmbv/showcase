import { Box } from "@chakra-ui/react";
import Features from "../components/features";
import Works from "../components/works";

export default function Home() {
	return (
		<Box my="100px">
			<Features />
			<Box height="200px"></Box>
			<Works />
		</Box>
	);
}
