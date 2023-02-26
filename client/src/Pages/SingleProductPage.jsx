import {
	Box,
	Container,
	Stack,
	Text,
	Image,
	Flex,
	Button,
	Heading,
	SimpleGrid,
	StackDivider,
	List,
	ListItem,
} from "@chakra-ui/react";

import { MdLocalShipping } from "react-icons/md";
import StarRatings from "react-star-ratings";
import Carousel from "../Components/Carousel";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../Redux/Cart/action";
import { useToast } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function SingleProductPage() {
	const dispatch = useDispatch();
	const [data, setData] = useState({});
	const [loader, setLoader] = useState(false);
	const [image, setImage] = useState("");
	const [CarouselImage, setCarouselImage] = useState([]);
	const toast = useToast();
	const { id } = useParams();
	console.log(id);
	const getSingleProduct = async () => {
		setLoader(true);
		try {
			const data = await axios.get(`http://localhost:8080/products/${id}`);
			setLoader(false);
			setData(data.data.product);
			setImage(data.data.product.image_url[0]);
			setCarouselImage(data.data.product.image_url);
			console.log(data.data.product);
		} catch (error) {
			setLoader(false);
			console.log(error);
		}
	};

	const getToast = (success, msg) => {
		console.log(success, msg);
		toast({
			title: "Cart Status",
			description: msg,
			status: success,
			duration: 3000,
			isClosable: true,
		});
	};

	const handleCart = (title, original_price, discounted_price, image_url) => {
		dispatch(
			addToCart(title, original_price, discounted_price, image_url, getToast)
		);
	};
	useEffect(() => {
		getSingleProduct();
	}, []);

	return loader ? (
		<h1>Loading...</h1>
	) : (
		data && (
			<Container maxW={"7xl"}>
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
								<Text fontWeight={500} fontSize={"2xl"}>
									Rating:{" "}
									<StarRatings
										rating={data.rating}
										starRatedColor="#0076ce"
										numberOfStars={5}
										name="rating"
										starDimension="20px"
										starSpacing="1px"
									/>
								</Text>
							</Box>
						</Flex>
						<Flex>
							<Image
								rounded={"md"}
								objectFit={"contain"}
								alt={"product image"}
								//src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_P-MTW3fKeEXRxuWkMwLQXFcSinhGYGTXQ&usqp=CAU"
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
						<Flex>
							<Button
								onClick={() => handleCart("Dell", 123, 100, "xyz")}
								rounded={"none"}
								w={"full"}
								mt={8}
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
						</Flex>
						<Flex>
							<Stack
								direction="row"
								alignItems="center"
								justifyContent={"center"}
							>
								<MdLocalShipping />
								<Text>2-3 business days delivery</Text>
							</Stack>
						</Flex>
						<Flex>
							<Stack
								direction="row"
								alignItems="center"
								justifyContent={"center"}
							>
								<Text fontWeight={500} fontSize={"xl"} color={"blue"}>
									Click "Buy Now" to shop this product on LAP-DEN.com
								</Text>
							</Stack>
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
									Processor | Which processor is right for you?
								</Text>
								<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
									<Text
										border={"1px solid blue"}
										bg={"blue.100"}
										padding={"10px"}
									>
										{data.processor}
									</Text>
								</SimpleGrid>
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
									Operating System | Which operating system is right for you?
								</Text>
								<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
									<Text
										border={"1px solid blue"}
										bg={"blue.100"}
										padding={"10px"}
									>
										{data.OS}
									</Text>
								</SimpleGrid>
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
									Graphics Card | Which graphics card is right for you?
								</Text>
								<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
									<Text
										border={"1px solid blue"}
										bg={"blue.100"}
										padding={"10px"}
									>
										{data.graphics_card}
									</Text>
								</SimpleGrid>
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
									Memory | How much memory is right for you?
								</Text>
								<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
									<Text
										border={"1px solid blue"}
										bg={"blue.100"}
										padding={"10px"}
									>
										{data.memory}
									</Text>
								</SimpleGrid>
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
									Hard Drive | How much storage is right for you?
								</Text>
								<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
									<Text
										border={"1px solid blue"}
										bg={"blue.100"}
										padding={"10px"}
									>
										{data.storage}
									</Text>
								</SimpleGrid>
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
									Display | Which display is right for you?
								</Text>
								<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
									<Text
										border={"1px solid blue"}
										bg={"blue.100"}
										padding={"10px"}
									>
										{data.display}
									</Text>
								</SimpleGrid>
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
											Title:
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
			</Container>
		)
	);
}
