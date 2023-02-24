import { Box, Flex, Heading, Select, SimpleGrid, Skeleton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScrollRestoration, useLocation, useSearchParams } from "react-router-dom";
import { getProducts } from "../../Redux/Product/action";
import FilterSection from "./FilterSection";
import ProductCard from "./ProductCard";

const ProductList = () => {
	const dispatch = useDispatch();
	const { products, isLoading } = useSelector(store => store.ProductReducer);
	console.log("products:", products);
	const location = useLocation();
	const [searchParams] = useSearchParams();
	const initialOrder = searchParams.getAll("order");
	const [order, setOrder] = useState(initialOrder[0] || "");

	useEffect(() => {
		const processor = searchParams.get("processor");
		let paramObj = {
			params: {
				category: searchParams.getAll("category"),
				memory: searchParams.getAll("memory"),
				storage: searchParams.getAll("storage"),
				processor,
			},
		};
		dispatch(getProducts(paramObj));
	}, [location.search]);
	console.log("location.search:", location.search);

	const handleSort = (e) => {
		setOrder(e.target.value)
	};

	useEffect(() => {
		dispatch(getProducts());
	}, []);

	return (
		<Flex
			m={"auto"}
			p={3}
			flexDir={"column"}
			w={["100%", "100%", "100%", "100%", "100%", "1645px"]}
		>
			{/* Page heading */}
			<Heading my={5}>Inspiron Laptops & 2-in-1 PCs</Heading>

			{/* Page content */}
			<Flex gap={6} textAlign="left">
				<FilterSection />

				{/* Product list section */}
				<Flex flexDir={"column"} flex={5} w="full" gap={3}>
					{/* Pagination info and sort bar */}
					<Flex py={3} border="1px solid lightgray" justify='flex-start'>
						<Select w={"300px"}>
							<option>hello</option>
							<option>world</option>
						</Select>
					</Flex>
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
											key={i}
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
