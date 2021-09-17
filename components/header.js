import { Box, Container, Flex, HStack, Link } from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";

const items = [
	{
		title: "Home",
		link: "/",
	},
	{
		title: "Services",
		link: "/services",
	},
	{
		title: "Projects",
		link: "/projects",
	},
	{
		title: "Blog",
		link: "/blogs",
	},
	{
		title: "About Us",
		link: "/",
	},
];

const Header = () => {
	return (
		<Box
			position="sticky"
			top="0"
			bg="white"
			zIndex="99"
			boxShadow="0 5px 12px rgb(77 124 142 / 25%)"
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
						spacing="6"
						display={["none", null, "flex"]}
					>
						{items.map(({ title, link }) => {
							return (
								<Link
									key={link}
									href={link}
									fontWeight="bold"
									_hover={{
										color: "#8BC441",
									}}
								>
									{title}
								</Link>
							);
						})}
					</HStack>
				</Flex>
			</Container>
		</Box>
	);
};

export default Header;
