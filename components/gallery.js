import { useKeenSlider } from "keen-slider/react";
import { Box } from "@chakra-ui/react";
import NextImage from "next/image";
import "keen-slider/keen-slider.min.css";

const Gallery = ({ images = [], ...props }) => {
	const [sliderRef] = useKeenSlider({
		spacing: 50,
	});

	return (
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
	);
};

export default Gallery;
