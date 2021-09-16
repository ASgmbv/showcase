import Footer from "@/components/footer";
import Header from "@/components/header";
import { CalendarIcon } from "@chakra-ui/icons";
import {
	Box,
	Container,
	Flex,
	Grid,
	Heading,
	Stack,
	Text,
	Wrap,
	WrapItem,
} from "@chakra-ui/react";
import NextImage from "next/image";

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
		<Container maxW="container.xl" my="10">
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

const posts = [
	{
		image: "/blogs/post1.png",
		category: "lanscaping",
		title: "Master plans & Rendering",
		date: "14 Sep 2021, MOnday 6:41 pm",
	},
	{
		image: "/blogs/post2.png",
		category: "design",
		title: "Importance of Luxury",
		date: "14 Sep 2021, MOnday 6:41 pm",
	},
	{
		image: "/blogs/post3.png",
		category: "case study",
		title: "Stunning Waterfall Creation",
		date: "14 Sep 2021, MOnday 6:41 pm",
	},
];

const Posts = () => {
	return (
		<Container maxW="container.xl" my={["60px", null, "80px"]}>
			<Grid gap="14">
				{posts.map(({ image, category, title, date }, idx) => (
					<Grid
						key={idx}
						templateColumns={["1fr", null, "repeat(2, 1fr)"]}
					>
						<Box height={["250px", null, "350px"]} position="relative">
							<NextImage src={image} layout="fill" objectFit="cover" />
						</Box>
						<Stack
							padding={[4, null, 14]}
							pl={[0, null, 14]}
							justifyContent="center"
							spacing={[2, null, 4]}
						>
							<Text as="span" textTransform="uppercase" fontSize="sm">
								{category}
							</Text>
							<Heading fontSize={["2xl", null, "3xl"]}>{title}</Heading>
							<Flex alignItems="center">
								<CalendarIcon mr="2" />
								<Text as="span" fontSize="sm">
									{date}
								</Text>
							</Flex>
						</Stack>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

const BlogsPage = () => {
	return (
		<>
			<Header />
			<Box height={["250px", null, "400px"]} position="relative">
				<NextImage src="/blogs/main.png" layout="fill" objectFit="cover" />
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
							OUR BLOG
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
			<Filters />
			<Posts />
			<Footer />
		</>
	);
};

export default BlogsPage;
