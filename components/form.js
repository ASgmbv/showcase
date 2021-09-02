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
					bg="#283646"
					paddingY="20"
				>
					<Container>
						<Stack spacing="8">
							<Heading color="white" size="2xl">
								Get in Touch
							</Heading>
							<Text color="#A2A9B0">
								Have a project in mind that you think we’d be a great
								fit for it? We’d love to know what you’re thinking
							</Text>
							<Stack direction="row" spacing="6">
								<FormControl>
									<FormLabel color="white" fontWeight="bold">
										Full Name
									</FormLabel>
									<Input
										borderRadius="0"
										size="lg"
										placeholder="Input your full name in here"
									/>
								</FormControl>
								<FormControl>
									<FormLabel color="white" fontWeight="bold">
										Email Address
									</FormLabel>
									<Input
										borderRadius="0"
										size="lg"
										placeholder="Input your full name in here"
									/>
								</FormControl>
							</Stack>
							<FormControl>
								<FormLabel color="white" fontWeight="bold">
									Email Address
								</FormLabel>
								<Textarea
									borderRadius="0"
									placeholder="Write your messages in here"
									noOfLines="10"
								/>
							</FormControl>
							<Button
								borderRadius="0"
								width="fit-content"
								bg="#8BC441"
								_hover={{
									bg: "green.300",
								}}
								_active={{
									bg: "green.300",
								}}
								color="white"
								size="lg"
							>
								Send Messages
							</Button>
						</Stack>
					</Container>
				</Box>
				<Box
					backgroundImage="/form.jpg"
					backgroundSize="cover"
					backgroundPosition="right"
					display={["none", null, null, "block"]}
				></Box>
			</Grid>
		</Box>
	);
};

export default Form;
