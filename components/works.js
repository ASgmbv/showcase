import { Box, Container, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import NextImage from "next/image";

function getGridArea(idx) {
	if (idx === 0) {
		return "1 / 1 / 2 / 3";
	} else if (idx === 1) {
		return "1 / 3 / 2 / 4";
	} else if (idx === 2) {
		return "2 / 1 / 3 / 2";
	} else if (idx === 3) {
		return "2 / 2 / 3 / 4";
	}
}

const Works = ({ projects }) => {
	return (
		<>
			<Box id="projects">
				<Container py="80px">
					<Heading
						textAlign="center"
						color="#094E8F"
						textTransform="uppercase"
					>
						Our Projects
					</Heading>
				</Container>
			</Box>
			<Grid templateColumns={["1fr", null, "repeat(3, 1fr)"]} gap="1">
				{projects.map(({ title, description, image }, idx) => (
					<Box
						key={title}
						height="360px"
						position="relative"
						gridArea={[null, null, getGridArea(idx)]}
					>
						<NextImage
							{...image}
							placeholder="blur"
							layout="fill"
							objectFit="cover"
						/>
						<Flex
							position="absolute"
							top="0"
							left="0"
							width="100%"
							height="100%"
							color="white"
							justifyContent="center"
							flexDir="column"
							padding={[10, null, 14]}
							bg={[
								"rgba(77, 124, 142, 0.8)",
								null,
								null,
								"rgba(77, 124, 142, 0.4)",
							]}
							_hover={{
								backgroundColor: "rgba(77, 124, 142, 0.8)",
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
								fontWeight="normal"
								textAlign="center"
								fontSize={["lg", null, "xl"]}
								letterSpacing="wide"
								opacity={[1, null, null, 0]}
								mb="2"
								transition="all ease-in-out 0.3s"
							>
								{title}
							</Heading>

							<Text
								opacity={[1, null, null, 0]}
								fontSize={["sm"]}
								textAlign="center"
								transition="all ease-in-out 0.3s"
							>
								{description}
							</Text>
						</Flex>
					</Box>
				))}
			</Grid>
		</>
	);
};

export default Works;
