import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Form from "@/components/form";
import Header from "@/components/header";
import {
	Box,
	Button,
	Container,
	Flex,
	Grid,
	Heading,
	Stack,
	Text,
} from "@chakra-ui/react";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import NextImage from "next/image";
import { useState } from "react";
import Title from "@/components/title";
import { Testimonials } from "@/components/testimonials";
import NextLink from "next/link";
import { queryTeamMembers, queryTestimonials } from "lib/queries";
import { NextSeo } from "next-seo";
import { getPageTitle } from "lib/config";
import introductionImage from "../public/bg1.jpg";
import banner from "../public/banner/2.jpg";
import { useFadeIn } from "lib/hooks";
import { MotionBox, MotionHeading } from "@/components/motion";

export const getStaticProps = async () => {
	const testimonials = await queryTestimonials();
	const teamMembers = await queryTeamMembers();

	return {
		props: {
			testimonials,
			teamMembers,
		},
		revalidate: 1,
	};
};

const Introduction = () => {
	const [ref, animation, variants] = useFadeIn();

	return (
		<Grid
			templateColumns={["repeat(1, 1fr)", null, "repeat(2, 1fr)"]}
			gap="50px"
			my={["60px", null, "80px"]}
		>
			<Stack justifyContent="center" alignItems="flex-start" spacing="8">
				<MotionHeading
					ref={ref}
					initial="hidden"
					variants={variants}
					animate={animation}
					color="brandBlue"
					textAlign={["center", null, "start"]}
				>
					Welcome to Italia Outdoor Living
				</MotionHeading>
				<Text lineHeight="taller" color="gray.600">
					For over 2 decades, Italia Outdoor Living has been Long Island’s
					leading provider of concrete pool construction and custom outdoor
					landscaping for nearly 20 years, and with good reason.
				</Text>
				<NextLink href="/services" passHref>
					<a>
						<Button size="lg" colorScheme="green">
							Learn More
						</Button>
					</a>
				</NextLink>
			</Stack>
			<Box
				position="relative"
				height="500px"
				display={["none", null, "block"]}
			>
				<NextImage
					layout="fill"
					objectFit="cover"
					src={introductionImage}
					placeholder="blur"
				/>
				<Box
					background="rgba(77, 124, 142, 0.3)"
					position="absolute"
					top="0"
					left="0"
					boxSize="100%"
				></Box>

				<Box
					borderLeft="1px solid"
					borderRight="1px solid"
					borderColor="gray.200"
					position="absolute"
					top={[4, null, 6]}
					left={[4, null, 6]}
					right={[4, null, 6]}
					bottom={[4, null, 6]}
				></Box>

				<Box
					borderBottom="1px solid"
					borderTop="1px solid"
					borderColor="gray.200"
					position="absolute"
					top={[4, null, 6]}
					left={[4, null, 6]}
					right={[4, null, 6]}
					bottom={[4, null, 6]}
				></Box>
			</Box>
		</Grid>
	);
};

const fields = [
	{
		title: "marble",
		image: "/banner/1.jpg",
	},
	{
		title: "travertine patios",
		image: "/banner/2.jpg",
	},
	{
		title: "walkways",
		image: "/banner/3.jpg",
	},
	{
		title: "landscaping",
		image: "/banner/4.jpg",
	},
	{
		title: "pergolas",
		image: "/banner/5.jpg",
	},
	{
		title: "outdoor pavillions",
		image: "/banner/6.jpg",
	},
	{
		title: "pool houses",
		image: "/banner/7.jpg",
	},
];

