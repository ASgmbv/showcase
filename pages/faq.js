import {
	Accordion,
	AccordionButton,
	AccordionItem,
	AccordionPanel,
	Box,
	Container,
	Flex,
	Grid,
	Heading,
	Icon,
	Stack,
	Text,
} from "@chakra-ui/react";
import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import Title from "@/components/title";
import { MdMail, MdPhone } from "react-icons/md";

const faqs = [
	{
		question: "How do I pay for the Essentials or Premium plan?",
		answer:
			"You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.",
	},
	{
		question:
			"Can I cancel my Essentials or Premium plan subscription at any time?",
		answer:
			"You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.",
	},
	{
		question:
			"We need to add new users to our team. How will that be billed?",
		answer:
			"You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.",
	},
	{
		question:
			"My team wants to cancel its subscription. How do we do that? Can we get a refund?",
		answer:
			"You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.",
	},
];

const Faqs = () => {
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

const FaqsPage = () => {
	return (
		<>
			<Header />
			<Banner title="FAQs" />
			<Container maxW="container.xl">
				<Faqs />
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
					{[
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
					].map(({ icon, title, subtitle }, idx) => (
						<Stack
							key={idx}
							border="1px solid #E5EAF4"
							alignItems="center"
							justifyContent="center"
							padding="10"
							spacing="3"
							borderRadius="10px"
							boxShadow="0px 7.84516px 13.0753px rgba(0, 0, 0, 0.03)"
						>
							<Icon as={icon} boxSize="6" color="#1565D8" />
							<Heading size="sm">{title}</Heading>
							<Text>{subtitle}</Text>
						</Stack>
					))}
				</Grid>
			</Container>
			<Footer />
		</>
	);
};

export default FaqsPage;
