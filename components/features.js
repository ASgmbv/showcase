import { Button, Flex, Grid, Link } from "@chakra-ui/react";
import Card from "./card";
import NextLink from "next/link";
import Title from "./title";

const Features = ({ services }) => {
	return (
		<>
			<Title>Our Services</Title>
			<Grid
				templateColumns={[
					"1fr",
					null,
					"repeat(2, 1fr)",
					null,
					null,
					"repeat(4, 1fr)",
				]}
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
			<NextLink href="/services" passHref>
				<Flex as="a" width="full" justifyContent="center" mt="10">
					<Button colorScheme="green" variant="outline">
						All Services
					</Button>
				</Flex>
			</NextLink>
		</>
	);
};

export default Features;
