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
  Center,
  InputRightElement,
  InputGroup,
  Stack,
  Link,
} from "@chakra-ui/react";
import logo from "../Utils/logo.png";
import laptop from "../Utils/laptop.avif";
import { FcGoogle } from "react-icons/fc";
import {
  ViewIcon,
  ViewOffIcon,
  Search2Icon,
  EmailIcon,
} from "@chakra-ui/icons";
import PersonIcon from "@mui/icons-material/Person";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
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
      .post(`http://localhost:8080/users/login`, data)
      .then((res) => {
        // alert(res.data.message);

        localStorage.setItem("token", res.data.token);

        if (res.data.success && res.data.token) {
          // alert(res.data.message);
          toast({
            title: "Successfully Logged In.",
            description: res.data.message,
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          navigate("/")
        } else {
          // alert(res.data.message);
          toast({
            title: "Something Went Wrong.",
            description: res.data.message,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      })
      .catch((err) => {
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
        py={[0, 10, 20]}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <VStack w="full" h="full" p={10} spacing={10} /*bg={"red.50"}*/>
          <VStack spacing={10} alignItems="center">
            <Image src={logo} alt="mylogo" w={200} />

            <Heading>Sign In</Heading>
            <Button
              _hover={{
                bg: "blue.100",
              }}
              w={"full"}
              variant={"outline"}
              leftIcon={<FcGoogle />}
            >
              <Center>
                <Text>Sign in with Google</Text>
              </Center>
            </Button>
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <FormControl mb={10}>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={handleChange}
                ></Input>
              </FormControl>
              <FormControl mb={10}>
                <InputGroup>
                  <Input
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onChange={handleChange}
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
              <Text align={"center"} mb={10}>
                Don't remember your password?{" "}
                <Link
                  _hover={{
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/forgotpassword")}
                  color={"blue.400"}
                >
                  Forgot password
                </Link>
              </Text>
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
                  Login
                </Button>
              </Stack>
            </form>
            <Text>OR</Text>
            <Button
              _hover={{
                bg: "blue.100",
              }}
              colorScheme="blue.500"
              variant="outline"
              w="full"
            >
              Send One-time Password
            </Button>
            <Text align={"center"}>
              Don't have a LapDen account?{" "}
              <Link
                _hover={{
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/register")}
                color={"blue.400"}
              >
                Create an account
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

export default Login;
