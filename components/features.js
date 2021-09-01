import {
	Box,
	Grid,
	Heading,
	ListItem,
	Text,
	UnorderedList,
} from "@chakra-ui/react";
import NextImage from "next/image";

const items = [
	{
		title: "PLANNING",
		description:
			"A holistic narrative and immersive story of place generate an emotional connection between visitors and fully developed thematic concepts to ensure the economic viability of a project by driving visitors’ attendance and return engagements.",
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
		image: "/bg1.jpeg",
	},
	{
		title: "LANDSCAPE ARCHITECTURE",
		description:
			"Exceptional design balances the past, present, and future. Our designs capture the spirit, culture, and existing environment of each locale, providing a foundation for memorable experiences.",
		categories: [
			"Site Design",
			"Concept /Theming",
			"Design Development",
			"Hardscape/Water Feature Design",
			"Planting Design",
			"Construction Documents",
			"Construction Period Services",
		],
		image: "/bg2.jpeg",
	},
	{
		title: "THEMED ENTERTAINMENT DESIGN",
		image: "/bg3.jpeg",
		description:
			"A holistic narrative and immersive story of place generate an emotional connection between visitors and fully developed thematic concepts to ensure the economic viability of a project by driving visitors’ attendance and return engagements.",
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
		title: "URBAN DESIGN",
		image: "/bg4.jpeg",
		description:
			"Through careful planning and analysis, our urban projects provide optimal benefits to the surrounding community while addressing the complexities and intricate relationships that tie our cities together.",
		categories: [
			"Downtown Planning",
			"Mixed-Use Neighborhoods",
			"Open Space Design",
			"Public Participation / Consensus Building",
			"Retail Environments",
			"Streetscapes",
			"Transit Oriented Design",
			"Urban Parks and Plazas",
			"Vision Plans",
			"Waterfront Revitalization",
		],
	},
];

const Features = () => {
	return (
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
						bg="rgba(77, 124, 142, 0.4)"
						_hover={{
							backgroundColor: "rgba(77, 124, 142, 0.8)",
							transition: "all 0.4s",
							div: {
								transform: "scale(1)",
								transition: "all 0.4s",
								opacity: 1,
							},
							h3: {
								transform: "translateY(10px)",
								transition: "all 0.3s",
							},
							p: {
								transition: "all 0.5s",
								transform: "translateY(-10px)",
								opacity: 1,
							},
							ul: {
								transition: "all 0.5s",
								transform: "translateY(-10px)",
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
							opacity="0"
							transform="translateY(10px)"
							fontSize={["sm"]}
						>
							{description}
						</Text>

						<UnorderedList
							opacity="0"
							transform="translateY(10px)"
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
							transform="scaleX(0.1)"
							opacity="0"
						></Box>

						<Box
							position="absolute"
							top={[6, null, 10]}
							left={[6, null, 10]}
							right={[6, null, 10]}
							bottom={[6, null, 10]}
							borderLeft="1px solid #fff"
							borderRight="1px solid #fff"
							transform="scaleY(0.1)"
							opacity="0"
						></Box>
					</Box>
				</Box>
			))}
		</Grid>
	);
};

export default Features;
