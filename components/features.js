import {
	Box,
	Container,
	Grid,
	Heading,
	ListItem,
	Text,
	UnorderedList,
} from "@chakra-ui/react";
import NextImage from "next/image";

const items = [
	{
		title: "Outdoor living space",
		description:
			"There are few better accompaniments to a pool than a water feature. Elegant and relaxing, the sound of the water compements the beautiful aesthetics of the feature itself, Pool fountains and waterfalls are very popular additions to pools.",
		categories: [
			"Opportunity Assessment Strategy",
			"Blue Sky Visioning | Story Development",
			"Operational Planning",
			"Area Development",
			"Art Direction",
			"IP Analysis Integration",
			"Character Creation",
			"Ride Show Development",
		],
		image: "/bg1.jpg",
	},
	{
		title: "Waterfalls, Outdoor kitchens & Fire features",
		description:
			"There are few better accompaniments to a pool than a water feature. Elegant and relaxing, the sound of the water compements the beautiful aesthetics of the feature itself, Pool fountains and waterfalls are very popular additions to pools.",
		categories: [
			"Site Design",
			"Concept /Theming",
			"Design Development",
			"Hardscape/Water Feature Design",
			"Planting Design",
			"Construction Documents",
			"Construction Period Services",
		],
		image: "/bg2.jpg",
	},
	{
		title: "Freeform Pools",
		image: "/bg3.jpg",
		description:
			"For pool like no other, freeform is the day to go. While a lot of pools are often square or rectangle, freeform pools offer something different, something that can be unique to your property and design choice.",
		categories: [
			"Opportunity Assessment Strategy",
			"Blue Sky Visioning | Story Development",
			"Operational Planning",
			"Area Development",
			"Art Direction",
			"IP Analysis Integration",
			"Character Creation",
			"Ride Show Development",
		],
	},
	{
		title: "New Build Swimming pools",
		image: "/bg4.jpg",
		description:
			"Having your own pool is a luxurious situation that few other property features can cathc. We are experts in building luxury concrete pools across Long Island The luxury pools that we design and build at Italia Outdoor Living are, simply put, astonishing. To build your dream pool, contact our team.",
		categories: [
			"Downtown Planning",
			"Mixed-Use Neighborhoods",
			"Open Space Design",
			"Public Participation / Consensus Building",
			"Retail Environments",
			"Streetscapes",
		],
	},
];

const Features = () => {
	return (
		<>
			<Box id="services">
				<Container py="80px">
					<Heading
						textAlign="center"
						color="#094E8F"
						textTransform="uppercase"
					>
						Our Services
					</Heading>
				</Container>
			</Box>
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
				{items.map(({ title, image, description, categories }) => (
					<Box key={title} height="500px" position="relative">
						<NextImage layout="fill" src={image} objectFit="cover" />
						<Box
							position="absolute"
							top="0"
							left="0"
							width="100%"
							height="100%"
							color="white"
							padding={[10, null, 14]}
							bg={[
								"rgba(77, 124, 142, 0.8)",
								null,
								null,
								"rgba(77, 124, 142, 0.4)",
							]}
							_hover={{
								backgroundColor: "rgba(77, 124, 142, 0.8)",
								transition: "all 0.4s",
								div: {
									transform: "scale(1)",
									transition: "all 0.4s",
									opacity: 1,
								},
								h3: {
									transform: [
										"translateY(0)",
										null,
										null,
										"translateY(10px)",
									],
									transition: "all 0.3s",
								},
								p: {
									transition: "all 0.5s",
									transform: [
										"translateY(0)",
										null,
										null,
										"translateY(-10px)",
									],
									opacity: 1,
								},
								ul: {
									transition: "all 0.5s",
									transform: [
										"translateY(0)",
										null,
										null,
										"translateY(-10px)",
									],
									opacity: 1,
								},
							}}
						>
							<Heading
								as="h3"
								fontWeight="normal"
								textAlign="center"
								fontSize={["lg", null, "xl"]}
								letterSpacing="wide"
								mb="10"
							>
								{title}
							</Heading>

							<Text
								mb="4"
								opacity={[1, null, null, 0]}
								transform={[
									"translateY(0)",
									null,
									null,
									"translateY(10px)",
								]}
								fontSize={["sm"]}
							>
								{description}
							</Text>

							<UnorderedList
								opacity={[1, null, null, 0]}
								transform={[
									"translateY(0)",
									null,
									null,
									"translateY(10px)",
								]}
								fontSize="sm"
							>
								{categories.map((el) => (
									<ListItem key={el}>{el}</ListItem>
								))}
							</UnorderedList>

							<Box
								position="absolute"
								top={[6, null, 10]}
								left={[6, null, 10]}
								right={[6, null, 10]}
								bottom={[6, null, 10]}
								borderTop="1px solid #fff"
								borderBottom="1px solid #fff"
								transform={["scaleX(1)", null, null, "scaleX(0.1)"]}
								opacity={[1, null, null, 0]}
							></Box>

							<Box
								position="absolute"
								top={[6, null, 10]}
								left={[6, null, 10]}
								right={[6, null, 10]}
								bottom={[6, null, 10]}
								borderLeft="1px solid #fff"
								borderRight="1px solid #fff"
								transform={["scaleY(1)", null, null, "scaleY0.1)"]}
								opacity={[1, null, null, 0]}
							></Box>
						</Box>
					</Box>
				))}
			</Grid>
		</>
	);
};

export default Features;
