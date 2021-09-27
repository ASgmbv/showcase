import { Box, Container, Heading } from "@chakra-ui/react";

const Title = ({ children, ...props }) => {
	return (
		<Box pt={["60px", null, "80px"]} pb={["60px", null, "80px"]} {...props}>
			<Container>
				<Heading textAlign="center" color="#094E8F">
					{children}
				</Heading>
			</Container>
		</Box>
	);
};

export default Title;
