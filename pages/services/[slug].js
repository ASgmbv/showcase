import { Box, Container, Grid, Heading, Text } from "@chakra-ui/react";
import Banner from "@/components/banner";
import Header from "@/components/header";
import { queryServiceBySlug, queryServices } from "lib/queries";
import Gallery from "@/components/gallery";
import Footer from "@/components/footer";
import { getPlaiceholder } from "plaiceholder";
import { NextSeo } from "next-seo";
import { getPageTitle } from "lib/config";

export async function getStaticProps({ params }) {
	const service = await queryServiceBySlug(params.slug);
	const { base64, img } = await getPlaiceholder(service.cover);

	delete img["width"];
	delete img["height"];

	return {
		props: {
			service,
			cover: {
				...img,
				blurDataURL: base64,
			},
		},
		revalidate: 1,
	};
}

export async function getStaticPaths() {
	const services = await queryServices();
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

const ServicePage = ({ service, cover }) => {
	if (!service) {
		return <div>loading</div>;
	}

	return (
		<>
			<NextSeo title={getPageTitle(service.title)} />

			<Header />
			<Banner title="SERVICES" image={cover} />
			<Container maxW="container.xl">
				<Grid
					templateColumns={["1fr", null, "1fr 2fr"]}
					gap={[6, null, "50px"]}
					my="50px"
					position="relative"
				>
					<Box>
						<Heading mb="4">{service.title}</Heading>
						<Text lineHeight="taller">{service.description}</Text>
					</Box>
					<Box height={["300px", null, "500px"]}>
						<Gallery images={service.gallery} position="relative" />
					</Box>
				</Grid>
			</Container>
			<Footer />
		</>
	);
};

export default ServicePage;
