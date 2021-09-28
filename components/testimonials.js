import {
	Box,
	Flex,
	Icon,
	IconButton,
	Text,
	useBreakpointValue,
	Container,
	Heading,
} from "@chakra-ui/react";
import { useKeenSlider } from "keen-slider/react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { ImQuotesRight } from "react-icons/im";
import Title from "./title";

export const Testimonials = ({ testimonials }) => {
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
		<Box width="100%" id="testimonials" pb="80px">
			<Container maxW="container.lg">
				<Title>Testimonials</Title>

				<Flex alignItems="center" position="relative">
					<IconButton
						position="absolute"
						top="calc(50% - 25px)"
						left={["-25px", null, null, null, "-70px"]}
						boxSize={["50px"]}
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
						{testimonials.map(
							({ name, description, testimonial }, idx) => (
								<Flex
									key={idx}
									position="relative"
									className="keen-slider__slide"
									spacing="4"
									border="1px solid"
									borderColor="brandBlue"
									flexDir="column"
									padding="6"
									_hover={{
										boxShadow: "-0.65rem 0.65rem 0 0 #41B574",
										left: "10px",
									}}
								>
									<Flex justifyContent="space-between">
										<Box>
											<Heading size="md">{name}</Heading>
											<Text fontSize="sm">{description}</Text>
										</Box>
										<Icon
											as={ImQuotesRight}
											boxSize="6"
											color="brandGreen"
										/>
									</Flex>

									<Text color="gray.500" mt="6">
										{testimonial}
									</Text>
								</Flex>
							)
						)}
					</Flex>
					<IconButton
						position="absolute"
						borderRadius="full"
						boxSize="50px"
						top="calc(50% - 25px)"
						right={["-25px", null, null, null, "-70px"]}
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
