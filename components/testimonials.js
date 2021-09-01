import {
	Box,
	Flex,
	Icon,
	IconButton,
	Stack,
	Text,
	useBreakpointValue,
	Container,
	Heading,
	Divider,
} from "@chakra-ui/react";
import { useKeenSlider } from "keen-slider/react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import NextImage from "next/image";

const items = [
	{
		image: "/test1.png",
		name: "Shalima Hayden",
		desc:
			"Italy Outdoor Living Group is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities",
	},
	{
		image: "/test2.png",
		name: "John Black",
		desc:
			"Italy Outdoor Living Group is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities",
	},
	{
		image: "/test3.png",
		name: "Jessica  Adren",
		desc:
			"Italy Outdoor Living Group is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities",
	},
	{
		image: "/test2.png",
		name: "John Black",
		desc:
			"Italy Outdoor Living Group is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities",
	},
	{
		image: "/test3.png",
		name: "Jessica  Adren",
		desc:
			"Italy Outdoor Living Group is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities",
	},
];

export const Testimonials = () => {
	const slidesPerPage = useBreakpointValue({
		base: 1,
		md: 1,
		lg: 2,
		xl: 3,
	});

	const [sliderRef, slider] = useKeenSlider({
		slidesPerView: slidesPerPage,
		spacing: 30,
	});

	return (
		<Box width="100%" my="100px">
			<Container maxW="container.lg">
				<Heading textAlign="center" mb="20">
					What Our Customer says
				</Heading>

				<Flex alignItems="center" position="relative">
					<IconButton
						position="absolute"
						top="calc(50% - 25px)"
						left={["20px", null, null, null, "-70px"]}
						boxSize="50px"
						zIndex="1"
						borderRadius="full"
						_hover={{
							transform: "scale(1.2)",
						}}
						_active={{
							boxShadow: "none",
						}}
						_focus={{
							boxShadow: "none",
						}}
						bg={["gray.300", null, null, null, "transparent"]}
						icon={
							<Icon
								as={BsArrowLeft}
								boxSize={["30px", null, null, null, "50px"]}
							/>
						}
						onClick={() => {
							slider.prev(1);
						}}
					/>
					<Flex
						flex="1"
						ref={sliderRef}
						className="keen-slider"
						overflow="hidden"
					>
						{items.map(({ image, name, desc }, idx) => (
							<Stack
								key={idx}
								position="relative"
								className="keen-slider__slide"
								spacing="4"
							>
								<Box
									position="relative"
									height={["300px", null, null, "270px"]}
								>
									<NextImage
										src={image}
										layout="fill"
										objectFit="cover"
									/>
								</Box>
								<Heading size="sm" color="gray.600">
									{name}
								</Heading>
								<Divider />
								<Text fontSize="sm" color="gray.500">
									{desc}
								</Text>
							</Stack>
						))}
					</Flex>
					<IconButton
						position="absolute"
						borderRadius="full"
						boxSize="50px"
						top="calc(50% - 25px)"
						right={["20px", null, null, null, "-70px"]}
						zIndex="1"
						_hover={{
							transform: "scale(1.2)",
						}}
						_active={{
							boxShadow: "none",
						}}
						_focus={{
							boxShadow: "none",
						}}
						bg={["gray.300", null, null, null, "transparent"]}
						icon={
							<Icon
								as={BsArrowRight}
								boxSize={["30px", null, null, null, "50px"]}
							/>
						}
						onClick={() => {
							slider.next(1);
						}}
					/>
				</Flex>
			</Container>
		</Box>
	);
};
