import Banner from "@/components/banner";
import ContactsCard from "@/components/contacts-card";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Container, Grid } from "@chakra-ui/react";
import { getPageTitle } from "lib/config";
import { NextSeo } from "next-seo";
import banner from "../public/banner/5.jpg";
import { MdMail, MdPhone, MdLocationCity } from "react-icons/md";
import Form from "@/components/form";

const cards = [
	{
		icon: MdPhone,
		title: "+1 631-518-3331",
		subtitle: "We are always happy to help.",
	},
	{
		icon: MdMail,
		title: "contact@italiaoutdoor.com",
		subtitle: "Alternative way to get anwser faster.",
	},
	{
		icon: MdLocationCity,
		title: "133 GLENWOOD ROAD",
		subtitle: "GLENWOOD LANDING 11543, New York",
	},
];

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
			<Container maxW="container.xl" mb="80px">
				<Grid
					templateColumns={["repeat(1, 1fr)", null, "repeat(3, 1fr)"]}
					py="80px"
					gap="6"
				>
					{cards.map((card, idx) => (
						<ContactsCard key={idx} {...card} />
					))}
				</Grid>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6426.634716995149!2d-73.64645483233754!3d40.82829860482112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c285fc696789f3%3A0x99d5327787464f6b!2s133%20Glenwood%20Rd%2C%20Glenwood%20Landing%2C%20NY%2011547%2C%20USA!5e0!3m2!1sen!2skg!4v1632828517438!5m2!1sen!2skg"
					width="100%"
					height="400"
					style={{
						border: 0,
					}}
					loading="lazy"
				></iframe>
			</Container>

			<Form />
			<Footer />
		</>
	);
};

export default ContactsPage;
