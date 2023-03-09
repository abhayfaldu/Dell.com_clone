import {
	Box,
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
import FilterDrawer from "../Components/Product_list/FilterDrawer";
import FilterSection from "../Components/Product_list/FilterSection";
import Pagination from "../Components/Product_list/Pagination";
import ProductCard from "../Components/Product_list/ProductCard";
import { getProducts } from "../Redux/Product/action";

const ProductList = () => {
	const dispatch = useDispatch();
	const { products, isLoading } = useSelector(store => store.ProductReducer);

	// to get everything after the `?` from url
	const location = useLocation();
	const [searchParams] = useSearchParams();
	const initialMemory = searchParams.getAll("memory");
	const [memory] = useState(initialMemory || []);
	const initialStorage = searchParams.getAll("storage");
	const [storage] = useState(initialStorage || []);
	const initialKeyword = searchParams.get("keyword");
	const [keyword] = useState(initialKeyword || "");
	const initialCategory = searchParams.getAll("category");
	const [category] = useState(initialCategory || []);
	const initialMinPrice = searchParams.get("discounted_price[gte]");
	const initialMaxPrice = searchParams.get("discounted_price[lte]");

	// pagination states
	const initialPage = searchParams.get("page");
	const [page, setPage] = useState(+initialPage || 1);
	const { sortAndOrder, setSortAndOrder } = useState("");

	// getting sort data in localStorage for using same sort on refresh
	const [sortBy, setSortBy] = useState(localStorage.getItem("sortBy") || "");
	const [order, setOrder] = useState(localStorage.getItem("order") || "");

	// prev page handler
	const handlePrev = () => {
		setPage(page => page - 1);
	};
	// next page handler
	const handleNext = () => {
		setPage(page => page + 1);
	};

	// sort select changes handler
	const handleSortChange = e => {
		setSortAndOrder(e.target.value);
	};

	// useEffect to set sortBy and order according to sortAndOrder state
	useEffect(() => {
		switch (sortAndOrder) {
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
	}, [sortAndOrder]);

	// useEffect to fetch data again whenever location.search changes
	useEffect(() => {
		// params object to data form the query params
		const paramObj = {
			params: {
				keyword,
				category,
				memory,
				storage,
				"discounted_price[lte]": initialMinPrice,
				"discounted_price[gte]": initialMaxPrice,
				page,
			},
		};

		// get processor form search params
		const processor = searchParams.get("processor");

		// if nothing passed in processor filter it will be empty string
		// and that's why it should not go in paramObj
		if (processor) paramObj.params.processor = processor;

		// dispatch getProducts function to get data with new filters
		dispatch(getProducts(paramObj));
	}, [location.search, page]);

	// data sorting management
	if (sortBy !== "" && order !== "") {
		// if sortBy and order is not empty then saving them in local storage to use on refresh
		localStorage.setItem("sortBy", sortBy);
		localStorage.setItem("order", order);

		// sorting data by according to sortBy and order
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
				{/* large screen filter */}
				<Box flex={1} display={["none", "none", "none", "block", "block"]}>
					<FilterSection />
				</Box>

				{/* Product list section */}
				<Flex flexDir={"column"} flex={5} w="full" gap={3}>
					{/* sort and small screen filter bar */}
					<Flex gap={4} flexDir={["column", "row", "row"]}>
						{/* sort select tag */}
						<Select
							flex={[1, 1, 1, 0.4, 0.3]}
							icon={<BsFillCaretDownFill />}
							onChange={handleSortChange}
							value={sortAndOrder}
						>
							<option value="">Sort by</option>
							<option value="priceLowToHigh">Price low to high</option>
							<option value="priceHightToLow">Price hight to low</option>
							<option value="avgCustomerReview">Avg. customer review</option>
						</Select>

						{/* small screen filter */}
						<Box display={["block", "block", "block", "none", "none"]} flex={1}>
							<FilterDrawer />
						</Box>
					</Flex>

					{/* products list */}
					{isLoading ? (
						<>
							<Flex flexDir={"column"} align="center" gap={4}>
								<Skeleton h={"20rem"} w="full" rounded={"md"}></Skeleton>
								<Skeleton h={"20rem"} w="full" rounded={"md"}></Skeleton>
								<Skeleton h={"20rem"} w="full" rounded={"md"}></Skeleton>
								<Skeleton h={"20rem"} w="full" rounded={"md"}></Skeleton>
								<Skeleton h={"3rem"} w="50%" rounded={"md"}></Skeleton>
							</Flex>
						</>
					) : (
						<>
							<SimpleGrid gap={4}>
								{/* if no data found after applying filters */}
								{products.length <= 0 ? (
									<Flex align={"center"} justify="center" flexDir={"column"}>
										<Text fontSize={"10rem"}>😿</Text>
										<Heading align="center">
											<Text>No data found</Text>
										</Heading>
									</Flex>
								) : (
									products.map(product => {
										return (
											// product card
											<ProductCard
												key={product._id}
												id={product._id}
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

							{/* pagination */}
							<Flex justify={"center"}>
								<Pagination
									page={page}
									limit={5}
									handleNext={handleNext}
									handlePrev={handlePrev}
								/>
							</Flex>
						</>
					)}
				</Flex>
			</Flex>
		</Flex>
	);
};

export default ProductList;
