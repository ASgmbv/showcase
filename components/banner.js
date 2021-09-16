import { Box, Flex, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import bannerImage from "../public/services/main.png";

const Banner = ({ title }) => {
	return (
		<Box height={["250px", null, "400px"]} position="relative">
			<NextImage
				src={bannerImage}
				layout="fill"
				objectFit="cover"
				placeholder="blur"
			/>
			<Flex
				position="absolute"
				top="0"
				left="0"
				bg="rgba(0, 0, 0, 0.4)"
				width="100%"
				height="100%"
				justifyContent="center"
				alignItems="center"
			>
				<Box position="relative">
					<Text as="span" color="white" fontSize={["2xl", null, "4xl"]}>
						{title}
					</Text>
					<Box height="2px" backgroundColor="white"></Box>
					<Box
						borderRadius="full"
						backgroundColor="white"
						boxSize="10px"
						position="absolute"
						bottom="calc(-5px)"
						left="calc(50% - 5px)"
					></Box>
				</Box>
			</Flex>
		</Box>
	);
};

export default Banner;
