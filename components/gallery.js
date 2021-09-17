import { useKeenSlider } from "keen-slider/react";
import { Box } from "@chakra-ui/react";
import NextImage from "next/image";

const Gallery = ({ images = [], ...props }) => {
	const [sliderRef] = useKeenSlider({
		spacing: 50,
	});

	return (
		<Box
			ref={sliderRef}
			className="keen-slider"
			bg="gray.200"
			boxSize="100%"
			{...props}
		>
			{images.map((image) => (
				<Box key={image} className="keen-slider__slide">
					<NextImage src={image} layout="fill" objectFit="cover" />
				</Box>
			))}
		</Box>
	);
};

export default Gallery;
