import Footer from "@/components/footer";
import Header from "@/components/header";
import {
	Box,
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
		<Stack spacing={[2, null, 6]}>
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
								bottom: ["60%", null, "60%"],
							},
							p: {
								opacity: 1,
							},
						}}
					>
						<Container maxW="container.xl">
							<Box boxSize="100%" textAlign="center" position="relative">
								<Heading
									as="h3"
									color="white"
									fontWeight="medium"
									fontSize={["lg", null, "3xl"]}
									position="absolute"
									bottom={["60%", null, 0]}
									left="0"
									right="0"
									transition="all linear 0.3s"
									maxW="800px"
									mx="auto"
								>
									{title}
								</Heading>

								<Text
									color="white"
									lineHeight={["tall", null, "taller"]}
									opacity={[1, null, 0]}
									position="absolute"
									left="0"
									right="0"
									bottom="20%"
									transition="all linear 0.3s"
									maxW="800px"
									mx="auto"
								>
									{description}
								</Text>
							</Box>
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
				gap="6"
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
									bottom: ["70%", null, "50%"],
								},
								p: {
									opacity: 1,
								},
							}}
						>
							<Box boxSize="100%" position="relative" textAlign="center">
								<Heading
									as="h3"
									color="white"
									fontWeight="medium"
									fontSize={["lg", null, "3xl"]}
									position="absolute"
									bottom={["70%", null, "10"]}
									left="10"
									right="10"
									transition="all linear 0.3s"
								>
									{title}
								</Heading>

								<Text
									color="white"
									lineHeight="taller"
									position="absolute"
									bottom="30%"
									left="10"
									right="10"
									opacity={[1, null, 0]}
									transition="all linear 0.3s"
								>
									{description}
								</Text>
							</Box>
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
			<Box height={["250px", null, "400px"]} position="relative">
				<NextImage
					src="/services/main.png"
					layout="fill"
					objectFit="cover"
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
							SERVICES
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
			<Box id="services">
				<Container py="80px">
					<Heading textAlign="center" color="#094E8F">
						WHAT WE DO
					</Heading>
				</Container>
			</Box>
			<MainService />
			<Box id="services">
				<Container py="80px">
					<Heading textAlign="center" color="#094E8F">
						OUR SERVICES
					</Heading>
				</Container>
			</Box>
			<SpecificService />
			<Box height="100px"></Box>
			<Footer />
		</>
	);
};

export default ServicesPage;
