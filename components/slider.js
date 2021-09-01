import {
	Box,
	Container,
	Flex,
	Heading,
	HStack,
	Text,
	IconButton,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionBox = motion(Box);

const BannerSlider = () => {
	const slides = [
		{
			img: "/bg3.png",
			title: "Welcome to Italia Outdoor Living",
			subtitle:
				"For over 2 decades, Italia Outdoor Living has been Long Island's leading provider of concrete pool construction and custom outdoor landscaping for nearly 20 years, and with good reasons.",
		},
		{
			img: "/work2.png",
			title: "Trust your landscape to Professionals",
			subtitle:
				"We are experts in marble, travertine patios, walkaways, lighting, landscaping, pergolas, outdoor pavilions, and pool houses.",
		},

		{
			img: "/work3.png",
			title: "We Build Luxury",
			subtitle:
				"A beautiful backyard gives your property another dimension, another level of extravagance that serves as a perfect place to relax or entertain family, friends, and guests, if you want a pool for your property, there really is only one place to call, Italia Outdoor Living.",
		},
	];

	const [page, setPage] = useState(0);
	const { img, title, subtitle } = slides[page];
	const animation = useAnimation();

	useEffect(() => {
		animation.start({
			opacity: 1,
		});
	}, [page]);

	return (
		<Box
			width="100%"
			height="100vh"
			display="flex"
			position="relative"
			overflow="hidden"
			justifyContent="center"
			alignItems="center"
		>
			<AnimatePresence>
				<MotionBox
					key={title}
					bg={`url(${img})`}
					backgroundSize="cover"
					backgroundPosition="center"
					position="absolute"
					top="0"
					bottom="0"
					left="0"
					right="0"
					zIndex="-1"
					_after={{
						content: '""',
						position: "absolute",
						width: "100%",
						height: "100%",
						bg: "rgba(0, 0, 0, 0.6)",
					}}
					initial={{
						opacity: 0,
					}}
					animate={{
						scale: 1.1,
						opacity: 1,
					}}
					exit={{
						opacity: 0,
					}}
					transition={{
						scale: { duration: 10 },
						opacity: { duration: 2 },
					}}
				></MotionBox>
			</AnimatePresence>

			<Container maxW="container.lg" height="100%">
				<Flex
					flexDir="column"
					justifyContent="center"
					height="100%"
					position="relative"
					alignItems="center"
				>
					<Box overflow="hidden" mb="5" mt="2">
						<AnimatePresence exitBeforeEnter>
							<MotionHeading
								key={title + page}
								color="white"
								// size="2xl"
								fontSize={["3xl", null, "4xl"]}
								textAlign="center"
								maxW="600px"
								transition={{
									duration: 0.5,
									delay: 0,
								}}
								initial={{
									opacity: 0,
								}}
								animate={{
									opacity: 1,
								}}
								exit={{
									opacity: 0,
									transition: {
										duration: 0.5,
									},
								}}
							>
								{title}
							</MotionHeading>
						</AnimatePresence>
					</Box>
					<Box overflow="hidden" mb="5">
						<AnimatePresence exitBeforeEnter>
							<MotionText
								key={subtitle + page}
								color="white"
								fontSize={["lg", null, "2xl"]}
								textAlign="center"
								maxW="800px"
								transition={{
									duration: 0.5,
									delay: 0.2,
								}}
								initial={{
									opacity: 0,
								}}
								animate={{
									opacity: 1,
								}}
								exit={{
									opacity: 0,
									transition: {
										duration: 0.5,
									},
								}}
							>
								{subtitle}
							</MotionText>
						</AnimatePresence>
					</Box>

					<HStack color="white" justifySelf="end" spacing="3">
						<IconButton
							size="xs"
							borderRadius="0"
							variant="outline"
							color="saryy"
							onClick={() => {
								if (page > 0) {
									setPage((prev) => (prev - 1) % slides.length);
								}
							}}
							_hover={{
								color: "white",
								bg: "saryy",
							}}
							_active={{
								transform: "scale(1.1)",
							}}
							borderColor="saryy"
							icon={<ChevronLeftIcon />}
						/>
						<IconButton
							size="xs"
							borderRadius="0"
							variant="outline"
							color="saryy"
							onClick={() => {
								setPage((prev) => (prev + 1) % slides.length);
							}}
							_hover={{
								color: "white",
								bg: "saryy",
							}}
							_active={{
								transform: "scale(1.1)",
							}}
							borderColor="saryy"
							icon={<ChevronRightIcon />}
						/>
					</HStack>
				</Flex>
			</Container>
		</Box>
	);
};

export default BannerSlider;
