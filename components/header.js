import {
	Box,
	Button,
	Container,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	Heading,
	HStack,
	Link,
	Stack,
	useDisclosure,
} from "@chakra-ui/react";
import { sitemap } from "lib/config";
import { useRouter } from "next/router";
import NextImage from "next/image";
import NextLink from "next/link";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRef } from "react";

const Header = () => {
	const router = useRouter();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef();

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
				<Flex justifyContent="space-between" alignItems="center">
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
						{sitemap
							.filter((el) => el.title !== "Contacts")
							.map(({ title, link }) => {
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

					<HStack spacing="8" display={["none", null, "flex"]}>
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

					{/* for mobile */}
					<HamburgerIcon
						as="button"
						display={["block", null, "none"]}
						ref={btnRef}
						onClick={onOpen}
						boxSize="5"
					/>

					<Drawer
						isOpen={isOpen}
						placement="left"
						onClose={onClose}
						finalFocusRef={btnRef}
					>
						<DrawerOverlay />
						<DrawerContent>
							<DrawerCloseButton />
							<DrawerHeader>
								<Heading size="sm">Italia Outdoor Living</Heading>
							</DrawerHeader>

							<DrawerBody>
								<Stack spacing="8" my="50px">
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
								</Stack>
								<Button
									colorScheme="green"
									variant="outline"
									width="100%"
								>
									Get Estimate
								</Button>
							</DrawerBody>
						</DrawerContent>
					</Drawer>
				</Flex>
			</Container>
		</Box>
	);
};

export default Header;
