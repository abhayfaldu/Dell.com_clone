import {
	Flex,
	Heading,
	Select,
	SimpleGrid,
	Skeleton,
	Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import FilterSection from "../Components/Product_list/FilterSection";
import ProductCard from "../Components/Product_list/ProductCard";
import { getProducts } from "../Redux/Product/action";

const ProductList = () => {
	const dispatch = useDispatch();
	const { products, isLoading } = useSelector(store => store.ProductReducer);
	const location = useLocation();
	const [searchParams] = useSearchParams();
	const [sortBy, setSortBy] = useState(localStorage.getItem("sortBy") || "");
	const [order, setOrder] = useState(localStorage.getItem("order") || "");

	const handleSelectChange = e => {
		switch (e.target.value) {
			case "priceHightToLow":
				setSortBy("price");
				setOrder("des");
				break;
			case "priceLowToHigh":
				setSortBy("price");
				setOrder("asc");
				break;
			case "avgCustomerReview":
				setSortBy("rating");
				setOrder("des");
				break;
			case "":
				setSortBy("");
				setOrder("");
				break;
			default:
				return;
		}
	};

	useEffect(() => {
		const processor = searchParams.get("processor");
		console.log("processor:", processor);
		const discounted_price_lte = searchParams.get(
			encodeURIComponent("discounted_price[lte]")
		);
		console.log("discounted_price_lte:", discounted_price_lte);
		const discounted_price_gte = searchParams.get(
			encodeURIComponent("discounted_price[gte]")
		);
		console.log("discounted_price_gte:", discounted_price_gte);
		let paramObj = {
			params: {
				category: searchParams.getAll("category"),
				memory: searchParams.getAll("memory"),
				storage: searchParams.getAll("storage"),
				"discounted_price[lte]": discounted_price_lte,
				"discounted_price[gte]": discounted_price_gte,
			},
		};
		if (processor) {
			paramObj.params.processor = processor;
		}
		dispatch(getProducts(paramObj));
	}, [location.search]);

	console.log("products:", products);

	if (sortBy !== "" && order !== "") {
		localStorage.setItem("sortBy", sortBy);
		localStorage.setItem("order", order);
		if (sortBy === "price" && order === "asc") {
			products.sort((a, b) => {
				return a.discounted_price > b.discounted_price
					? 1
					: a.discounted_price < b.discounted_price
					? -1
					: 0;
			});
		} else if (sortBy === "price" && order === "des") {
			products.sort((a, b) => {
				return a.discounted_price > b.discounted_price
					? -1
					: a.discounted_price < b.discounted_price
					? 1
					: 0;
			});
		} else if (sortBy === "rating") {
			products.sort((a, b) => {
				return a.rating < b.rating ? 1 : a.rating > b.rating ? -1 : 0;
			});
		}
	}
	console.log("products:", products);

	return (
		<Flex
			m={"auto"}
			p={3}
			flexDir={"column"}
			w={["100%", "100%", "100%", "100%", "100%", "1645px"]}
			borderTop={"1px solid lightgray"}
		>
			{/* Page heading */}
			<Heading mb={5}>Laptop and PCs</Heading>

			{/* Page content */}
			<Flex gap={6} textAlign="left">
				<FilterSection />

				{/* Product list section */}
				<Flex flexDir={"column"} flex={5} w="full" gap={3}>
					{/* Pagination info and sort bar */}
					<Flex justify={"flex-start"}>
						<Select
							size="md"
							icon={<BsFillCaretDownFill />}
							w="300px"
							onChange={handleSelectChange}
						>
							<option value="none">Sort by</option>
							<option
								value="priceLowToHigh"
								selected={sortBy === "price" && order === "asc"}
							>
								Price low to high
							</option>
							<option
								value="priceHightToLow"
								selected={sortBy === "price" && order === "des"}
							>
								Price hight to low
							</option>
							<option value="avgCustomerReview" selected={sortBy === "rating"}>
								Avg. customer review
							</option>
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
							{products.length <= 0 ? (
								<Flex align={"center"} justify="center" flexDir={"column"}>
									<Text fontSize={"10rem"}>😿</Text>
									<Heading align="center">
										<Text>No data found with this filters</Text>
									</Heading>
								</Flex>
							) : (
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
								})
							)}
						</SimpleGrid>
					)}
				</Flex>
			</Flex>
		</Flex>
	);
};

export default ProductList;
