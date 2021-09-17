import {
	Box,
	Container,
	Flex,
	Grid,
	Heading,
	Stack,
	Text,
	Link,
	StackDivider,
} from "@chakra-ui/react";
import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { CalendarIcon } from "@chakra-ui/icons";
import { format } from "date-fns";
import { queryBlogPosts } from "lib/queries";
import NextImage from "next/image";
import NextLink from "next/link";
import { getPlaiceholder } from "plaiceholder";

export const getStaticProps = async () => {
	let blogPosts = await queryBlogPosts();

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
		revalidate: 1,
	};
};

const Posts = ({ posts }) => {
	return (
		<Container maxW="container.xl" my={["60px", null, "80px"]}>
			<Stack divider={<StackDivider />} spacing={[6, null, 10]}>
				{posts.map(({ id, slug, cover, category, title, createdAt }) => (
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
	return (
		<>
			<Header />
			<Banner title="BLOGS" />
			<Posts posts={blogPosts} />
			<Footer />
		</>
	);
};

export default BlogsPage;
