import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { CartItem } from "./CartItem";
import { CartOrderSummary } from "./CartOrderSummary";
import empty from "../../Utils/empty.png";
import { useEffect } from "react";
import { clearAllProducts, getProducts } from "../../Redux/Cart/action";
import { useDispatch, useSelector } from "react-redux";

export const Cart = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.CartReducer);
  // console.log('products:', products)

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getProducts);
  }, []);

  const handleClear = () => {
    dispatch(clearAllProducts()).then((res) => {
      dispatch(getProducts);
    });
  };
  if (products.length === 0) {
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
              Shopping Cart ({products.length} items)
            </Heading>

            <Stack spacing="6" display={"flex"} justify="center" align={"center"}>
              <Image margin={"auto"} w={250} src={empty} alt="emptycart" />
            </Stack>
          </Stack>

          <Flex direction="column" align="center" flex="1">
            <CartOrderSummary />

            <HStack mt="6" fontWeight="semibold">
              <p>or</p>
              <Link
                onClick={() => navigate("/")}
                color={mode("blue.500", "blue.200")}
              >
                Continue shopping
              </Link>
            </HStack>
          </Flex>
        </Stack>
      </Box>
    );
  }
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
            Shopping Cart ({products.length} items)
          </Heading>

          <Button colorScheme='red' onClick={() => handleClear()}>Clear All</Button>

          <Stack spacing="6">
            {products.map((item) => (
              // console.log('item:', item.image_url)

              <CartItem key={item._id} {...item} />
            ))}
          </Stack>
        </Stack>

        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary />

          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link
              onClick={() => navigate("/")}
              color={mode("blue.500", "blue.200")}
            >
              Continue shopping
            </Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  );
};
