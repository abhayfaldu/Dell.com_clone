import {
	Box,
	Button,
	Center,
	Flex,
	HStack,
	Heading,
	Image,
	Link,
	Skeleton,
	Stack,
	useColorModeValue as mode,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CartItem } from "../Components/Cart/CartItem";
import { CartOrderSummary } from "../Components/Cart/CartOrderSummary";
import { clearAllProducts, getProducts } from "../Redux/Cart/action";
import empty from "../Utils/empty.png";

const Cart = () => {
	const dispatch = useDispatch();
	const { products, isLoading } = useSelector(store => store.CartReducer);
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getProducts);
	}, []);

	const handleClear = () => {
		dispatch(clearAllProducts()).then(res => {
			dispatch(getProducts);
		});
	};

	return (
		<Box
			maxW={{
				base: "3xl",
				lg: "7xl",
			}}
			mx="auto"
			px={{
				base: "4",
				md: "8",
				lg: "12",
			}}
			py={{
				base: "6",
				md: "8",
				lg: "12",
			}}
		>
			<Flex flexDir="column" gap={8}>
				<Heading fontSize="2xl" fontWeight="extrabold">
					Shopping Cart ({products.length} items)
				</Heading>
				<Stack
					direction={{
						base: "column",
						lg: "row",
					}}
					align={{
						lg: "flex-start",
					}}
					spacing={{
						base: "8",
						md: "16",
					}}
				>
					<Stack
						spacing={{
							base: "8",
							md: "10",
						}}
						flex="2"
					>
						{isLoading ? (
							<Flex
								flexDir={"column"}
								gap={4}
							>
								<Skeleton w='full' h='150px'></Skeleton>
								<Skeleton w='full' h='150px'></Skeleton>
								<Skeleton w='full' h='150px'></Skeleton>
							</Flex>
						) : products.length <= 0 ? (
							<Center>
								<Image
									src={empty}
									alt="emptycart"
									m={"auto"}
									w={250}
									mt={"70px"}
								/>
							</Center>
						) : (
							<>
								<Stack
									spacing="3"
									overflowY={"scroll"}
									h={"425px"}
									boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
									rounded={"md"}
									p={4}
								>
									{products.map(item => (
										<CartItem key={item._id} {...item} />
									))}
								</Stack>
								<Button colorScheme="red" onClick={() => handleClear()}>
									Clear All
								</Button>
							</>
						)}
					</Stack>

					<Flex direction="column" align="center" flex="1">
						<CartOrderSummary />

						<HStack mt="6" fontWeight="semibold">
							<p>or</p>
							<Link
								onClick={() => navigate("/")}
								color={mode("blue.500", "blue.200")}
							>
								Continue shopping
							</Link>
						</HStack>
					</Flex>
				</Stack>
			</Flex>
		</Box>
	);
};

export default Cart;
