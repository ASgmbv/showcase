import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import NextImage from "next/image";

const DESCRIPTION_LENGTH = 180;

const Card = ({ title, description, image, button }) => {
	return (
		<Box height={["250px", null, "500px"]} position="relative">
			<NextImage src={image} layout="fill" objectFit="cover" />
			<Flex
				position="absolute"
				top="0"
				left="0"
				bg={[
					"rgba(9, 78, 143, 0.5)",
					null,
					"linear-gradient(180deg, rgba(9, 78, 143, 0.5) 0%, rgba(9, 78, 143, 0) 80%)",
				]}
				boxSize="100%"
				initial="rest"
				transition="all ease-in-out 0.3s"
				_hover={{
					backgroundColor: "rgba(9, 78, 143, 0.5)",
					div: {
						opacity: 1,
						transform: "scale(1)",
						justifyContent: "center",
					},
					h3: {
						bottom: 0,
					},
					p: {
						opacity: 1,
						bottom: 0,
					},
					button: {
						opacity: 1,
					},
				}}
			>
				<Flex
					flexDirection="column"
					alignItems="center"
					textAlign="center"
					color="white"
					pt={["30px", null, "70px"]}
					pb={["30px", null, "50px"]}
					px={["20px", null, "40px"]}
				>
					<Heading
						as="h3"
						fontWeight="medium"
						fontSize={["lg", null, "2xl"]}
						position="relative"
						bottom={[0, null, "15px"]}
						transition="all 0.3s"
						mb={["10px", null, "30px"]}
					>
						{title}
					</Heading>

					<Text
						lineHeight="tall"
						opacity={[1, null, 0]}
						transition="all 0.3s"
						position="relative"
						bottom={[0, null, "-15px"]}
						fontSize={["sm", null, "md"]}
					>
						{description.length < DESCRIPTION_LENGTH
							? description
							: description
									.substring(0, DESCRIPTION_LENGTH)
									.concat(" ...")}
					</Text>

					<Box opacity={[1, null, 0]} transition="all 0.4s" mt="auto">
						{button}
					</Box>
				</Flex>
				<Box
					position="absolute"
					top={[4, null, 6]}
					left={[4, null, 6]}
					right={[4, null, 6]}
					bottom={[4, null, 6]}
					borderTop="1px solid #fff"
					borderBottom="1px solid #fff"
					opacity={[1, null, 0]}
					transform={["scaleX(1)", null, "scaleX(0.1)"]}
					transition="all linear 0.3s"
				></Box>

				<Box
					position="absolute"
					top={[4, null, 6]}
					left={[4, null, 6]}
					right={[4, null, 6]}
					bottom={[4, null, 6]}
					borderLeft="1px solid #fff"
					borderRight="1px solid #fff"
					opacity={[1, null, 0]}
					transform={["scaleY(1)", null, "scaleY(0.1)"]}
					transition="all linear 0.3s"
				></Box>
			</Flex>
		</Box>
	);
};

export default Card;
