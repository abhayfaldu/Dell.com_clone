import { Box, Flex, Heading, SimpleGrid, Skeleton } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Product/action";
import ProductCard from "./ProductCard";

const ProductList = () => {
	const dispatch = useDispatch();
	const { products, isLoading } = useSelector(store => store.ProductReducer);

	useEffect(() => {
		dispatch(getProducts());
	}, []);

	// style objects
	const filterBoxStyle = {
		backgroundColor: "lightgray",
		padding: "8px 8px 50px",
		marginBottom: "10px",
	};

	return (
		<Flex
			m={"auto"}
			p={3}
			flexDir={"column"}
			w={["100%", "100%", "100%", "100%", "100%", "1645px"]}
			border={"2px solid red"}
		>
			{/* Page heading */}
			<Heading my={5}>Inspiron Laptops & 2-in-1 PCs</Heading>

			{/* Page content */}
			<Flex gap={6} textAlign="left">
				{/* Filter section */}
				<Box flex={1} display={["none", "none", "none", "block", "block"]}>
					<Box style={filterBoxStyle}>filter content</Box>
					<Box style={filterBoxStyle}>filter content</Box>
					<Box style={filterBoxStyle}>filter content</Box>
					<Box style={filterBoxStyle}>filter content</Box>
					<Box style={filterBoxStyle}>filter content</Box>
					<Box style={filterBoxStyle}>filter content</Box>
				</Box>

				{/* Product list section */}
				<Flex flexDir={"column"} flex={5} w="full" gap={3}>
					{/* Pagination info and sort bar */}
					<Box py={3} border="1px solid lightgray">
						sort and pagination info
					</Box>
					{isLoading ? (
						<>
							<Skeleton h={"20rem"} w="full"></Skeleton>
							<Skeleton h={"20rem"} w="full"></Skeleton>
							<Skeleton h={"20rem"} w="full"></Skeleton>
							<Skeleton h={"20rem"} w="full"></Skeleton>
						</>
					) : (
						<SimpleGrid gap={4}>
							{products.length &&
								products.map((product, i) => {
									return (
										<ProductCard
											index={i}
											title={product.title}
											rating={product.rating}
											number_of_reviews={product.number_of_reviews}
											processor={product.processor}
											OS={product.OS}
											graphics_card={product.graphics_card}
											memory={product.memory}
											storage={product.storage}
											display={product.display}
											original_price={product.original_price}
											discounted_price={product.discounted_price}
											image_url={product.image_url}
										/>
									);
								})}
						</SimpleGrid>
					)}
				</Flex>
			</Flex>
		</Flex>
	);
};

export default ProductList;
