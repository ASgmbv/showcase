import { Box, Container, Flex } from "@chakra-ui/react";
import NextImage from "next/image";

const Header = () => {
	return (
		<Box
			position="sticky"
			top="0"
			bg="white"
			zIndex="99"
			boxShadow="0 5px 12px rgb(77 124 142 / 25%)"
		>
			<Container maxW="container.lg">
				<Flex>
					<Box
						width={["100px", null, "140px"]}
						height={["50px", null, "60px"]}
						position="relative"
					>
						<NextImage
							src="/logo.png"
							layout="fill"
							objectFit="contain"
						/>
					</Box>
				</Flex>
			</Container>
		</Box>
	);
};

export default Header;
