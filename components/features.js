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

const Features = ({ features }) => {
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
				{features.map(({ title, image, description, categories }) => (
					<Box key={title} height="500px" position="relative">
						<NextImage
							{...image}
							placeholder="blur"
							layout="fill"
							objectFit="cover"
						/>
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
									transition: "all ease-in-out 0.3s",
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
								transition="all ease-in-out 0.3s"
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
								transform={["scaleY(1)", null, null, "scaleY(0.1)"]}
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
