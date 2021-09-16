import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Title from "@/components/title";
import {
	Box,
	Button,
	Container,
	Flex,
	Grid,
	Heading,
	Stack,
	Text,
} from "@chakra-ui/react";
import NextImage from "next/image";

const MainService = () => {
	return (
		<Stack spacing="1">
			{[
				{
					image: "/work1.jpg",
					title: "Natural stone pátios & Innovated landscaping design",
					description:
						"For pool like no other, freeform is the day to go. While a lot of pools are often square or rectangle, freeform pools offer something different.",
				},
				{
					image: "/work2.jpg",
					title: "Outdoor living space",
					description:
						"For pool like no other, freeform is the day to go. While a lot of pools are often square or rectangle, freeform pools offer something different.",
				},
				{
					image: "/work3.jpg",
					title: "Master plans & Rendering",
					description:
						"For pool like no other, freeform is the day to go. While a lot of pools are often square or rectangle, freeform pools offer something different.",
				},
			].map(({ image, title, description }, idx) => (
				<Box
					key={idx}
					height={["300px", null, "300px"]}
					position="relative"
				>
					<NextImage src={image} layout="fill" objectFit="cover" />
					<Flex
						position="absolute"
						top="0"
						left="0"
						bg={[
							"rgba(77, 124, 142, 0.8)",
							null,
							"linear-gradient(0deg, rgba(77, 124, 142, 0.8) 0%, rgba(77, 124, 142, 0) 100%)",
						]}
						boxSize="100%"
						padding={[4, null, 6]}
						_hover={{
							backgroundColor: "rgba(77, 124, 142, 0.8)",
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
							},
						}}
					>
						<Container maxW="container.md">
							<Stack
								boxSize="100%"
								textAlign="center"
								position="relative"
								justifyContent="center"
								flexDirection="column"
								spacing="4"
							>
								<Flex
									height={["30%", null, "40%"]}
									justifyContent="center"
									alignItems="flex-end"
									textAlign="center"
								>
									<Heading
										as="h3"
										color="white"
										fontWeight="medium"
										fontSize={["lg", null, "3xl"]}
										transition="all linear 0.3s"
										position="relative"
										bottom={["0", null, "-160px"]}
									>
										{title}
									</Heading>
								</Flex>

								<Flex
									height={["70%", null, "60%"]}
									justifyContent="center"
									alignItems="flex-start"
								>
									<Text
										color="white"
										lineHeight={["tall", null, "taller"]}
										opacity={[1, null, 0]}
										transition="all linear 0.3s"
									>
										{description}
									</Text>
								</Flex>
							</Stack>
						</Container>

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
			))}
		</Stack>
	);
};

const SpecificService = () => {
	return (
		<Container maxW="container.xl">
			<Grid
				templateColumns={["repeat(1, 1fr)", null, "repeat(2, 1fr)"]}
				gap="1"
			>
				{[
					{
						image: "/work1.jpg",
						title: "Waterfalls, Outdoor kitchens & Fire features",
						description:
							"There are few better accompaniments to a pool than a water feature. Elegant and relaxing, the sound of the water...",
					},
					{
						image: "/work2.jpg",
						title: "Inground Pool Builders",
						description:
							"There are few better accompaniments to a pool than a water feature. Elegant and relaxing, the sound of the water...",
					},
					{
						image: "/work3.jpg",
						title: "Infinity Pool",
						description:
							"There are few better accompaniments to a pool than a water feature. Elegant and relaxing, the sound of the water...",
					},
					{
						image: "/work4.jpg",
						title: "Elevated Pool",
						description:
							"There are few better accompaniments to a pool than a water feature. Elegant and relaxing, the sound of the water...",
					},
					{
						image: "/bg1.jpg",
						title: "Concrete Pool",
						description:
							"There are few better accompaniments to a pool than a water feature. Elegant and relaxing, the sound of the water...",
					},
					{
						image: "/bg2.jpg",
						title: "New build swimming pools & Pool renovations ",
						description:
							"There are few better accompaniments to a pool than a water feature. Elegant and relaxing, ...",
					},
				].map(({ image, title, description }, idx) => (
					<Box
						key={idx}
						height={["250px", null, "500px"]}
						position="relative"
					>
						<NextImage src={image} layout="fill" objectFit="cover" />
						<Flex
							key={idx}
							position="absolute"
							top="0"
							left="0"
							bg={[
								"rgba(77, 124, 142, 0.8)",
								null,
								"linear-gradient(0deg, rgba(77, 124, 142, 0.8) 0%, rgba(77, 124, 142, 0) 100%)",
							]}
							boxSize="100%"
							initial="rest"
							_hover={{
								backgroundColor: "rgba(77, 124, 142, 0.8)",
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
								},
								button: {
									opacity: 1,
								},
							}}
						>
							<Stack
								boxSize="100%"
								position="relative"
								padding="6"
								spacing="4"
							>
								<Flex
									height={["30%", null, "40%"]}
									alignItems="flex-end"
									justifyContent="center"
									textAlign="center"
								>
									<Heading
										as="h3"
										color="white"
										fontWeight="medium"
										fontSize={["lg", null, "3xl"]}
										position="relative"
										bottom={["0", null, "-290px"]}
										transition="all 0.5s"
									>
										{title}
									</Heading>
								</Flex>

								<Flex
									height={["60%", null, "50%"]}
									textAlign="center"
									alignItems="flex-start"
									justifyContent="center"
								>
									<Text
										color="white"
										lineHeight="tall"
										opacity={[1, null, 0]}
										transition="all 0.7s"
									>
										{description}
									</Text>
								</Flex>

								<Flex
									height="10%"
									textAlign="center"
									alignItems="center"
									justifyContent="center"
								>
									<Button
										variant="link"
										color="white"
										opacity={[1, null, 0]}
										transition="all 0.4s"
										onClick={() => {
											alert("kkk");
										}}
									>
										Read More
									</Button>
								</Flex>
							</Stack>
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
				))}
			</Grid>
		</Container>
	);
};

const ServicesPage = () => {
	return (
		<>
			<Header />
			<Banner title="SERVICES" />
			<Title>WHAT WE DO</Title>
			<MainService />
			<Title>OUR SERVICES</Title>
			<SpecificService />
			<Box height="100px"></Box>
			<Footer />
		</>
	);
};

export default ServicesPage;
