const { withPlaiceholder } = require("@plaiceholder/next");

module.exports = withPlaiceholder({
	reactStrictMode: true,
	images: {
		domains: ["images.prismic.io"],
	},
});
