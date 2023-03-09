import {
	Flex,
	HStack,
	Icon,
	Image,
	Text,
	useColorModeValue as mode,
} from "@chakra-ui/react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

function rupeeAmountToString(amount, isSaving = false) {
	const amountString = amount.toFixed(2).toString();
	const [integerPart, fractionalPart] = amountString.split(".");

	// Add commas to the integer part
	const integerPartWithCommas = integerPart.replace(
		/(\d)(?=(\d{2})+\d$)/g,
		"$1,"
	);
	if (isSaving) {
		return integerPartWithCommas + "";
	}
	return `${integerPartWithCommas}.${fractionalPart}`;
}

export const CartProductMeta = props => {
	const { image, name, original_price, discounted_price } = props;
	return (
		<Flex gap="5" width="full"
			// border={"1px solid red"}
			w={[ "full", "full", "60%" ]}>
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
			<Flex flexDir={"column"} gap={2} justify={"center"}>
				<Text fontWeight="medium" textAlign={"left"}>
					{name}
				</Text>
				<HStack spacing="1" color={mode("gray.600", "gray.400")}>
					<Icon as={LocalOfferIcon} boxSize="4" />
					<Text fontSize="sm" color={"green"}>
						Saving - ₹{" "}
						{rupeeAmountToString(original_price - discounted_price, true)}
					</Text>
				</HStack>
			</Flex>
		</Flex>
	);
};
