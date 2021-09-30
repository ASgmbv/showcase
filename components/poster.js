import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import NextImage from "next/image";

const Poster = ({ title, location, image, ...props }) => {
	return (
		<Box position="relative" {...props}>
			<NextImage src={image} layout="fill" objectFit="cover" />
			<Flex
				position="absolute"
				top="0"
				left="0"
				boxSize="100%"
				color="white"
				padding={[6, null, "70px"]}
				bg={[
					"rgba(9, 78, 143, 0.5)",
					null,
					"linear-gradient(180deg, rgba(9, 78, 143, 0.5) 0%, rgba(9, 78, 143, 0) 80%)",
				]}
				transition="all ease-in-out 0.3s"
				_hover={{
					backgroundColor: "rgba(9, 78, 143, 0.5)",
					h3: {
						transition: "all ease-in-out 0.3s",
						opacity: 1,
					},
					p: {
						transition: "all 0.5s",
						opacity: 1,
					},
				}}
				alignItems="center"
				justifyContent="center"
			>
				<Flex flexDirection="column" textAlign="center" color="white">
					<Heading
						as="h3"
						fontWeight="medium"
						fontSize={["lg", null, "2xl"]}
						position="relative"
						bottom={[0, null, "15px"]}
						transition="all 0.3s"
					>
						{title}
					</Heading>

					<Text
						lineHeight="tall"
						opacity={[1, null, 0]}
						transition="all 0.3s"
						fontSize={["sm", null, "md"]}
					>
						{location}
					</Text>
				</Flex>
			</Flex>
		</Box>
	);
};

export default Poster;
