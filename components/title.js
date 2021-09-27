import { Box, Container, Heading } from "@chakra-ui/react";

const Title = ({ children }) => {
	return (
		<Box id="services">
			<Container py={["60px", null, "80px"]}>
				<Heading textAlign="center" color="#094E8F">
					{children}
				</Heading>
			</Container>
		</Box>
	);
};

export default Title;
