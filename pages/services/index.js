import { Box, Button, Container, Grid, Link } from "@chakra-ui/react";
import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Title from "@/components/title";
import Card from "@/components/card";
import { queryServices } from "lib/queries";
import NextLink from "next/link";
import { NextSeo } from "next-seo";
import { getPageTitle } from "lib/config";
import banner from "../../public/banners/8.jpg";

export const getStaticProps = async () => {
	const services = await queryServices();

	return {
		props: {
			services,
		},
		revalidate: 1,
	};
};

const SpecificService = ({ services }) => {
	return (
		<Container maxW="container.xl">
			<Grid
				templateColumns={["repeat(1, 1fr)", null, "repeat(2, 1fr)"]}
				gap="1"
			>
				{services.map(({ id, slug, cover, title, description }) => (
					<NextLink href={`/services/${slug}`} key={id} passHref>
						<Link>
							<Card
								title={title}
								description={description}
								image={cover}
								button={
									<Button variant="link" color="white">
										Read More
									</Button>
								}
							/>
						</Link>
					</NextLink>
				))}
			</Grid>
		</Container>
	);
};

const ServicesPage = ({ services }) => {
	return (
		<>
			<NextSeo title={getPageTitle("Services")} />

			<Header />
			<Banner
				title="SERVICES"
				image={{
					src: banner,
				}}
			/>
			<Title>WHAT WE DO</Title>
			<SpecificService services={services} />
			<Box height="100px"></Box>
			<Footer />
		</>
	);
};

export default ServicesPage;
