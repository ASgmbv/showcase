import {
	Box,
	Button,
	Circle,
	Container,
	FormControl,
	FormLabel,
	Grid,
	Heading,
	Icon,
	Input,
	Stack,
	Text,
} from "@chakra-ui/react";
import NextImage from "next/image";
import { MdLocationOn, MdMailOutline, MdPhone } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
	return (
		<Box as="footer">
			<Container maxW="container.xl">
				<Grid
					templateColumns={[
						"1fr",
						null,
						"repeat(2, 1fr)",
						"repeat(4, 1fr)",
					]}
					gap="10"
					py="50px"
				>
					<Stack spacing="4">
						<Box>
							<NextImage src="/logo.png" width="140px" height="40px" />
						</Box>
						<Text color="#094E8F" fontSize="sm">
							Our Group is Landscape Design company located in
							Ohio,United States of America
						</Text>
					</Stack>
					<Stack spacing="4">
						<Heading as="h3" size="md" color="#094E8F">
							Get In Touch
						</Heading>
						<Stack direction="row">
							<Icon as={MdLocationOn} boxSize="5" color="#094E8F" />
							<Text fontSize="sm">
								GLENWOOD LANDING 11543 NEW YORK - United States
							</Text>
						</Stack>
						<Stack direction="row">
							<Icon as={MdMailOutline} boxSize="5" color="#094E8F" />
							<Text fontSize="sm">contact@italiaoutdoor.com</Text>
						</Stack>
						<Stack direction="row">
							<Icon as={MdPhone} boxSize="5" color="#094E8F" />
							<Text fontSize="sm">+1 631-518-3331</Text>
						</Stack>
					</Stack>
					<Stack spacing="4">
						<Stack direction="row" spacing="4">
							<Circle bg="#094E8F" boxSize="8">
								<Icon as={FaInstagram} color="white" />
							</Circle>
							<Circle bg="#094E8F" boxSize="8">
								<Icon as={FaFacebookF} color="white" />
							</Circle>
							<Circle bg="#094E8F" boxSize="8">
								<Icon as={FaYoutube} color="white" />
							</Circle>
							<Circle bg="#094E8F" boxSize="8">
								<Icon as={FaTwitter} color="white" />
							</Circle>
						</Stack>
						<Text>
							Lorem ipsum dolor sit amet, consec tetur adipiscing elit,
							sed do eiusmod.
						</Text>
					</Stack>
					<Stack>
						<Heading as="h3" size="md" color="#094E8F">
							Join a Newsletter
						</Heading>
						<FormControl>
							<FormLabel color="#77808B" fontWeight="thin">
								Your Email
							</FormLabel>
							<Input mb="3" borderRadius="0" colorScheme="blue" />
							<Button bg="#094E8F" color="white" borderRadius="0">
								Subscribe
							</Button>
						</FormControl>
					</Stack>
				</Grid>
			</Container>
			<Box py="4" borderTop="0.5px solid #094E8F" textAlign="center">
				Nomad Studio
			</Box>
		</Box>
	);
};

export default Footer;
