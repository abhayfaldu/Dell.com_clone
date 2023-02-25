import {
  Box,
  // HStack,
  // Icon,
  Image,
  // Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
// import { FiGift } from 'react-icons/fi'

function rupeeAmountToString(amount, isSaving = false) {
  const amountString = amount.toFixed(2).toString();
  // console.log('amountString:', amountString)
  const [integerPart, fractionalPart] = amountString.split(".");

  // Add commas to the integer part
  const integerPartWithCommas = integerPart.replace(
    /(\d)(?=(\d{2})+\d$)/g,
    "$1,"
  );
  // console.log("integerPartWithCommas:", integerPartWithCommas);
  if (isSaving) {
    return integerPartWithCommas + "";
  }
  return `${integerPartWithCommas}.${fractionalPart}`;
}

export const CartProductMeta = (props) => {
  const {
    isGiftWrapping = true,
    image,
    name,
    original_price,
    discounted_price,
  } = props;
  return (
    <Stack direction="row" spacing="5" width="full">
      <Image
        rounded="lg"
        width="120px"
        height="120px"
        fit="cover"
        src={image}
        alt={name}
        draggable="false"
        loading="lazy"
      />
      <Box pt="4">
        <Stack spacing="0.5">
          <Text fontWeight="medium">{name}</Text>
          {/* <Text color={mode('gray.600', 'gray.400')} fontSize="sm">
            {description}
          </Text> */}
          {/* {isGiftWrapping && (
          <HStack spacing="1" mt="3" color={mode('gray.600', 'gray.400')}>
          <Icon as={FiGift} boxSize="4" />
          <Link fontSize="sm" textDecoration="underline">
          Add gift wrapping
          </Link>
          </HStack>
        )} */}
          <Text textAlign={"left"} mt="3" color={mode("gray.600", "gray.400")}>
            Saving - ₹ {rupeeAmountToString(original_price - discounted_price, true)}
          </Text>
        </Stack>
      </Box>
    </Stack>
  );
};
