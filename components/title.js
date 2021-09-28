import { Box, Container } from "@chakra-ui/react";
import { useFadeIn } from "lib/hooks";
import { MotionHeading } from "./motion";

const Title = ({ children, ...props }) => {
	const [ref, animation, variants] = useFadeIn();

	return (
		<Box pt={["60px", null, "80px"]} pb={["60px", null, "80px"]} {...props}>
			<Container>
				<MotionHeading
					textAlign="center"
					color="#094E8F"
					ref={ref}
					initial="hidden"
					animate={animation}
					variants={variants}
				>
					{children}
				</MotionHeading>
			</Container>
		</Box>
	);
};

export default Title;
