import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { CartItem } from "./CartItem";
import { CartOrderSummary } from "./CartOrderSummary";
import { cartData } from "./_data";
import axios from "axios";
import { useEffect } from "react";

const getProducts = () => {
  axios
    .get("http://localhost:8080/cart/singlecart", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log("something went wrong in getting products:", err);
    });
};

export const Cart = () => {
  const navigate = useNavigate();
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Box
      maxW={{
        base: "3xl",
        lg: "7xl",
      }}
      mx="auto"
      px={{
        base: "4",
        md: "8",
        lg: "12",
      }}
      py={{
        base: "6",
        md: "8",
        lg: "12",
      }}
    >
      <Stack
        direction={{
          base: "column",
          lg: "row",
        }}
        align={{
          lg: "flex-start",
        }}
        spacing={{
          base: "8",
          md: "16",
        }}
      >
        <Stack
          spacing={{
            base: "8",
            md: "10",
          }}
          flex="2"
        >
          <Heading fontSize="2xl" fontWeight="extrabold">
            Shopping Cart ({cartData.length} items)
          </Heading>

          <Stack spacing="6">
            {cartData.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </Stack>
        </Stack>

        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary />

          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link onClick={()=>navigate("/")} color={mode("blue.500", "blue.200")}>Continue shopping</Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  );
};
