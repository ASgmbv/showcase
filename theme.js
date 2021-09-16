import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
	styles: {
		global: {
			html: {
				scrollBehavior: "smooth",
			},
		},
	},
	fonts: {
		body: "Poppins, sans-serif",
		heading: "Poppins, sans-serif",
	},
	components: {
		Link: {
			baseStyle: {
				_hover: {
					textDecoration: "none",
				},
				_focus: {
					boxShadow: "none",
				},
			},
		},
	},
});

export default customTheme;
