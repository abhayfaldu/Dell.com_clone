import { Badge, Flex, Text } from "@chakra-ui/react";
import React from "react";

const calculatePercentDifference = (num1, num2) => {
	const diff = Math.abs(num1 - num2);
	const avg = (num1 + num2) / 2;
	const percentDiff = (diff / avg) * 100;
	return percentDiff.toFixed(0);
};

export function rupeeAmountToString(amount, isSaving = false) {
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
	return `${integerPartWithCommas}.${fractionalPart}`
}

const PriceDetails = ({ original_price, discounted_price }) => {
	const saving_percentage = calculatePercentDifference(
		original_price,
		discounted_price
	);
	return (
		<Flex flex={1} p={3} gap={2} flexDir="column" align={"start"}>
			<Badge fontSize={"14px"} mb={1} colorScheme={"green"}>
				₹2500 OFF | FREE SHIPPING
			</Badge>
			<Flex fontSize={"14px"} gap={1} color={"customGray"}>
				<Text>Online price</Text>
				<Text textDecor={"line-through"}>
					₹ {rupeeAmountToString(original_price)}
				</Text>
			</Flex>
			<Flex align={"flex-end"}>
				<Text fontSize={"21px"} fontWeight="bold" mr={1} lineHeight={"25px"}>
					₹ {rupeeAmountToString(discounted_price)}
				</Text>
				<Text fontSize={"14px"} mr={1}>
					Save
				</Text>
				<Text fontSize={"14px"} color="green" fontWeight={"bold"}>
					₹ {rupeeAmountToString(original_price - discounted_price, true)}
				</Text>
				<Text fontSize={"14px"} color={"green"} fontWeight={"bold"}>
					({saving_percentage})%
				</Text>
			</Flex>
			<Text fontSize={"14px"}>Price inclusive of GST. Free Delivery.</Text>
			<Text fontSize={"14px"}>Usually delivered in 2-4 days</Text>
		</Flex>
	);
};

export default PriceDetails;
