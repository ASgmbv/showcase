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
	Link,
	StackDivider,
	Button,
} from "@chakra-ui/react";
import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { CalendarIcon } from "@chakra-ui/icons";
import { format } from "date-fns";
import { blogFilters } from "lib/data";
import { queryAllBlogPosts } from "lib/queries";
import NextImage from "next/image";
import NextLink from "next/link";
import { getPlaiceholder } from "plaiceholder";
import { useState } from "react";

export const getStaticProps = async () => {
	let blogPosts = await queryAllBlogPosts();

	blogPosts = await Promise.all(
		blogPosts.map(async (item) => {
			const { base64, img } = await getPlaiceholder(item.cover);

			delete img["width"];
			delete img["height"];

			return {
				...item,
				cover: {
					...img,
					blurDataURL: base64,
				},
			};
		})
	);

	return {
		props: {
			blogPosts,
		},
	};
};

const Filters = ({ setCategory, category }) => {
	return (
		<Container maxW="container.xl" my="10">
			<Wrap spacing={[6, null, 10]}>
				{blogFilters.map((filter) => (
					<WrapItem key={filter}>
						<Button
							textTransform="uppercase"
							color={category === filter ? "green.400" : "gray.700"}
							fontWeight="normal"
							fontSize={["sm", null, "lg"]}
							variant="unstyled"
							onClick={() => {
								setCategory(filter);
							}}
						>
							{filter}
						</Button>
					</WrapItem>
				))}
			</Wrap>
		</Container>
	);
};

const Posts = ({ posts, category }) => {
	return (
		<Container maxW="container.xl" my={["60px", null, "80px"]}>
			<Stack divider={<StackDivider />} spacing={[6, null, 10]}>
				{posts
					.filter((post) => {
						if (category === blogFilters[0]) {
							return true;
						}

						return post.category === category;
					})
					.map(({ id, slug, cover, category, title, createdAt }) => (
						<NextLink key={id} href={`blogs/${slug}`} passHref>
							<Link>
								<Grid
									templateColumns={["1fr", null, "repeat(2, 1fr)"]}
									_hover={{
										opacity: 0.7,
									}}
								>
									<Box
										height={["250px", null, "350px"]}
										position="relative"
									>
										<NextImage
											{...cover}
											layout="fill"
											objectFit="cover"
											placeholder="blur"
										/>
									</Box>
									<Stack
										padding={[4, null, 14]}
										pl={[0, null, 14]}
										justifyContent="center"
										spacing={[2, null, 4]}
									>
										<Text
											as="span"
											textTransform="uppercase"
											fontSize="sm"
										>
											{category}
										</Text>
										<Heading fontSize={["2xl", null, "3xl"]}>
											{title}
										</Heading>
										<Flex alignItems="center">
											<CalendarIcon mr="2" />
											<Text as="span" fontSize="sm">
												{format(
													new Date(createdAt),
													"dd MMM yyyy, EEEE p"
												)}
											</Text>
										</Flex>
									</Stack>
								</Grid>
							</Link>
						</NextLink>
					))}
			</Stack>
		</Container>
	);
};

const BlogsPage = ({ blogPosts = [] }) => {
	const [category, setCategory] = useState(blogFilters[0]);

	return (
		<>
			<Header />
			<Banner title="BLOGS" />
			<Filters category={category} setCategory={setCategory} />
			<Posts posts={blogPosts} category={category} />
			<Footer />
			{/* <pre>{JSON.stringify(blogPosts, null, 2)}</pre> */}
		</>
	);
};

export default BlogsPage;
