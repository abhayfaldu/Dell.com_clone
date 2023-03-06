import {
	EmailIcon,
	Search2Icon,
	ViewIcon,
	ViewOffIcon,
} from "@chakra-ui/icons";
import {
	Button,
	Container,
	Flex,
	FormControl,
	GridItem,
	Heading,
	Image,
	Input,
	InputGroup,
	InputRightElement,
	Link,
	SimpleGrid,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";
import PersonIcon from "@mui/icons-material/Person";
import axios from "axios";
import React, { useState } from "react";
import laptop from "../Utils/laptop.avif";
import logo from "../Utils/logo.png";
import { useToast } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

const CreatePw = () => {
	const [showPassword, setShowPassword] = useState(false);
	const { id, token } = useParams();
	const [data, setData] = useState({});
	const toast = useToast();
	const navigate = useNavigate();

	const handleChange = e => {
		const { name, value } = e.target;
		setData({ ...data, [name]: value });
	};

	const handleSubmit = e => {
		e.preventDefault();

		if (data.password === data.confirmPassword) {
			axios
				.post(
					`${process.env.REACT_APP_SERVER_URL}/users/saveforgotpassword/${id}/${token}`,
					data
				)
				.then(res => {
					if (res.data.success) {
						toast({
							title: "Password Saved.",
							description: res.data.message,
							status: "success",
							duration: 9000,
							isClosable: true,
						});
						navigate("/login");
					} else {
						toast({
							title: "Password Not Saved.",
							description: res.data.message,
							status: "error",
							duration: 9000,
							isClosable: true,
						});
					}
				})
				.catch(err => {
					console.log(err);
					toast({
						title: "Something Went Wrong.",
						description: "Please Try Again Later",
						status: "error",
						duration: 9000,
						isClosable: true,
					});
				});
		} else {
			toast({
				title: "Passowrd Not Matched.",
				description: "Please Make Sure The Password You Entered Are same",
				status: "error",
				duration: 9000,
				isClosable: true,
			});
		}
	};

	return (
		<Container maxW="full" p={0}>
			<Flex
				h={{ base: "auto", md: "115vh" }}
				py={0}
				direction={{ base: "column-reverse", md: "row" }}
			>
				<VStack w="full" h="full" p={10} spacing={10}>
					<VStack spacing={10} alignItems="center">
						<Image src={logo} alt="mylogo" w={200} />

						<Heading>Create Password</Heading>
						<Text fontWeight={400} fontSize={[12, 14, 16]}>
							Enter New Password and Confirm New password to reset password
						</Text>

						<form onSubmit={handleSubmit} style={{ width: "100%" }}>
							<FormControl mb={10} isRequired>
								<InputGroup>
									<Input
										name="password"
										onChange={handleChange}
										placeholder="Enter New Password"
										type={showPassword ? "text" : "password"}
									/>
									<InputRightElement h={"full"}>
										<Button
											variant={"ghost"}
											onClick={() =>
												setShowPassword(showPassword => !showPassword)
											}
										>
											{showPassword ? <ViewIcon /> : <ViewOffIcon />}
										</Button>
									</InputRightElement>
								</InputGroup>
							</FormControl>
							<FormControl mb={10} isRequired>
								<InputGroup>
									<Input
										name="confirmPassword"
										onChange={handleChange}
										placeholder="Confirm New Password"
										type={showPassword ? "text" : "password"}
									/>
									<InputRightElement h={"full"}>
										<Button
											variant={"ghost"}
											onClick={() =>
												setShowPassword(showPassword => !showPassword)
											}
										>
											{showPassword ? <ViewIcon /> : <ViewOffIcon />}
										</Button>
									</InputRightElement>
								</InputGroup>
							</FormControl>
							<Stack spacing={10} pt={2}>
								<Button
									loadingText="Submitting"
									size="lg"
									bg={"blue.400"}
									color={"white"}
									_hover={{
										bg: "blue.500",
									}}
									type="submit"
								>
									Save Password
								</Button>
							</Stack>
						</form>
						<Text align={"center"}>
							Goto Home?{" "}
							<Link
								_hover={{
									textDecoration: "underline",
									cursor: "pointer",
								}}
								onClick={() => navigate("/")}
								color={"blue.400"}
							>
								Click Here
							</Link>
						</Text>
					</VStack>
				</VStack>
				<VStack w="full" h="full" p={10} spacing={10} bg={"gray.50"}>
					<Heading>LapDen Account Benefits</Heading>
					<Text color={"gray.500"}>
						My Account is an easy, more centralized way to manage your tech.
						Sign Up Now!
					</Text>
					<SimpleGrid
						columns={{ base: 1, md: 3 }}
						columnGap={5}
						rowGap="6"
						w={"full"}
					>
						<GridItem>
							<Search2Icon mb={5} />
							<Text mb={5} fontWeight={500}>
								Order Tracking
							</Text>
							<Text color={"gray.500"}>
								Manage orders, track shipping status and view support history
							</Text>
						</GridItem>
						<GridItem>
							<EmailIcon mb={5} />
							<Text mb={5} fontWeight={500}>
								Manage Communications
							</Text>
							<Text color={"gray.500"}>
								Manage marketing and communications preferences
							</Text>
						</GridItem>
						<GridItem>
							<PersonIcon mb={5} />
							<Text mb={5} fontWeight={500}>
								Profile Setting
							</Text>
							<Text color={"gray.500"}>
								Save your favorite payment method and shipping details for
								quicker checkout
							</Text>
						</GridItem>
					</SimpleGrid>
					<Image src={laptop} alt="laptop_img" />
				</VStack>
			</Flex>
		</Container>
	);
};

export default CreatePw;
