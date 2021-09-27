import { Box, Button, Container, Flex, HStack, Link } from "@chakra-ui/react";
import { sitemap } from "lib/config";
import { useRouter } from "next/router";
import NextImage from "next/image";
import NextLink from "next/link";

const Header = () => {
	const router = useRouter();

	console.log({ router });

	// asPath

	return (
		<Box
			position="sticky"
			top="0"
			bg="white"
			zIndex="99"
			boxShadow="0 5px 12px rgb(77 124 142 / 25%)"
			py="2"
		>
			<Container maxW="container.xl">
				<Flex justifyContent="space-between">
					<NextLink href="/">
						<a>
							<Box
								width={["100px", null, "140px"]}
								height={["50px", null, "60px"]}
								position="relative"
							>
								<NextImage
									src="/logo.png"
									layout="fill"
									objectFit="contain"
								/>
							</Box>
						</a>
					</NextLink>

					<HStack
						align="center"
						spacing="8"
						display={["none", null, "flex"]}
					>
						{sitemap.map(({ title, link }) => {
							return (
								<NextLink key={link} href={link} passHref>
									<Link
										_hover={{
											color: "green.600",
										}}
										color={
											router.asPath === link
												? "green.600"
												: "gray.800"
										}
									>
										{title}
									</Link>
								</NextLink>
							);
						})}
					</HStack>

					<HStack spacing="8">
						<NextLink href="/contacts" passHref>
							<Link
								_hover={{
									color: "green.600",
								}}
								color={
									router.asPath === "/contacts"
										? "green.600"
										: "gray.800"
								}
							>
								Contacts
							</Link>
						</NextLink>
						<Button colorScheme="green" variant="outline">
							Get Estimate
						</Button>
					</HStack>
				</Flex>
			</Container>
		</Box>
	);
};

export default Header;
