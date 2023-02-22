import { Badge, Box, Flex, Heading, Img, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const calculatePercentDifference = (num1, num2) => {
	const diff = Math.abs(num1 - num2);
	const avg = (num1 + num2) / 2;
	const percentDiff = (diff / avg) * 100;
	return percentDiff.toFixed(0);
};

const ProductCard = ({
	index,
	title,
	rating,
	number_of_reviews,
	processor,
	OS,
	graphics_card,
	memory,
	storage,
	display,
	original_price,
	discounted_price,
	image_url,
}) => {
	const num_original_price = parseFloat(original_price.replace(/[^\d.-]/g, ""));
	const num_discounted_price = parseFloat(
		discounted_price.replace(/[^\d.-]/g, "")
	);
	const saving_percentage = calculatePercentDifference(
		num_original_price,
		num_discounted_price
	);
	return (
		<SimpleGrid
			key={index}
			columns={3}
			h={"20rem"}
			shadow={"0 2px 2px #002A581a, 0 4px 4px #002A581a, 0 8px 8px #002A581a"}
			border={"1px solid #e1e1e1"}
			rounded={"md"}
			p={3}
		>
			<Box w="33%" h="100%">
				<Img src={image_url[0]} alt="product_image" objectFit={"contain"} />
			</Box>
			<Box>
				<Text>{title}</Text>
				<Flex>
					<Flex>
						{Array(Math.floor(rating))
							.fill(1)
							.map((star, i) => (
								<AiFillStar />
							))}
						{Array(5 - Math.floor(rating))
							.fill(1)
							.map((star, i) => (
								<AiOutlineStar />
							))}
					</Flex>
					<Text>{rating}</Text>
					<Text>({number_of_reviews})</Text>
				</Flex>
				<Box>
					<Heading>Specs</Heading>
					<Flex>
						<Text>Processor</Text>
						<Text>{processor}</Text>
					</Flex>
					<Flex>
						<Text>OS</Text>
						<Text>{OS}</Text>
					</Flex>
					<Flex>
						<Text>Graphics</Text>
						<Text>{graphics_card}</Text>
					</Flex>
					<Flex>
						<Text>Memory</Text>
						<Text>{memory}</Text>
					</Flex>
					<Flex>
						<Text>Storage</Text>
						<Text>{storage}</Text>
					</Flex>
					<Flex>
						<Text>Display</Text>
						<Text>{display}</Text>
					</Flex>
				</Box>
			</Box>
			<Box>
				<Badge>₹2500 OFF | FREE SHIPPING</Badge>
				<Flex>
					<Text>Online price</Text>
					<Text textDecor={"line-through"}>{original_price}</Text>
				</Flex>
				<Flex>
					<Text>{discounted_price}</Text>
					<Text>Save</Text>
					<Text>{num_original_price - num_discounted_price}</Text>
					<Text>{saving_percentage}</Text>
				</Flex>
				<Text>Price inclusive of GST. Free Delivery.</Text>
				<Text>Usually delivered in 2-4 days</Text>
			</Box>
		</SimpleGrid>
	);
};

export default ProductCard;
