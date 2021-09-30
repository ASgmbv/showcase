import {
	Box,
	Circle,
	Container,
	Divider,
	Flex,
	Grid,
	Heading,
	Icon,
	Link,
	Stack,
	Text,
} from "@chakra-ui/react";
import NextImage from "next/image";
import { MdLocationOn, MdMailOutline, MdPhone } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useRouter } from "next/router";
import { sitemap, info } from "lib/config";
import NextLink from "next/link";

const Footer = () => {
	const router = useRouter();

	return (
		<Box as="footer">
			<Divider />
			<Container maxW="container.xl">
				<Grid
					templateColumns={[
						"1fr",
						null,
						"repeat(2, 1fr)",
						"repeat(4, 1fr)",
					]}
					gap="50px"
					pt="80px"
					pb="50px"
				>
					<Stack spacing="4">
						<Box>
							<NextImage src="/logo.png" width="140px" height="40px" />
						</Box>
						<Text color="#094E8F">
							Italian Outdoor Living Group We build luxury
						</Text>
					</Stack>
					<Stack spacing="5">
						<Heading as="h3" size="md" color="#094E8F">
							Get In Touch
						</Heading>
						<Stack direction="row" spacing="4">
							<Icon as={MdPhone} boxSize="5" color="#094E8F" />
							<Text fontSize="sm" color="brandBlue">
								{info.phone}
							</Text>
						</Stack>
						<Stack direction="row" spacing="4">
							<Icon as={MdMailOutline} boxSize="5" color="#094E8F" />
							<Text fontSize="sm" color="brandBlue">
								{info.email}
							</Text>
						</Stack>

						<Stack direction="row" spacing="4">
							<Icon as={MdLocationOn} boxSize="5" color="#094E8F" />
							<Text fontSize="sm" color="brandBlue">
								GLENWOOD LANDING 11543 NEW YORK - United States
							</Text>
						</Stack>
					</Stack>

					<Box>
						<Heading
							as="h3"
							size="md"
							color="#094E8F"
							mb="4"
							textAlign={["start", null, "center"]}
						>
							Sitemap
						</Heading>
						<Stack spacing="2" textAlign={["start", null, "center"]}>
							{sitemap.map(({ title, link }) => {
								return (
									<NextLink key={link} href={link} passHref>
										<Link
											color={
												router.asPath === link
													? "brandGreen"
													: "brandBlue"
											}
										>
											{title}
										</Link>
									</NextLink>
								);
							})}
						</Stack>
					</Box>

					<Stack spacing="4">
						<Stack direction="row" spacing="4">
							<Link
								href="https://www.instagram.com/italiaoutdoorlivingroup"
								isExternal
							>
								<Circle
									bg={"brandBlue"}
									boxSize="8"
									_hover={{
										bg: "#A032C2",
									}}
									transition="background-color 0.3s"
								>
									<Icon as={FaInstagram} color="white" />
								</Circle>
							</Link>
							<Link>
								<Circle
									bg="brandBlue"
									boxSize="8"
									_hover={{
										bg: "facebook.500",
									}}
									transition="background-color 0.3s"
								>
									<Icon as={FaFacebookF} color="white" />
								</Circle>
							</Link>
							<Link
								href="https://www.youtube.com/user/italiaoutdoorlivin"
								isExternal
							>
								<Circle
									bg="brandBlue"
									boxSize="8"
									_hover={{
										bg: "red.500",
									}}
									transition="background-color 0.3s"
								>
									<Icon as={FaYoutube} color="white" />
								</Circle>
							</Link>
							<Link>
								<Circle
									bg="brandBlue"
									boxSize="8"
									_hover={{
										bg: "twitter.500",
									}}
									transition="background-color 0.3s"
								>
									<Icon as={FaTwitter} color="white" />
								</Circle>
							</Link>
						</Stack>
						<Text color="brandBlue">
							Follow our social media to see the latest news and posts
							from our company
						</Text>
					</Stack>
				</Grid>
				<Divider colorScheme="blue" />
				<Divider colorScheme="blue" />
				<Flex py="4" color="brandBlue" justifyContent="space-between">
					<Text as="span" fontSize="sm">
						© Italia Outdoor Living Group 2021
					</Text>
					<Text as="span" fontSize="sm">
						Made by Nomad Soft LLC
					</Text>
				</Flex>
			</Container>
		</Box>
	);
};

export default Footer;
