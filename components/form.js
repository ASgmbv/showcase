import {
	Box,
	Button,
	Container,
	FormControl,
	FormLabel,
	Grid,
	Heading,
	Input,
	Stack,
	Text,
	Textarea,
} from "@chakra-ui/react";

const Form = () => {
	return (
		<Box id="contacts">
			<Grid templateColumns={["1fr", null, null, "repeat(3, 1fr)"]}>
				<Box
					gridColumn={[null, null, null, "1 / 3"]}
					bg="brandBlue"
					paddingY="20"
				>
					<Container>
						<Stack spacing="8" alignItems="flex-start">
							<Heading color="white" fontSize={["3xl", null, "4xl"]}>
								Get in Touch
							</Heading>
							<Text color="#A2A9B0">
								Have a project in mind that you think we’d be a great
								fit for it? We’d love to know what you’re thinking
							</Text>
							<Stack
								direction={["column", null, "row"]}
								spacing="6"
								width="100%"
							>
								<FormControl>
									<FormLabel color="white" fontWeight="bold">
										Full Name
									</FormLabel>
									<Input
										borderRadius="0"
										size="lg"
										placeholder="Full Name"
										colorScheme="twitter"
									/>
								</FormControl>
								<FormControl>
									<FormLabel color="white" fontWeight="bold">
										Email Address
									</FormLabel>
									<Input
										borderRadius="0"
										size="lg"
										placeholder="Email Address"
									/>
								</FormControl>
							</Stack>
							<FormControl>
								<FormLabel color="white" fontWeight="bold">
									Messages
								</FormLabel>
								<Textarea
									size="lg"
									borderRadius="0"
									placeholder="Your Message"
									noOfLines="10"
								/>
							</FormControl>
							<Button size="lg" colorScheme="green">
								Send Message
							</Button>
						</Stack>
					</Container>
				</Box>
				<Box
					backgroundImage="/form.jpg"
					backgroundSize="cover"
					backgroundPosition="center"
					display={["none", null, null, "block"]}
				></Box>
			</Grid>
		</Box>
	);
};

export default Form;
