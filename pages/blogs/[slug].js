import Footer from "@/components/footer";
import Header from "@/components/header";
import { CalendarIcon } from "@chakra-ui/icons";
import {
	Box,
	Container,
	Flex,
	Grid,
	Heading,
	Link,
	Stack,
	Text,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { queryBlogPosts, queryBlogPostBySlug } from "lib/queries";
import NextImage from "next/image";
import NextLink from "next/link";
import { getPlaiceholder } from "plaiceholder";
import { RichText } from "prismic-reactjs";

export async function getStaticProps({ params }) {
	const blogPost = await queryBlogPostBySlug(params.slug);
	const { base64, img } = await getPlaiceholder(blogPost?.cover);

	let latestBlogPosts = await queryBlogPosts({
		pageSize: 4,
	});

	delete img["width"];
	delete img["height"];

	latestBlogPosts = await Promise.all(
		latestBlogPosts.map(async (item) => {
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
			blogPost: {
				...blogPost,
				cover: {
					...img,
					blurDataURL: base64,
				},
			},
			latestBlogPosts,
		},
		revalidate: 1,
	};
}

export async function getStaticPaths() {
	const blogPosts = await queryBlogPosts();
	const paths = blogPosts.map(({ slug }) => ({
		params: {
			slug,
		},
	}));

	return {
		paths,
		fallback: true,
	};
}

const BlogPage = ({ blogPost, latestBlogPosts }) => {
	if (!blogPost) {
		return <div>loading</div>;
	}

	return (
		<>
			<Header />
			<Box height="400px" position="relative">
				<NextImage
					{...blogPost.cover}
					layout="fill"
					objectFit="cover"
					placeholder="blur"
				/>
			</Box>
			<Box my="50px">
				<Container maxW="container.xl">
					<Box>
						<Text as="span" textTransform="uppercase">
							{blogPost.category}
						</Text>
						<Heading mt="5" mb="5">
							{blogPost.title}
						</Heading>
						<Flex alignItems="center" mb="10">
							<CalendarIcon mr="2" />
							<Text as="span" fontSize="sm">
								{format(
									new Date(blogPost.createdAt),
									"dd MMM yyyy, EEEE p"
								)}
							</Text>
						</Flex>
						<Grid templateColumns="2fr 1fr" gap="100px">
							<Box className="blog-content">
								<RichText render={blogPost.content} />
							</Box>
							<Box>
								<Stack spacing="10">
									<Heading fontSize={["md", null, "2xl"]}>
										Similar Posts
									</Heading>
									{latestBlogPosts.map(
										({ id, title, createdAt, cover, slug }) => (
											<NextLink
												key={id}
												href={`blogs/${slug}`}
												passHref
											>
												<Link>
													<Stack
														key={id}
														spacing="4"
														_hover={{
															opacity: 0.7,
														}}
													>
														<Box
															position="relative"
															height="250px"
														>
															<NextImage
																{...cover}
																layout="fill"
																objectFit="cover"
																placeholder="blur"
															/>
														</Box>
														<Heading
															size="md"
															fontWeight="semibold"
														>
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
												</Link>
											</NextLink>
										)
									)}
								</Stack>
							</Box>
						</Grid>
					</Box>
				</Container>
			</Box>
			<Box height="50px"></Box>
			<Footer />
		</>
	);
};

export default BlogPage;
