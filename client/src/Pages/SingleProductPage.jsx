import {
	Box,
	Button,
	Flex,
	Heading,
	Image,
	List,
	ListItem,
	SimpleGrid,
	Stack,
	StackDivider,
	Text,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdLocalShipping } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import Carousel from "../Components/Carousel";
import { addToCart } from "../Redux/Cart/action";

export default function SingleProductPage() {
	const dispatch = useDispatch();
	const [data, setData] = useState({});
	const [loader, setLoader] = useState(false);
	const [image, setImage] = useState("");
	const [CarouselImage, setCarouselImage] = useState([]);
	const toast = useToast();
	const { id } = useParams();

	const getSingleProduct = async () => {
		setLoader(true);
		try {
			const data = await axios.get(
				`${process.env.REACT_APP_SERVER_URL}/products/${id}`
			);
			setLoader(false);
			setData(data.data.product);
			setImage(data.data.product.image_url[0]);
			setCarouselImage(data.data.product.image_url);
		} catch (error) {
			setLoader(false);
			console.log(error);
		}
	};

	const getToast = (success, msg) => {
		toast({
			title: "Cart Status",
			description: msg,
			status: success,
			duration: 3000,
			isClosable: true,
		});
	};

	const handleCart = () => {
		dispatch(
			addToCart(
				data.title,
				data.original_price,
				data.discounted_price,
				image,
				getToast
			)
		);
	};

	useEffect(() => {
		getSingleProduct();
	}, [id]);

	return loader ? (
		<h1>Loading...</h1>
	) : (
		data && (
			<Box w={"80%"} m={"auto"}>
				<SimpleGrid
					columns={{ base: 1, lg: 2 }}
					spacing={{ base: 8, md: 10 }}
					py={{ base: 18, md: 24 }}
				>
					<Stack>
						<Flex>
							<Box as={"header"} textAlign={"left"}>
								<Heading
									lineHeight={1.1}
									fontWeight={500}
									fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
								>
									{data.title}
								</Heading>
								<Flex
									fontWeight={500}
									fontSize={"2xl"}
									align={"center"}
									gap={2}
									mt={2}
								>
									<StarRatings
										rating={data.rating}
										starRatedColor="#0076ce"
										numberOfStars={5}
										name="rating"
										starDimension="20px"
										starSpacing="1px"
									/>
									<Text mt={"5px"}>{data.rating}</Text>
									<Text mt={"5px"} color={"customGray"}>
										({data.number_of_reviews})
									</Text>
								</Flex>
							</Box>
						</Flex>
						<Flex>
							<Image
								rounded={"md"}
								objectFit={"contain"}
								alt={"product image"}
								src={image}
								fit={"cover"}
								align={"center"}
								m={"auto"}
								w={"80%"}
								h={{ base: "100%", sm: "400px", lg: "500px" }}
							/>
						</Flex>
						<Flex alignItems="center" justifyContent="center">
							<Carousel data={CarouselImage} />
						</Flex>
						<Flex>
							Original Price | <Text as="s">₹ {data.original_price}</Text>
						</Flex>
						<Flex>
							<Box as={"header"} textAlign={"left"}>
								<Heading
									lineHeight={1.1}
									fontWeight={500}
									fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
								>
									₹ {data.discounted_price}
								</Heading>
								<Flex>Price inclusive of GST. Free Delivery.</Flex>
							</Box>
						</Flex>
						<Flex>
							<Text fontWeight={500} fontSize={"xl"} color={"blue"}>
								Financing
							</Text>
						</Flex>
						<Flex>EMI starts from ₹ 24,165.83 /month</Flex>
						<Button
							style={{ marginTop: "1rem", marginBottom: "1rem" }}
							onClick={handleCart}
							rounded={"md"}
							w={"full"}
							size={"lg"}
							py={"7"}
							bg={"gray.900"}
							color={"white"}
							textTransform={"uppercase"}
							_hover={{
								transform: "translateY(2px)",
								boxShadow: "lg",
							}}
						>
							Add to cart
						</Button>
						<Flex align={"center"} gap={2}>
							<MdLocalShipping />
							<Text>2-3 business days delivery</Text>
						</Flex>
						<Flex>
							<Text
								fontWeight={500}
								fontSize={"xl"}
								color={"blue"}
								textAlign={"left"}
							>
								Click "Buy Now" to shop this product on LAP-DEN.com
							</Text>
						</Flex>
					</Stack>
					<Stack spacing={{ base: 6, md: 10 }}>
						<Stack
							spacing={{ base: 4, sm: 6 }}
							direction={"column"}
							divider={<StackDivider borderColor={"gray.200"} />}
						>
							<Box>
								<Text
									align={"start"}
									fontSize={{ base: "16px", lg: "18px" }}
									color={"blue.500"}
									fontWeight={"500"}
									textTransform={"uppercase"}
									mb={"4"}
								>
									Processor
								</Text>
								<Text
									border={"1px solid blue"}
									bg={"blue.100"}
									padding={"10px"}
									textAlign="left"
									rounded={"md"}
								>
									{data.processor}
								</Text>
							</Box>
							<Box>
								<Text
									align={"start"}
									fontSize={{ base: "16px", lg: "18px" }}
									color={"blue.500"}
									fontWeight={"500"}
									textTransform={"uppercase"}
									mb={"4"}
								>
									Operating System
								</Text>
								<Text
									border={"1px solid blue"}
									bg={"blue.100"}
									padding={"10px"}
									textAlign="left"
									rounded={"md"}
								>
									{data.OS}
								</Text>
							</Box>
							<Box>
								<Text
									align={"start"}
									fontSize={{ base: "16px", lg: "18px" }}
									color={"blue.500"}
									fontWeight={"500"}
									textTransform={"uppercase"}
									mb={"4"}
								>
									Graphics Card
								</Text>
								<Text
									border={"1px solid blue"}
									bg={"blue.100"}
									padding={"10px"}
									textAlign="left"
									rounded={"md"}
								>
									{data.graphics_card}
								</Text>
							</Box>
							<Box>
								<Text
									align={"start"}
									fontSize={{ base: "16px", lg: "18px" }}
									color={"blue.500"}
									fontWeight={"500"}
									textTransform={"uppercase"}
									mb={"4"}
								>
									Memory
								</Text>
								<Text
									border={"1px solid blue"}
									bg={"blue.100"}
									padding={"10px"}
									textAlign="left"
									rounded={"md"}
								>
									{data.memory}
								</Text>
							</Box>
							<Box>
								<Text
									align={"start"}
									fontSize={{ base: "16px", lg: "18px" }}
									color={"blue.500"}
									fontWeight={"500"}
									textTransform={"uppercase"}
									mb={"4"}
								>
									Hard Drive
								</Text>
								<Text
									border={"1px solid blue"}
									bg={"blue.100"}
									padding={"10px"}
									textAlign="left"
									rounded={"md"}
								>
									{data.storage}
								</Text>
							</Box>
							<Box>
								<Text
									align={"start"}
									fontSize={{ base: "16px", lg: "18px" }}
									color={"blue.500"}
									fontWeight={"500"}
									textTransform={"uppercase"}
									mb={"4"}
								>
									Display
								</Text>
								<Text
									border={"1px solid blue"}
									bg={"blue.100"}
									padding={"10px"}
									textAlign="left"
									rounded={"md"}
								>
									{data.display}
								</Text>
							</Box>
							<Box>
								<Text
									align={"start"}
									fontSize={{ base: "16px", lg: "18px" }}
									color={"yellow.500"}
									fontWeight={"500"}
									textTransform={"uppercase"}
									mb={"4"}
								>
									Tech Specs
								</Text>

								<List spacing={2} align={"start"}>
									<ListItem>
										<Text as={"span"} fontWeight={"bold"}>
											Device:
										</Text>{" "}
										{data.title}
									</ListItem>
									<ListItem>
										<Text as={"span"} fontWeight={"bold"}>
											Rating:
										</Text>{" "}
										{data.rating}
									</ListItem>
									<ListItem>
										<Text as={"span"} fontWeight={"bold"}>
											No. Of Reviews:
										</Text>{" "}
										{data.number_of_reviews}
									</ListItem>
									<ListItem>
										<Text as={"span"} fontWeight={"bold"}>
											Processor:
										</Text>{" "}
										{data.processor}
									</ListItem>
									<ListItem>
										<Text as={"span"} fontWeight={"bold"}>
											Original Price:
										</Text>{" "}
										{data.original_price}
									</ListItem>
									<ListItem>
										<Text as={"span"} fontWeight={"bold"}>
											Discounted Price:
										</Text>{" "}
										{data.discounted_price}
									</ListItem>
									<ListItem>
										<Text as={"span"} fontWeight={"bold"}>
											Display:
										</Text>{" "}
										{data.display}{" "}
									</ListItem>
									<ListItem>
										<Text as={"span"} fontWeight={"bold"}>
											Storage:
										</Text>{" "}
										{data.storage}{" "}
									</ListItem>
									<ListItem>
										<Text as={"span"} fontWeight={"bold"}>
											Graphics Card:
										</Text>{" "}
										{data.graphics_card}{" "}
									</ListItem>
									<ListItem>
										<Text as={"span"} fontWeight={"bold"}>
											OS:
										</Text>{" "}
										{data.OS}{" "}
									</ListItem>
								</List>
							</Box>
						</Stack>
					</Stack>
				</SimpleGrid>
			</Box>
		)
	);
}
