import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";
import PriceDetails from "./PriceDetails";
import SpecsTable from "./SpecsTable";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";

const ProductCard = props => {
	const {
		id,
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
	} = props;

	return (
		// link to go to single product page
		<Link to={`/products/${id}`}>
			<Flex
				flexDir={["column", "row"]}
				shadow={"0 2px 2px #002A581a, 0 4px 4px #002A581a, 0 8px 8px #002A581a"}
				border={"1px solid #e1e1e1"}
				rounded={"md"}
				p={3}
			>
				{/* product image */}
				<Flex px={4} py={4} flex={1} align={"center"} justify={"center"}>
					<Img
						src={image_url[0]}
						alt="product_image"
						h={["130px", "auto"]}
						objectFit={"contain"}
					/>
				</Flex>

				{/* product details */}
				<Flex flexDir={"column"} px={4} gap={1} flex={1.4}>
					{/* title */}
					<Text color={"brand"} fontSize="20px" lineHeight={"28px"}>
						{title}
					</Text>

					{/* rating */}
					<Flex align={"center"}>
						<Flex fontSize={"24px"} color="brand" mr={2} align="center">
							<StarRatings
								rating={rating}
								starRatedColor="#0076ce"
								numberOfStars={5}
								name="rating"
								starDimension="20px"
								starSpacing="0px"
							/>
						</Flex>
						<Text fontSize={"0.9rem"}>{rating}&nbsp;</Text>
						<Text fontSize={"0.9rem"}>({number_of_reviews})</Text>
					</Flex>

					{/* small screen price details */}
					<Box
						display={["block", "block", "block", "block", "none"]}
						m={"-12px"}
						mt={1}
					>
						<PriceDetails
							original_price={original_price}
							discounted_price={discounted_price}
						/>
					</Box>

					{/* specs */}
					<Flex gap={2} flexDir="column">
						<Heading
							size={"md"}
							borderBottom={"1px solid lightgray"}
							pt={3}
							pb={1}
							mb={1}
						>
							Specs
						</Heading>
						<SpecsTable
							processor={processor}
							OS={OS}
							graphics_card={graphics_card}
							memory={memory}
							storage={storage}
							display={display}
						/>
					</Flex>
				</Flex>

				{/* price details */}
				<Box display={["none", "none", "none", "none", "block"]}>
					<PriceDetails
						original_price={original_price}
						discounted_price={discounted_price}
					/>
				</Box>
			</Flex>
		</Link>
	);
};

export default ProductCard;
