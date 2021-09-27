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
	colors: {
		brandBlue: "#094E8F",
		brandGreen: "#41B574",
	},
	components: {
		Link: {
			baseStyle: {
				_focus: {
					boxShadow: "none",
				},
			},
		},
		Button: {
			baseStyle: {
				borderRadius: 0,
				fontWeight: "medium",
				_focus: {
					boxShadow: "none",
				},
			},
			sizes: {
				lg: {
					fontSize: "md",
				},
			},
		},
	},
});

export default customTheme;
