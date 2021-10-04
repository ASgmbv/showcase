import {
	Box,
	Button,
	Container,
	FormControl,
	FormLabel,
	Grid,
	Heading,
	Input,
	Select,
	Stack,
	Text,
	FormErrorMessage,
	useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
	const {
		register,
		handleSubmit,
		watch,
		getValues,
		formState: { errors },
	} = useForm();

	const toast = useToast();
	const [isSending, setSending] = useState(false);

	const onSubmit = async (data) => {
		console.log(data);

		if (data.Service === "other") {
			data.Service = data.other;
		}

		delete data.other;

		try {
			setSending(true);

			let response = await fetch("/api", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			response = await response.json();

			console.log({ response });

			if (response.success) {
				toast({
					title: "Request Successfully Sent!",
					description:
						"Thank you! Our representative will contact you shortly with pricing and availability! If you need immediate assistance, please call 516-801-2695.",
					status: "success",
					isClosable: true,
				});
			} else {
				throw new Error();
			}
		} catch (e) {
			toast({
				title: "Something went wrong!",
				description:
					"If you need immediate assistance, please call 516-801-2695.",
				status: "error",
				isClosable: true,
			});
		} finally {
			setSending(false);
		}
	};

	return (
		<Grid templateColumns={["1fr", null, null, "repeat(3, 1fr)"]} id="form">
			<Box
				gridColumn={[null, null, null, "1 / 3"]}
				bg="brandBlue"
				paddingY="20"
			>
				<Container>
					<Stack
						as="form"
						spacing="6"
						width="100%"
						onSubmit={handleSubmit(onSubmit)}
						color="white"
					>
						<Heading fontSize={["3xl", null, "4xl"]}>
							Get in Touch
						</Heading>
						<Text color="#A2A9B0">
							Have a project in mind that you think we’d be a great fit
							for it? We’d love to know what you’re thinking
						</Text>

						{/* Email */}
						<FormControl isInvalid={errors.email}>
							<FormLabel fontWeight="bold">Email</FormLabel>
							<Input
								borderRadius="0"
								size="lg"
								{...register("Email", { required: true })}
							/>
							<FormErrorMessage>The field is required!</FormErrorMessage>
						</FormControl>

						{/* Full Name */}
						<FormControl isInvalid={errors.name}>
							<FormLabel fontWeight="bold">Full Name</FormLabel>
							<Input
								borderRadius="0"
								size="lg"
								{...register("Name", { required: true })}
							/>
							<FormErrorMessage>The field is required!</FormErrorMessage>
						</FormControl>

						{/* Phone */}
						<FormControl isInvalid={errors.phone}>
							<FormLabel fontWeight="bold">Phone Number</FormLabel>
							<Input
								borderRadius="0"
								size="lg"
								{...register("Phone", { required: true })}
							/>
							<FormErrorMessage>The field is required!</FormErrorMessage>
						</FormControl>

						{/* Address */}
						<FormControl isInvalid={errors.address}>
							<FormLabel fontWeight="bold">Your Address</FormLabel>
							<Input
								borderRadius="0"
								size="lg"
								{...register("Address", { required: true })}
							/>
							<FormErrorMessage>The field is required!</FormErrorMessage>
						</FormControl>

						{/* Service */}
						<FormControl isInvalid={errors.service}>
							<FormLabel fontWeight="bold">Service</FormLabel>
							<Select
								borderRadius="0"
								size="lg"
								{...register("Service", { required: true })}
							>
								<option value="Pool">Pool</option>
								<option value="Backyard">Backyard</option>
								<option value="Landscape Design">
									Landscape Design
								</option>
								<option value="Outdoor Kitchen">Outdoor Kitchen</option>
								<option value="other">Other</option>
							</Select>
							<FormErrorMessage>The field is required!</FormErrorMessage>
						</FormControl>

						{/* Other Service */}
						{watch("Service") === "other" && (
							<FormControl isInvalid={errors.other}>
								<FormLabel fontWeight="bold">Other Service</FormLabel>
								<Input
									borderRadius="0"
									size="lg"
									{...register("other", {
										required: getValues("Service") === "other",
									})}
								/>
								<FormErrorMessage>
									The field is required!
								</FormErrorMessage>
							</FormControl>
						)}

						<Button
							type="submit"
							size="lg"
							colorScheme="green"
							isLoading={isSending}
						>
							Send
						</Button>
					</Stack>
				</Container>
			</Box>

			<Box
				backgroundImage="/slider2.jpg"
				backgroundSize="cover"
				backgroundPosition="center"
				display={["none", null, null, "block"]}
			></Box>
		</Grid>
	);
};

export default Form;
