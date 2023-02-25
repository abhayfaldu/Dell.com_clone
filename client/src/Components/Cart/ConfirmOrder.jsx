import {
    Button,
    Flex,
    Heading,
    Stack,
    Text,
    useColorModeValue as mode,
  } from "@chakra-ui/react";
  import { useNavigate } from "react-router-dom";
  import { FaArrowRight } from "react-icons/fa";
  import { formatPrice } from "./PriceTag";
  import { useToast } from '@chakra-ui/react'
  const OrderSummaryItem = (props) => {
    const { label, value, children } = props;
    // console.log('value:', value)
    return (
      <Flex justify="space-between" fontSize="sm">
        <Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
          {label}
        </Text>
        {value ? <Text fontWeight="medium">{value}</Text> : children}
      </Flex>
    );
  };
  
  export const ConfirmOrder = () => {
    const navigate = useNavigate();
    const toast = useToast();
    const handleClick = () => {
        toast({
            title: "Order Placed.",
            description: "Order Placed Successfully",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          navigate("/")
    }
    return (
      <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
        <Heading size="md">Order Summary</Heading>
  
        <Stack spacing="6">
          <OrderSummaryItem label="Subtotal" value={formatPrice(597)} />
          <OrderSummaryItem label="Shipping + Tax">
            <Text>{Math.floor(Math.random() * (400 - 100) ) + 50}</Text>
          </OrderSummaryItem>
          <OrderSummaryItem label="Coupon Code">
            <Text fontWeight={"bold"}>LAPDEN2023</Text>
          </OrderSummaryItem>
          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">
              Total
            </Text>
            <Text fontSize="xl" fontWeight="extrabold">
              {formatPrice(597)}
            </Text>
          </Flex>
        </Stack>
        <Button
          colorScheme="blue"
          size="lg"
          fontSize="md"
          rightIcon={<FaArrowRight />}
          onClick={()=>handleClick()}
        >
          Place Order
        </Button>
      </Stack>
    );
  };
  