import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { getPageTitle } from "lib/config";
import { NextSeo } from "next-seo";

const ContactsPage = () => {
	return (
		<>
			<NextSeo title={getPageTitle("Contacts")} />

			<Header />
			<Banner title="CONTACTS" />
			<Footer />
		</>
	);
};

export default ContactsPage;
