import {
  CloseButton,
  Flex,
  Link,
  Select,
  useColorModeValue,
} from "@chakra-ui/react";
import { PriceTag } from "./PriceTag";
import { CartProductMeta } from "./CartProductMeta";
import { useDispatch } from "react-redux";
import { getProducts } from "../../Redux/Cart/action";
import { deleteProduct } from "../../Redux/Cart/action";

const QuantitySelect = (props) => {
  return (
    <Select
      maxW="64px"
      aria-label="Select quantity"
      focusBorderColor={useColorModeValue("blue.500", "blue.200")}
      {...props}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Select>
  );
};

export const CartItem = (props) => {
  const {
    title,
    original_price,
    discounted_price,
    image_url,
    quantity,
    onChangeQuantity,
    _id,
  } = props;
  // console.log(_id);
  const dispatch = useDispatch();

  const handleDelete = (_id) => {
    dispatch(deleteProduct(_id)).then((res) => {
      dispatch(getProducts);
    });
  };

  return (
    <Flex
      direction={{
        base: "column",
        md: "row",
      }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        name={title}
        image={image_url[0]}
        original_price={original_price}
        discounted_price={discounted_price}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{
          base: "none",
          md: "flex",
        }}
      >
        <QuantitySelect
          value={quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value);
          }}
        />
        <PriceTag price={discounted_price} />
        <CloseButton
          aria-label={`Delete ${title} from cart`}
          onClick={() => handleDelete(_id)}
        />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: "flex",
          md: "none",
        }}
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        <QuantitySelect
          value={quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value);
          }}
        />
        <PriceTag price={discounted_price} />
      </Flex>
    </Flex>
  );
};
