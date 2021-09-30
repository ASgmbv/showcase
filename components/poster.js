import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import NextImage from "next/image";

const DESCRIPTION_LENGTH = 180;

const Poster = ({ title, description, image, ...props }) => {
	return (
		<Box position="relative" {...props}>
			<NextImage src={image} layout="fill" objectFit="cover" />
			<Flex
				position="absolute"
				top="0"
				left="0"
				width="100%"
				height="100%"
				color="white"
				justifyContent="center"
				flexDir="column"
				padding={[6, null, 10]}
				bg={["rgba(9, 78, 143, 0.8)", null, null, "rgba(9, 78, 143, 0.4)"]}
				_hover={{
					backgroundColor: "rgba(9, 78, 143, 0.8)",
					transition: "all 0.4s",
					h3: {
						transition: "all ease-in-out 0.3s",
						opacity: 1,
					},
					p: {
						transition: "all 0.5s",
						opacity: 1,
					},
				}}
			>
				<Heading
					as="h3"
					fontWeight="medium"
					textAlign="center"
					fontSize={["lg", null, "2xl"]}
					letterSpacing="wide"
					opacity={[1, null, null, 0]}
					transition="all ease-in-out 0.3s"
					mb="3"
				>
					{title}
				</Heading>

				<Text
					opacity={[1, null, null, 0]}
					fontSize={["sm"]}
					textAlign="center"
					transition="all ease-in-out 0.3s"
				>
					{description.length < DESCRIPTION_LENGTH
						? description
						: description.substring(0, DESCRIPTION_LENGTH).concat(" ...")}
				</Text>
			</Flex>
		</Box>
	);
};

export default Poster;
