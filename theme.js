import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
	styles: {
		global: {
			html: {
				scrollBehavior: "smooth",
			},
		},
	},
	//  fonts: {
	//     body: "Inter, sans-serif",
	//     heading: "Poppins, sans-serif",
	//  },
});

export default customTheme;
