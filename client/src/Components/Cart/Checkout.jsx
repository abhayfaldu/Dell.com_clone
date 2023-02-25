import React from "react";
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
  Checkbox,
  useBreakpointValue,
  Stack,
} from "@chakra-ui/react";
import logo from "../../Utils/logo.png";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { ConfirmOrder } from "./ConfirmOrder";

const SignUp = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });

  const navigate = useNavigate();
  const toast = useToast();

  return (
    <Container maxW="full" p={0}>
      <Flex
        h={{ base: "auto", md: "130vh" }}
        py={[0, 10, 20]}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <VStack w="full" h="full" p={10} spacing={10} /*bg={"red.50"}*/>
          <VStack spacing={10} alignItems="center">
            <Image src={logo} alt="mylogo" w={200} />

            <Heading>Shipping Information</Heading>

            <form style={{ width: "100%" }}>
              <SimpleGrid column={2} columnGap={3} rowGap={6} width="full">
                <GridItem colSpan={colSpan}>
                  <FormControl>
                    <Input
                      placeholder="First Name"
                      type="text"
                      name="first_name"
                    ></Input>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={colSpan}>
                  <FormControl>
                    <Input
                      placeholder="Last Name"
                      type="text"
                      name="last_name"
                    ></Input>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl>
                    <Input
                      placeholder="Street address"
                      type="text"
                      name="address"
                    ></Input>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={colSpan}>
                  <FormControl>
                    <Input
                      placeholder="Zip Code"
                      type="number"
                      name="zipcode"
                    ></Input>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={colSpan}>
                  <FormControl>
                    <Input placeholder="City" type="text" name="City"></Input>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl mb={4}>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                    ></Input>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2} mb={10}>
                  <Checkbox defaultChecked>
                    Billing Address Is Same As Shipping.
                  </Checkbox>
                </GridItem>
                <GridItem colSpan={2} mb={10}>
                  <Heading>Payment Information</Heading>
                </GridItem>
                <GridItem colSpan={colSpan} mb={10}>
                  <RadioGroup>
                    <Radio>
                      <Stack>
                        <Text fontWeight={"bold"}>Credit Card</Text>
                        <Text>Pay with credit card via Stripe</Text>
                        <CreditCardIcon />
                      </Stack>
                    </Radio>
                  </RadioGroup>
                </GridItem>
                <GridItem colSpan={colSpan} mb={10}>
                  <RadioGroup>
                    <Radio>
                      <Stack>
                        <Text fontWeight={"bold"}>Pay Pal</Text>
                        <Text>Pay with your PayPal account</Text>
                        <CreditCardIcon />
                      </Stack>
                    </Radio>
                  </RadioGroup>
                </GridItem>
                <GridItem colSpan={colSpan}>
                  <FormControl>
                    <Input
                      placeholder="Card Number"
                      type="number"
                      name="cnumber"
                    ></Input>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={colSpan}>
                  <FormControl>
                    <Input placeholder="Name On Card" type="text" name="cardname"></Input>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl>
                    <Input placeholder="Expiry date" type="month" name="date"></Input>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl>
                    <Input placeholder="CVV/CVC" type="number" name="cvv"></Input>
                  </FormControl>
                </GridItem>
              </SimpleGrid>
              {/* <Stack spacing={10} pt={2}>
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
              </Stack> */}
            </form>
          </VStack>
        </VStack>
        <VStack w="full" h="full" p={10} spacing={10} bg={"gray.50"}>
          <ConfirmOrder />
        </VStack>
      </Flex>
    </Container>
  );
};

export default SignUp;
