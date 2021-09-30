import {
	Accordion,
	AccordionButton,
	AccordionItem,
	AccordionPanel,
	Box,
	Container,
	Grid,
	Link,
	Text,
} from "@chakra-ui/react";
import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import Title from "@/components/title";
import { MdMail, MdPhone } from "react-icons/md";
import { NextSeo } from "next-seo";
import { getPageTitle, info } from "lib/config";
import banner from "../public/banner/3.jpg";
import ContactsCard from "@/components/contacts-card";
import { queryFAQs } from "lib/queries";

export const getStaticProps = async () => {
	const faqs = await queryFAQs();

	return {
		props: {
			faqs,
		},
		revalidate: 1,
	};
};

const Faqs = ({ faqs }) => {
	return (
		<Accordion allowToggle={true} allowMultiple={true} pt="80px">
			{faqs.map(({ question, answer }, idx) => (
				<AccordionItem
					key={idx}
					borderTop="none"
					boxShadow="0px 6px 10px rgba(0, 0, 0, 0.03)"
					border="1px solid #E5EAF4"
					borderRadius="8px"
					mb="4"
				>
					{({ isExpanded }) => (
						<>
							<h2>
								<AccordionButton
									p="6"
									borderRadius="8px"
									_focus={{
										boxShadow: "none",
									}}
								>
									<Box
										flex="1"
										textAlign="left"
										color={isExpanded && "#1565D8"}
									>
										{question}
									</Box>
									{isExpanded ? (
										<MinusIcon fontSize="12px" />
									) : (
										<AddIcon fontSize="12px" />
									)}
								</AccordionButton>
							</h2>
							<AccordionPanel color="#5A7184">{answer}</AccordionPanel>
						</>
					)}
				</AccordionItem>
			))}
		</Accordion>
	);
};

const FaqsPage = ({ faqs }) => {
	return (
		<>
			<NextSeo
				title={getPageTitle("FAQs")}
				description="Frequently asked questions about gunite pool, vinyl pools and landscape design"
			/>

			<Header />
			<Banner
				title="FAQs"
				image={{
					src: banner,
				}}
			/>
			<Container maxW="container.xl">
				<Faqs faqs={faqs} />
				<Title color="green.400" pb="4">
					Still have a questions?
				</Title>
				<Container>
					<Text maxW="container.md" textAlign="center">
						If you cannot find answer to your question in our FAQ, you can
						always contact us. We wil answer to you shortly!
					</Text>
				</Container>
				<Grid
					templateColumns={["repeat(1, 1fr)", null, "repeat(2, 1fr)"]}
					gap="10"
					mt="50px"
					mb={["80px", null, "100px"]}
				>
					<Link href={`tel:${info.phone}`}>
						<ContactsCard
							{...{
								icon: MdPhone,
								title: info.phone,
								subtitle: "We are always happy to help.",
							}}
						/>
					</Link>

					<Link href={`mailto:${info.email}`}>
						<ContactsCard
							{...{
								icon: MdMail,
								title: info.email,
								subtitle: "Alternative way to get anwser faster.",
							}}
						/>
					</Link>
				</Grid>
			</Container>
			<Footer />
		</>
	);
};

export default FaqsPage;
