import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { formatPrice } from "./PriceTag";
import { useSelector } from "react-redux";
import { OrderS } from "../Order_Confirm/OrderS";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const OrderSummaryItem = (props) => {
  const { label, value, children } = props;
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
  const { products } = useSelector((store) => store.CartReducer);

  const sum = products.reduce((accumulator, object) => {
    return accumulator + Number(object.discounted_price);
  }, 0);
  
  let x = localStorage.getItem("tax");
  let total = Number(x) + sum;

  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Order Summary</Heading>
      <Stack spacing="6">
        <OrderSummaryItem label="Subtotal" value={formatPrice(sum)} />
        <OrderSummaryItem label="Shipping + Tax">
          <Text>{x}</Text>
        </OrderSummaryItem>
        <OrderSummaryItem label="Coupon Code">
          <Text fontWeight={"bold"}>LAPDEN2023</Text>
        </OrderSummaryItem>
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {formatPrice(total)}
          </Text>
        </Flex>
      </Stack>
      <Popup
        trigger={
          <Button
            colorScheme="blue"
            size="lg"
            fontSize="md"
            rightIcon={<FaArrowRight />}
          >
            Place Order
          </Button>
        }
      >
        <OrderS />
      </Popup>
    </Stack>
  );
};
