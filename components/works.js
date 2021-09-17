import { Box, Container, Grid, Heading, Link } from "@chakra-ui/react";
import { getGridArea } from "lib/utils";
import Poster from "./poster";
import NextLink from "next/link";

const Works = ({ projects }) => {
	return (
		<>
			<Box id="projects">
				<Container py="80px">
					<Heading
						textAlign="center"
						color="#094E8F"
						textTransform="uppercase"
					>
						Our Projects
					</Heading>
				</Container>
			</Box>
			<Grid templateColumns={["1fr", null, "repeat(3, 1fr)"]} gap="1">
				{projects.map(({ title, description, cover, slug }, idx) => (
					<NextLink key={idx} href={`/projects/${slug}`}>
						<Link>
							<Poster
								key={idx}
								title={title}
								description={description}
								image={cover}
								height="360px"
								gridColumn={[null, null, getGridArea(idx)]}
							/>
						</Link>
					</NextLink>
				))}
			</Grid>
		</>
	);
};

export default Works;
