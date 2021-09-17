import Footer from "@/components/footer";
import Header from "@/components/header";
import { Box, Container, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import "keen-slider/keen-slider.min.css";
import Gallery from "@/components/gallery";

const images = ["/work1.jpg", "/work2.jpg", "/work3.jpg", "/work4.jpg"];

const ProjectPage = () => {
	return (
		<>
			<Header />
			<Box height={["500px", null, "600px"]} position="relative">
				<NextImage src="/blogs/main.png" layout="fill" objectFit="cover" />

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
								Italian Style Luxury Backyard
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
							images={images}
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
						<Heading mb="4">Italian Style Luxury</Heading>
						<Text lineHeight="taller">
							The lushly landscaped, open-air shopping mall has operated
							at 100% occupancy for several decades. Opened in 1965, the
							destination retail environment challenged commercial trends
							of the time. A strong hierarchy, harmony, and flow guides
							pedestrian usage patterns by creating a pleasant
							experience.
						</Text>
					</Box>
				</Grid>
			</Container>
			<Footer />
		</>
	);
};

export default ProjectPage;
