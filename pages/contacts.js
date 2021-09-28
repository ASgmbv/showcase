import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { getPageTitle } from "lib/config";
import { NextSeo } from "next-seo";
import banner from "../public/banner/5.jpg";

const ContactsPage = () => {
	return (
		<>
			<NextSeo title={getPageTitle("Contacts")} />

			<Header />
			<Banner
				title="CONTACTS"
				image={{
					src: banner,
				}}
			/>
			<Footer />
		</>
	);
};

export default ContactsPage;
