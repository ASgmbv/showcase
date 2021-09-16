import Footer from "@/components/footer";
import Header from "@/components/header";
import { CalendarIcon } from "@chakra-ui/icons";
import { Box, Container, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import { queryAllBlogPosts, queryBlogPostBySlug } from "lib/queries";
import NextImage from "next/image";
import { getPlaiceholder } from "plaiceholder";
import { RichText } from "prismic-reactjs";

export async function getStaticProps({ params }) {
	const blogPost = await queryBlogPostBySlug(params.slug);
	console.dir(blogPost);
	const { base64, img } = await getPlaiceholder(blogPost?.cover);

	delete img["width"];
	delete img["height"];

	return {
		props: {
			blogPost: {
				...blogPost,
				cover: {
					...img,
					blurDataURL: base64,
				},
			},
		},
	};
}

export async function getStaticPaths() {
	const blogPosts = await queryAllBlogPosts();
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

const BlogPage = ({ blogPost }) => {
	return (
		<>
			<Header />
			<Box height="400px" position="relative">
				<NextImage
					{...blogPost?.cover}
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
							<Box>
								<RichText render={blogPost.content} />
							</Box>
							<Box bg="blue.400"></Box>
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
