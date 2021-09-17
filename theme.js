import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
	styles: {
		global: {
			html: {
				scrollBehavior: "smooth",
			},
			".blog-content": {
				p: {
					fontSize: "17px",
					lineHeight: "tall",
					mb: "8",
				},
				h1: {
					mt: "6",
					mb: "8",
					lineHeight: 1,
					fontWeight: "bold",
					fontSize: "5xl",
				},
				h2: {
					mt: "6",
					mb: "8",
					lineHeight: 1.2,
					fontWeight: "bold",
					fontSize: "4xl",
				},
				h3: {
					mt: "6",
					mb: "8",
					lineHeight: 1.2,
					fontWeight: "bold",
					fontSize: "1.875rem",
				},
				h4: {
					mt: "6",
					mb: "8",
					lineHeight: 1.2,
					fontWeight: "bold",
					fontSize: "1.25rem",
				},
				ol: {
					mt: "1.5rem",
					ml: "1.25rem",
					"blockquote &": { mt: 0 },
					"& > * + *": {
						mt: "0.25rem",
					},
					fontSize: "lg",
				},
				a: {
					textDecoration: "underline",
					color: "blue.600",
				},
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
				// _hover: {
				// 	textDecoration: "none",
				// },
				_focus: {
					boxShadow: "none",
				},
			},
		},
		Button: {
			baseStyle: {
				_focus: {
					boxShadow: "none",
				},
			},
		},
	},
});

export default customTheme;
