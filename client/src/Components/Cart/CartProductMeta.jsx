import {
	Box,
	Flex,
	HStack,
	Icon,
	Image,
	// Link,
	Stack,
	Text,
	useColorModeValue as mode,
} from "@chakra-ui/react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

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

export const CartProductMeta = props => {
	const {
		// isGiftWrapping = true,
		image,
		name,
		original_price,
		discounted_price,
	} = props;
	return (
		<Stack direction="row" spacing="5" width="full" >
			<Image
				rounded="lg"
				width="120px"
				height="120px"
				fit="contain"
				src={image}
				alt={name}
				draggable="false"
				loading="lazy"
			/>
			<Flex flexDir={"column"} gap={2} justify={'center'}>
				<Text fontWeight="medium">{name}</Text>
				<HStack spacing="1" color={mode("gray.600", "gray.400")}>
					<Icon as={LocalOfferIcon} boxSize="4" />
					<Text fontSize="sm" color={"green"}>
						Saving - ₹{" "}
						{rupeeAmountToString(original_price - discounted_price, true)}
					</Text>
				</HStack>
			</Flex>
		</Stack>
	);
};
