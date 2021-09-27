import { useKeenSlider } from "keen-slider/react";
import { Box, Flex, Stack } from "@chakra-ui/react";
import NextImage from "next/image";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Gallery = ({ images = [], ...props }) => {
	const [currIdx, setCurrIdx] = useState(0);
	const [sliderRef, slider] = useKeenSlider({
		spacing: 50,
		slideChanged(s) {
			setCurrIdx(s.details().relativeSlide);
		},
	});

	return (
		<Box position="relative" boxSize="100%">
			<Box
				ref={sliderRef}
				className="keen-slider"
				boxSize="100%"
				bg="gray.200"
				{...props}
			>
				{images.map((image) => (
					<Box key={image} className="keen-slider__slide" boxSize="100%">
						<NextImage src={image} layout="fill" objectFit="cover" />
					</Box>
				))}
			</Box>

			<Box
				background="rgba(77, 124, 142, 0.3)"
				position="absolute"
				top="0"
				left="0"
				boxSize="100%"
			></Box>

			<MotionBox
				key={`vertical-box-${currIdx}`}
				borderLeft="1px solid"
				borderRight="1px solid"
				borderColor="gray.200"
				position="absolute"
				top={[4, null, 6]}
				left={[4, null, 6]}
				right={[4, null, 6]}
				bottom={[4, null, 6]}
				initial={{
					opacity: 0,
					scaleY: 0.1,
				}}
				animate={{
					opacity: 1,
					scaleY: 1,
				}}
				transition={{
					duration: 0.5,
				}}
			></MotionBox>

			<MotionBox
				key={`horizontal-box-${currIdx}`}
				borderBottom="1px solid"
				borderTop="1px solid"
				borderColor="gray.200"
				position="absolute"
				top={[4, null, 6]}
				left={[4, null, 6]}
				right={[4, null, 6]}
				bottom={[4, null, 6]}
				initial={{
					scaleX: 0.1,
					opacity: 0,
				}}
				animate={{
					opacity: 1,
					scaleX: 1,
				}}
				transition={{
					duration: 0.5,
				}}
			></MotionBox>

			<Flex
				position="absolute"
				bottom="10"
				left="0"
				width="100%"
				justifyContent="center"
			>
				<Stack direction="row" spacing="3">
					{[...Array(images.length)].map((_, idx) => (
						<Box
							as="button"
							key={idx}
							borderRadius="full"
							boxSize="3"
							bg={currIdx === idx ? "white" : "gray.400"}
							border="1px solid"
							borderColor="gray.300"
							onClick={() => {
								slider.moveToSlideRelative(idx);
							}}
						></Box>
					))}
				</Stack>
			</Flex>
		</Box>
	);
};

export default Gallery;
