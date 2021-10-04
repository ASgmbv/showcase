import { Button, Flex, Grid, Link } from "@chakra-ui/react";
import { getGridArea } from "lib/utils";
import Poster from "./poster";
import NextLink from "next/link";
import Title from "./title";

const Works = ({ projects }) => {
	return (
		<>
			<Title>Our Projects</Title>
			<Grid gap="1">
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
			<NextLink href="/projects" passHref>
				<Flex as="a" width="full" justifyContent="center" mt="10">
					<Button colorScheme="green" variant="outline">
						All Projects
					</Button>
				</Flex>
			</NextLink>
		</>
	);
};

export default Works;
