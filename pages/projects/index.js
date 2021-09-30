import Header from "@/components/header";
import Banner from "@/components/banner";
import { Box, Grid, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import Footer from "@/components/footer";
import { getGridArea } from "lib/utils";
import { queryProjects } from "lib/queries";
import Poster from "@/components/poster";
import Title from "@/components/title";
import { NextSeo } from "next-seo";
import { getPageTitle } from "lib/config";
import banner from "../../public/banner/4.jpg";

export const getStaticProps = async () => {
	const projects = await queryProjects();

	return {
		props: {
			projects,
		},
		revalidate: 1,
	};
};

const Projects = ({ projects }) => {
	return (
		<Grid templateColumns={["1fr", null, "repeat(3, 1fr)"]} gap="1">
			{projects.map(({ title, location, cover, slug }, idx) => (
				<NextLink key={idx} href={`/projects/${slug}`} passHref>
					<Link gridColumn={[null, null, getGridArea(idx)]}>
						<Poster
							key={idx}
							title={title}
							location={location}
							image={cover}
							height="360px"
						/>
					</Link>
				</NextLink>
			))}
		</Grid>
	);
};

const ProjectsPage = ({ projects }) => {
	return (
		<>
			<NextSeo
				title={getPageTitle("Projects")}
				description="Our portfolio includes houses all over the East Coast. Designed, supplied and built by us. Call now to get a free estimate."
			/>

			<Header />
			<Banner
				title="PROJECTS"
				image={{
					src: banner,
				}}
			/>
			<Title>OUR WORKS</Title>
			<Projects projects={projects} />
			<Box height="100px"></Box>
			<Footer />
		</>
	);
};

export default ProjectsPage;
