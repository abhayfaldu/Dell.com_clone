import {
	Flex,
	Input,
	InputGroup,
	InputLeftElement,
	Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {
	Link,
	useLocation,
	useNavigate,
	useSearchParams,
} from "react-router-dom";
import "./Navbar.modules.css";
import { rupeeAmountToString } from "../Product_list/PriceDetails";
import "./Search.modules.css"

const Search = () => {
	const inputRef = useRef();
	const location = useLocation();
	const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate();
	const [products, setProducts] = useState([]);
	const initialKeyword = searchParams.get("keyword");
	const [keyword, setKeyword] = useState(initialKeyword || "");
	const [isInputFocused, setIsInputFocused] = useState(false);

	const handleInputChange = e => setKeyword(e.target.value);
	const handleInputFocus = () => setIsInputFocused(true);
	const handleInputBlur = () => setTimeout(() => setIsInputFocused(false), 200);

	const handleInputKeyPress = e => {
		if (e.key === "Enter") {
			navigate(`/products/?keyword=${keyword}`);
			setIsInputFocused(false);
		}
	};

	const renderSuggestions = () => {
		if (isInputFocused) {
			return (
				<Flex
					flexDir={'column'}
					className="search_dropdown"
				>
					{products.length <= 0 ? (
						<Text>No data found with this search</Text>
					) : (
						products.map((product, i) => (
							<Link
								to={`/products/${product._id}`}
								key={product._id}
								style={{
									padding: "8px 8px 8px 12px",
									borderBottom:
										i === products.length - 1 ? "none" : "1px solid lightgray",
									fontSize: "15px",
								}}
							>
								<Flex justify={"space-between"}>
									<Text>{product.title}</Text>
									<Text fontWeight={"bold"}>
										₹ {rupeeAmountToString(product.discounted_price)}
									</Text>
								</Flex>
							</Link>
						))
					)}
				</Flex>
			);
		}
		return null;
	};

	const getSearchResults = params => {
		axios(`${process.env.REACT_APP_SERVER_URL}/products/all`, params)
			.then(res => {
				setProducts(res.data.products);
			})
			.catch(err =>
				console.log(
					"something went wrong in getting search results from search",
					err
				)
			);
	};

	useEffect(() => {
		const params = {};
		if (keyword) params.keyword = keyword;
		setSearchParams(params);
	}, [keyword]);

	useEffect(() => {
		const keyword = searchParams.get("keyword");
		let paramObj = {
			params: {},
		};
		if (keyword) paramObj.params.keyword = keyword;
		getSearchResults(paramObj);
	}, [location.search]);

	return (
		<>
			<InputGroup
				flexDir={"column"}
				w={"96.5%"}
				m={"auto"}
				position="absolute"
				left={0}
				zIndex={3}
				color="black"
			>
				<InputLeftElement pointerEvents="none">
					<AiOutlineSearch />
				</InputLeftElement>
				<Input
					ref={inputRef}
					type="text"
					onFocus={handleInputFocus}
					onBlur={handleInputBlur}
					placeholder="Search LAP-DEN"
					value={keyword}
					onChange={handleInputChange}
					onKeyPress={handleInputKeyPress}
				/>
				{renderSuggestions()}
			</InputGroup>
		</>
	);
};

export default Search;
