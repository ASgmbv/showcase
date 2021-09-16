// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = "https://italiaoutdoorliving.prismic.io/api/v2";

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
	if (doc.type === "post") {
		return `/blog/${doc.uid}`;
	}
	return "/";
};

// Additional helper function for Next/Link components
export const hrefResolver = (doc) => {
	if (doc.type === "post") {
		return "/blog/[uid]";
	}
	return "/";
};
