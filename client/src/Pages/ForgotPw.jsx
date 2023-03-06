import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Heading,
  Flex,
  VStack,
  Button,
  Image,
  SimpleGrid,
  GridItem,
  FormControl,
  Input,
  Text,
  Stack,
  Link,
} from "@chakra-ui/react";
import logo from "../Utils/logo.png";
import laptop from "../Utils/laptop.avif";
import { Search2Icon, EmailIcon } from "@chakra-ui/icons";
import PersonIcon from "@mui/icons-material/Person";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ForgotPw = () => {
  const [data, setData] = useState({});

  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
			.post(`${process.env.REACT_APP_SERVER_URL}/users/forgotpassword`, data)
			.then(res => {
				if (res.data.success) {
					toast({
						title: "Successfully Sent.",
						description: "Check Your Email For Reset Password",
						status: "success",
						duration: 9000,
						isClosable: true,
					});
				} else {
					toast({
						title: "Something Went Wrong.",
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
					title: "User Not Exists.",
					description: "Invalid Username or Password",
					status: "error",
					duration: 9000,
					isClosable: true,
				});
			});
  };

  return (
    <Container maxW="full" p={0}>
      <Flex
        h={{ base: "auto", md: "115vh" }}
        py={0}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <VStack w="full" h="full" p={10} spacing={10} /*bg={"red.50"}*/>
          <VStack spacing={10} alignItems="center">
            <Image src={logo} alt="mylogo" w={200} />

            <Heading>Forgot Password</Heading>
            <Text fontWeight={400} fontSize={[12, 14, 16]}>
              Enter the email address associated with your LapDen account to
              receive reset link
            </Text>

            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <FormControl mb={10} isRequired>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={handleChange}
                ></Input>
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
                  Send Email
                </Button>
              </Stack>
            </form>
            <Text align={"center"}>
              Remember Password?{" "}
              <Link
                _hover={{
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/login")}
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

export default ForgotPw;
