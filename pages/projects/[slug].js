import Footer from "@/components/footer";
import Header from "@/components/header";
import { Box, Container, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import Gallery from "@/components/gallery";
import { queryProjectBySlug, queryProjects } from "lib/queries";
import { getPlaiceholder } from "plaiceholder";
import bannerImage from "../../public/blogs/main.png";

export async function getStaticProps({ params }) {
	const project = await queryProjectBySlug(params.slug);
	const { base64, img } = await getPlaiceholder(project.cover);

	delete img["width"];
	delete img["height"];

	return {
		props: {
			project,
			cover: {
				...img,
				blurDataURL: base64,
			},
		},
		revalidate: 1,
	};
}

export async function getStaticPaths() {
	const services = await queryProjects();
	const paths = services.map(({ slug }) => ({
		params: {
			slug,
		},
	}));

	return {
		paths,
		fallback: true,
	};
}

const ProjectPage = ({ project, cover }) => {
	if (!project) {
		return <div>loading</div>;
	}

	return (
		<>
			<Header />
			<Box height={["500px", null, "600px"]} position="relative">
				{cover ? (
					<NextImage
						{...cover}
						layout="fill"
						objectFit="cover"
						placeholder="blur"
					/>
				) : (
					<NextImage
						src={bannerImage}
						layout="fill"
						objectFit="cover"
						placeholder="blur"
					/>
				)}

				<Flex
					position="absolute"
					top="0"
					left="0"
					width="100%"
					height="100%"
					bg="linear-gradient(0deg, #000000 -13%, rgba(0, 0, 0, 0) 150%)"
				>
					<Container maxW="container.xl" boxSize="100%">
						<Flex
							justifyContent={["center", null, "flex-end"]}
							boxSize="100%"
							flexDirection="column"
						>
							<Heading as="span" color="white" mb="100px">
								{project.title}
							</Heading>
							<Grid
								display={["none", null, "grid"]}
								templateColumns={"repeat(3, 1fr)"}
								gap="6"
								mb="100px"
							>
								{[
									{
										label: "client",
										value:
											"VANCOUVER INTERNATIONAL AIRPORT AUTHORITY",
									},
									{
										label: "client",
										value:
											"VANCOUVER INTERNATIONAL AIRPORT AUTHORITY",
									},
									{
										label: "client",
										value:
											"VANCOUVER INTERNATIONAL AIRPORT AUTHORITY",
									},
									{
										label: "SECTOR",
										value: "BUILDINGS, SPECIAL PROJECTS",
									},
									{
										label: "SECTOR",
										value: "BUILDINGS, SPECIAL PROJECTS",
									},
									{
										label: "SECTOR",
										value: "BUILDINGS, SPECIAL PROJECTS",
									},
								].map(({ label, value }, idx) => (
									<Flex key={idx} color="white" flexDirection="column">
										<Text
											as="span"
											fontSize="sm"
											color="#7A7A7A"
											textTransform="uppercase"
										>
											{label}
										</Text>
										<Text
											as="span"
											fontSize="sm"
											textTransform="uppercase"
										>
											{value}
										</Text>
									</Flex>
								))}
							</Grid>
						</Flex>
					</Container>
				</Flex>
			</Box>
			<Container maxW="container.xl">
				<Grid
					templateColumns={["1fr", null, "2fr 1fr"]}
					gap={[0, null, 10]}
					my="50px"
					position="relative"
				>
					<Box height={["300px", null, "500px"]}>
						<Gallery
							images={project.gallery}
							position="relative"
							top={["-100px"]}
						/>
					</Box>
					<Grid
						display={["grid", null, "none"]}
						templateColumns="1fr"
						gap="6"
						position="relative"
						top="-50px"
					>
						{[
							{
								label: "client",
								value: "VANCOUVER INTERNATIONAL AIRPORT AUTHORITY",
							},
							{
								label: "client",
								value: "VANCOUVER INTERNATIONAL AIRPORT AUTHORITY",
							},
							{
								label: "client",
								value: "VANCOUVER INTERNATIONAL AIRPORT AUTHORITY",
							},
							{
								label: "SECTOR",
								value: "BUILDINGS, SPECIAL PROJECTS",
							},
							{
								label: "SECTOR",
								value: "BUILDINGS, SPECIAL PROJECTS",
							},
							{
								label: "SECTOR",
								value: "BUILDINGS, SPECIAL PROJECTS",
							},
						].map(({ label, value }, idx) => (
							<Flex key={idx} flexDirection="column">
								<Text
									as="span"
									fontSize="sm"
									color="#7A7A7A"
									textTransform="uppercase"
								>
									{label}
								</Text>
								<Text as="span" fontSize="sm" textTransform="uppercase">
									{value}
								</Text>
							</Flex>
						))}
					</Grid>
					<Box>
						<Heading mb="4">{project.title}</Heading>
						<Text lineHeight="taller">{project.description}</Text>
					</Box>
				</Grid>
			</Container>
			<Footer />
		</>
	);
};

export default ProjectPage;