const Expertise = ({ fields }) => {
	const [currIdx, setCurrIdx] = useState(0);
	const [ref, variants, animation] = useFadeIn();

	return (
		<Grid templateColumns={["1fr", null, "repeat(2, 1fr)"]} gap="50px">
			<Box
				position="relative"
				boxSize="100%"
				height="500px"
				display={["none", null, "block"]}
			>
				<Box boxSize="100%" overflow="hidden" position="relative">
					<AnimatePresence>
						<MotionBox
							layout
							key={currIdx}
							bg={`url(${fields[currIdx].image})`}
							backgroundSize="cover"
							backgroundPosition="center"
							boxSize="100%"
							objectFit="cover"
							position="absolute"
							top="0"
							bottom="0"
							left="0"
							right="0"
							initial={{
								opacity: 0,
							}}
							animate={{
								scale: 1.1,
								opacity: 1,
							}}
							exit={{
								opacity: 0,
							}}
							transition={{
								scale: { duration: 10 },
								opacity: { duration: 1 },
							}}
						/>
					</AnimatePresence>
				</Box>

				<Flex
					background="rgba(77, 124, 142, 0.3)"
					position="absolute"
					top="0"
					left="0"
					boxSize="100%"
					justifyContent="center"
					alignItems="flex-end"
					padding={[8, null, 10]}
				>
					<AnimatePresence exitBeforeEnter>
						<MotionHeading
							key={fields[currIdx].title}
							size="md"
							color="white"
							textTransform="capitalize"
							transition={{
								duration: 0.5,
							}}
							initial={{
								opacity: 0,
							}}
							animate={{
								opacity: 1,
							}}
							exit={{
								opacity: 0,
								transition: {
									duration: 0.5,
								},
							}}
						>
							{fields[currIdx].title}
						</MotionHeading>
					</AnimatePresence>
				</Flex>

				<MotionBox
					key={`vertical-box-${currIdx}`}
					borderLeft="1px solid"
					borderRight="1px solid"
					borderColor="gray.200"
					position="absolute"
					top={[4, null, 6]}
					left={[4, null, 6]}
					right={[4, null, 6]}
					bottom={[4, null, 6]}
					initial={{
						opacity: 0,
						scaleY: 0.1,
					}}
					animate={{
						opacity: 1,
						scaleY: 1,
					}}
					transition={{
						duration: 0.5,
					}}
				></MotionBox>

				<MotionBox
					key={`horizontal-box-${currIdx}`}
					borderBottom="1px solid"
					borderTop="1px solid"
					borderColor="gray.200"
					position="absolute"
					top={[4, null, 6]}
					left={[4, null, 6]}
					right={[4, null, 6]}
					bottom={[4, null, 6]}
					initial={{
						scaleX: 0.1,
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						scaleX: 1,
					}}
					transition={{
						duration: 0.5,
					}}
				></MotionBox>
			</Box>
			<Flex
				flexDirection="column"
				justifyContent="center"
				textAlign={["center", null, "start"]}
			>
				<MotionHeading
					mb="8"
					color="brandBlue"
					animate={animation}
					ref={ref}
					variants={variants}
					initial="hidden"
				>
					We are experts in:
				</MotionHeading>

				<AnimateSharedLayout>
					<Stack alignItems="flex-start" spacing="5">
						{fields.map((field, idx) => (
							<Button
								key={field.title}
								variant="link"
								textTransform="uppercase"
								color={idx === currIdx ? "gray.800" : "gray.500"}
								fontWeight="normal"
								onClick={() => {
									setCurrIdx(idx);
								}}
								position="relative"
							>
								{currIdx === idx && (
									<MotionBox
										display={["none", null, "block"]}
										position="absolute"
										top="-10px"
										bottom="-10px"
										left="-20px"
										right="-20px"
										layoutId="outline"
										bg="gray.100"
										borderRadius="full"
									></MotionBox>
								)}
								<Box zIndex="10">{`${field.title}`}</Box>
							</Button>
						))}
					</Stack>
				</AnimateSharedLayout>
			</Flex>
		</Grid>
	);
};

const Team = ({ teamMembers }) => {
	return (
		<>
			<Title>Our Team</Title>
			<Grid
				templateColumns={["repeat(1, 1fr)", null, "repeat(3, 1fr)"]}
				gap="10"
			>
				{teamMembers.map((member, idx) => (
					<TeamMemberCard key={idx} {...member} />
				))}
			</Grid>
		</>
	);
};

const TeamMemberCard = ({ name, position, photo }) => {
	return (
		<Box height={["450px", null, "500px"]} position="relative">
			<NextImage src={photo} layout="fill" objectFit="cover" />
			<Box
				position="absolute"
				top="0"
				left="0"
				bg={[
					"rgba(77, 124, 142, 0.3)",
					null,
					"linear-gradient(0deg, rgba(77, 124, 142, 0.8) 0%, rgba(77, 124, 142, 0) 50%)",
				]}
				boxSize="100%"
				initial="rest"
				_hover={{
					backgroundColor: "rgba(77, 124, 142, 0.3)",
					div: {
						opacity: 1,
						transform: "scale(1)",
					},
					h3: {
						bottom: 0,
					},
					p: {
						opacity: 1,
					},
				}}
			>
				<Flex
					flexDirection="column"
					justifyContent="flex-end"
					alignItems="center"
					boxSize="100%"
					color="white"
				>
					<Heading
						as="h3"
						fontWeight="medium"
						fontSize={["lg", null, "2xl"]}
						position="relative"
						transition="all 0.3s"
						bottom={[0, null, "-20px"]}
						mb="15px"
					>
						{name}
					</Heading>

					<Text
						lineHeight="tall"
						fontSize={["sm", null, "md"]}
						opacity={[1, null, 0]}
						transition="all 0.3s"
						mb="30px"
					>
						{position}
					</Text>
				</Flex>

				<Box
					position="absolute"
					top={[4, null, 6]}
					left={[4, null, 6]}
					right={[4, null, 6]}
					bottom={[4, null, 6]}
					borderTop="1px solid #fff"
					borderBottom="1px solid #fff"
					opacity={[1, null, 0]}
					transform={["scaleX(1)", null, "scaleX(0.1)"]}
					transition="all linear 0.3s"
				></Box>

				<Box
					position="absolute"
					top={[4, null, 6]}
					left={[4, null, 6]}
					right={[4, null, 6]}
					bottom={[4, null, 6]}
					borderLeft="1px solid #fff"
					borderRight="1px solid #fff"
					opacity={[1, null, 0]}
					transform={["scaleY(1)", null, "scaleY(0.1)"]}
					transition="all linear 0.3s"
				></Box>
			</Box>
		</Box>
	);
};

const AboutUsPage = ({ testimonials, teamMembers }) => {
	return (
		<>
			<NextSeo
				title={getPageTitle("About Us")}
				description="Our company specializes in pools. We Design, Supply and Build gunite and vinyl pools. Call now to get a free estimated"
			/>

			<Header />
			<Banner
				title="ABOUT US"
				image={{
					src: banner,
				}}
			/>
			<Container maxW="container.xl">
				<Introduction />
				<Expertise fields={fields} />
				<Team teamMembers={teamMembers} />
				<Testimonials testimonials={testimonials} />
			</Container>
			<Form />
			<Footer />
		</>
	);
};

export default AboutUsPage;
