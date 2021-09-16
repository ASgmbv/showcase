import Header from "@/components/header";
import Banner from "@/components/banner";
import {
	Box,
	Container,
	Flex,
	Grid,
	Heading,
	Text,
	Wrap,
	WrapItem,
	Link,
} from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import Footer from "@/components/footer";

const filters = [
	"Latest",
	"press",
	"market highlights",
	"lanscaping",
	"design",
	"case study",
];

const Filters = () => {
	return (
		<Container maxW="container.xl" my="14">
			<Wrap spacing={[6, null, 10]}>
				{filters.map((filter) => (
					<WrapItem key={filter}>
						<Box textTransform="uppercase" fontSize={["sm", null, "lg"]}>
							{filter}
						</Box>
					</WrapItem>
				))}
			</Wrap>
		</Container>
	);
};

const projects = [
	{
		title: "Beautiful Backyard",
		description: "Muttontown, NY",
		image: "/work1.jpg",
	},
	{
		title: "Sophisticated Pool",
		description: "Jamaica, NY",
		image: "/work2.jpg",
	},
	{
		title: "Maginificent Pool",
		description: "Long Island, NY",
		image: "/work3.jpg",
	},
	{
		title: "Gorgeous Estate",
		description: "Kings Point, NY",
		image: "/work4.jpg",
	},
];

function getGridArea(idx) {
	const a = idx % 4;
	if (a === 0) {
		return "1 / 3";
	} else if (a === 1) {
		return "3 / 4";
	} else if (a === 2) {
		return "1 / 2";
	} else if (a === 3) {
		return "2 / 4";
	}
}

const Projects = () => {
	return (
		<Grid gap="1">
			{projects.map(({ image, title, description }, idx) => (
				<NextLink key={title} href={`/projects/${idx}`} passHref>
					<Link gridColumn={[null, null, getGridArea(idx)]}>
						<Box height="360px" position="relative">
							<NextImage layout="fill" src={image} objectFit="cover" />
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
									h3: {
										transition: "all ease-in-out 0.3s",
										opacity: 1,
									},
									p: {
										transition: "all 0.5s",
										opacity: 1,
									},
								}}
								transition="all 0.4s"
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
					</Link>
				</NextLink>
			))}
		</Grid>
	);
};

const ProjectsPage = () => {
	return (
		<>
			<Header />
			<Banner title="PROJECTS" />
			<Filters />
			<Projects />
			<Box height="100px"></Box>
			<Footer />
		</>
	);
};

export default ProjectsPage;
