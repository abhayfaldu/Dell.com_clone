import React from "react";
import {
  Container,
  Heading,
  Flex,
  VStack,
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
import { Radio, RadioGroup } from "@chakra-ui/react";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { ConfirmOrder } from "./ConfirmOrder";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  const navigate = useNavigate()

  return (
    <Container maxW="full" p={0}>
      <Flex
        h={{ base: "auto", md: "auto" }}
        py={0}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <VStack w="full" h="full" p={10} spacing={10} /*bg={"red.50"}*/>
          <VStack spacing={10} alignItems="center">
            <Image onClick={()=>navigate("/")} src={logo} alt="mylogo" w={200} />
            <Heading>Shipping Information</Heading>
            <form style={{ width: "100%" }}>
              <SimpleGrid column={2} columnGap={3} rowGap={6} width="full">
                <GridItem colSpan={colSpan}>
                  <FormControl isRequired>
                    <Input
                      placeholder="First Name"
                      type="text"
                      name="first_name"
                    ></Input>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={colSpan}>
                  <FormControl isRequired>
                    <Input
                      placeholder="Last Name"
                      type="text"
                      name="last_name"
                    ></Input>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl isRequired>
                    <Input
                      placeholder="Street address"
                      type="text"
                      name="address"
                    ></Input>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={colSpan}>
                  <FormControl isRequired>
                    <Input
                      placeholder="Zip Code"
                      type="number"
                      name="zipcode"
                    ></Input>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={colSpan}>
                  <FormControl isRequired>
                    <Input placeholder="City" type="text" name="City"></Input>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl mb={4} isRequired>
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
                  <FormControl isRequired>
                    <Input
                      placeholder="Card Number"
                      type="number"
                      name="cnumber"
                    ></Input>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={colSpan}>
                  <FormControl isRequired>
                    <Input placeholder="Name On Card" type="text" name="cardname"></Input>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl isRequired>
                    <Input placeholder="Expiry date" type="month" name="date"></Input>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl isRequired>
                    <Input placeholder="CVV/CVC" type="number" name="cvv"></Input>
                  </FormControl>
                </GridItem>
              </SimpleGrid>
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

export default Checkout;
