import { Heading, Icon, Stack, Text } from "@chakra-ui/react";

const ContactsCard = ({ icon, title, subtitle }) => {
	return (
		<Stack
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
	);
};

export default ContactsCard;
