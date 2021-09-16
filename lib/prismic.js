import Prismic from "@prismicio/client";
import Link from "next/link";
import { apiEndpoint, linkResolver, hrefResolver } from "prismic-configuration";

// Helper function to convert Prismic Rich Text links to Next/Link components
export const customLink = (type, element, content, children, index) => (
	<Link
		key={index}
		href={hrefResolver(element.data)}
		as={linkResolver(element.data)}
	>
		<a>{content}</a>
	</Link>
);

// Client method to query documents from the Prismic repo
export const Client = (req = null) =>
	Prismic.client(
		apiEndpoint,
		createClientOptions(req, process.env.PRISMIC_TOKEN)
	);

const createClientOptions = (req = null, prismicAccessToken = null) => {
	const reqOption = req ? { req } : {};
	const accessTokenOption = prismicAccessToken
		? { accessToken: prismicAccessToken }
		: {};
	return {
		...reqOption,
		...accessTokenOption,
	};
};

export default Client;
