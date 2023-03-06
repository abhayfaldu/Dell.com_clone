import React, { useState } from "react";
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
  InputRightElement,
  InputGroup,
  Stack,
  Link,
  Checkbox,
  useBreakpointValue,
} from "@chakra-ui/react";
import logo from "../Utils/logo.png";
import laptop from "../Utils/laptop.avif";
import {
  ViewIcon,
  ViewOffIcon,
  Search2Icon,
  EmailIcon,
} from "@chakra-ui/icons";
import PersonIcon from "@mui/icons-material/Person";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({});
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  const navigate = useNavigate();
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
			.post(`${process.env.REACT_APP_SERVER_URL}/users/register`, data)
			.then(res => {
				localStorage.setItem("token", res.data.token);
				if (res.data.success) {
					toast({
						title: "Account Created.",
						description: res.data.message,
						status: "success",
						duration: 9000,
						isClosable: true,
					});
					navigate("/login");
				} else {
					toast({
						title: "Existing User.",
						description: res.data.message,
						status: "error",
						duration: 9000,
						isClosable: true,
					});
				}
			})
			.catch(err => console.log(err));
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

            <Heading>Create Your Account</Heading>
            <Text align={"center"}>
              Already have an account?
              <Link color={"blue.400"}>Sign In</Link>
            </Text>

            <form style={{ width: "100%" }} onSubmit={handleSubmit}>
              <SimpleGrid column={2} columnGap={3} rowGap={6} width="full">
                <GridItem colSpan={colSpan}>
                  <FormControl isRequired>
                    <Input
                      onChange={handleChange}
                      placeholder="First Name"
                      type="text"
                      name="first_name"
                    ></Input>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={colSpan}>
                  <FormControl isRequired>
                    <Input
                      onChange={handleChange}
                      placeholder="Last Name"
                      type="text"
                      name="last_name"
                    ></Input>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl isRequired>
                    <Input
                      onChange={handleChange}
                      placeholder="Email Address"
                      type="email"
                      name="email"
                    ></Input>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl isRequired>
                    <InputGroup>
                      <Input
                        onChange={handleChange}
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                      />
                      <InputRightElement h={"full"}>
                        <Button
                          variant={"ghost"}
                          onClick={() =>
                            setShowPassword((showPassword) => !showPassword)
                          }
                        >
                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2} mb={10}>
                  <Checkbox defaultChecked>
                    By clicking “Create Account”, you agree to our Terms &
                    Conditions.
                  </Checkbox>
                </GridItem>
              </SimpleGrid>
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
                  Create Account
                </Button>
              </Stack>
            </form>
            <Button
              _hover={{
                bg: "blue.100",
              }}
              colorScheme="blue.500"
              variant="outline"
              w="full"
              onClick={() => navigate("/login")}
            >
              Cancel
            </Button>
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

export default SignUp;
