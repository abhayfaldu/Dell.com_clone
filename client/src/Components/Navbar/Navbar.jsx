import {
	ChevronDownIcon,
	CloseIcon,
	HamburgerIcon,
} from "@chakra-ui/icons";
import {
	Box,
	Button,
	Collapse,
	Flex,
	IconButton,
	Img,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	Tooltip,
	useColorModeValue,
	useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Utils/logo.png";
import "./Navbar.modules.css";
import Search from "./Search";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

export default function Navbar() {
	const { isOpen, onToggle } = useDisclosure();
	const navigate = useNavigate();
	const token = localStorage.getItem("token");
	const name = JSON.parse(localStorage.getItem("firstName"));
	const role = JSON.parse(localStorage.getItem("role"));
	const [cartItemCount, setCartItemCount] = useState(0);

	const handleLogout = () => {
		localStorage.clear();
		navigate("/");
	};

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_SERVER_URL}/cart/singlecart`, {
				headers: {
					Authorization: localStorage.getItem("token"),
				},
			})
			.then(res => {
				setCartItemCount(res.data.userCart.length);
			})
			.catch(err => {
				console.log("something went wrong in getting products:", err);
			});
	}, []);

	return (
		<>
			<Box
				top={0}
				left={0}
				zIndex={1100}
				position={[ "sticky", "sticky", "static" ]}
			>
				{/* main nav */}
				<Flex
					bg={useColorModeValue("white", "gray.800")}
					color={useColorModeValue("gray.600", "white")}
					minH={"60px"}
					py={{ base: 2 }}
					px={{ base: 4 }}
					borderBottom={1}
					borderStyle={"solid"}
					borderColor={useColorModeValue("gray.200", "gray.900")}
					align={"center"}
					justify={"space-between"}
				>
					{/* Menu Icon for small screen */}
					<Flex ml={{ base: -2 }} display={{ base: "flex", md: "none" }}>
						<IconButton
							onClick={onToggle}
							icon={
								isOpen ? (
									<CloseIcon w={3} h={3} />
								) : (
									<HamburgerIcon w={5} h={5} />
								)
							}
							variant={"ghost"}
							aria-label={"Toggle Navigation"}
						/>
					</Flex>

					{/* logo */}
					<Flex
						minW="100px"
						maxW="130px"
						display={{ base: "none", md: "flex" }}
					>
						<Link to={"/"}>
							<Img
								src={logo}
								alt="logo"
								display={["none", "none", "block"]}
								translate={"transform: scale(1.2)"}
							/>
						</Link>
					</Flex>

					{/* search */}
					<Flex
						position={"relative"}
						w={"800px"}
						align="center"
						display={{ base: "none", md: "none", lg: "flex" }}
					>
						<Search />
					</Flex>

					{/* main nav items */}
					<Flex className="dropdown" align="center" gap={4}>
						{token && name ? (
							<Menu zIndex={"100"}>
								<MenuButton>
									<Flex align={"center"} gap={2}>
										<MdOutlineAccountCircle fontSize={"18px"} />
										<Text fontSize={"16px"}>{name}</Text>
										<ChevronDownIcon
											display={["none", "block", "block", "block"]}
										/>
									</Flex>
								</MenuButton>
								<MenuList zIndex={102}>
									<MenuItem>
										<Button
											onClick={handleLogout}
											backgroundColor={"#0672cb"}
											width={"100%"}
											color={"white"}
											_hover={{
												backgroundColor: "#0076cecc",
											}}
										>
											Logout
										</Button>
									</MenuItem>
									<MenuItem>
										<Button
											onClick={() => navigate("/changepassword")}
											width={"100%"}
										>
											Reset Password
										</Button>
									</MenuItem>
									<MenuItem
										display={
											role === "admin" && token && name ? "block" : "none"
										}
									>
										<Button
											onClick={() => navigate("/dashboard")}
											width={"100%"}
											_hover={{
												backgroundColor: "#0076cecc",
											}}
										>
											Admin
										</Button>
									</MenuItem>
								</MenuList>
							</Menu>
						) : (
							<Menu zIndex={"100"}>
								<MenuButton>
									<Flex align={"center"} gap={2}>
										<MdOutlineAccountCircle fontSize={"18px"} />
										<Text fontSize={"16px"} whiteSpace={"nowrap"}>
											Sign In
										</Text>
										<ChevronDownIcon
											display={["none", "block", "block", "block"]}
										/>
									</Flex>
								</MenuButton>
								<MenuList zIndex={102}>
									<MenuItem>
										<Button
											backgroundColor={"#0672cb"}
											width={"100%"}
											color={"white"}
											_hover={{
												backgroundColor: "#0076cecc",
											}}
										>
											Welcome to LAP-DEN
										</Button>
									</MenuItem>
									<MenuItem>
										<Text>My Account</Text>
									</MenuItem>
									<MenuItem>
										<Text>
											<li>Place orders quickly and easily</li>
										</Text>
									</MenuItem>
									<MenuItem>
										<Text>
											<li>View orders and track your shipping status</li>
										</Text>
									</MenuItem>
									<MenuItem>
										<Text>
											<li>Create and access a list of your products</li>
										</Text>
									</MenuItem>
									<MenuItem>
										<Button
											onClick={() => navigate("/login")}
											width={"100%"}
											backgroundColor={"#0672cb"}
											color={"white"}
											_hover={{
												backgroundColor: "#0076cecc",
											}}
										>
											Sign In
										</Button>
									</MenuItem>
									<MenuItem>
										<Button
											onClick={() => navigate("/register")}
											width={"100%"}
										>
											Create an Account
										</Button>
									</MenuItem>
									<MenuItem>
										<Button width={"100%"}> Premier Sign In</Button>
									</MenuItem>
									<MenuItem>
										<Button width={"100%"}>Partner Program Sign In</Button>
									</MenuItem>
								</MenuList>
							</Menu>
						)}
						<Menu>
							<MenuButton>
								<Flex align={"center"} gap={2}>
									<RiCustomerService2Fill fontSize={"18px"} />
									<Text
										fontSize={"16px"}
										display={["none", "block", "block", "block"]}
										whiteSpace="nowrap"
									>
										Contact Us
									</Text>
								</Flex>
							</MenuButton>
						</Menu>
						<Menu>
							<MenuButton>
								<Flex align={"center"} gap={2}>
									<TbWorld fontSize={"18px"} />
									<Text
										fontSize={"16px"}
										display={["none", "block", "block", "block"]}
									>
										IN/EN
									</Text>
								</Flex>
							</MenuButton>
							<MenuList
								display={"grid"}
								gridTemplateColumns={"3"}
								zIndex={1000}
								bgColor="white"
							>
								<MenuItem>
									<Text>English</Text>
								</MenuItem>
								<MenuItem>
									<Text>हिंदी</Text>
								</MenuItem>
								<MenuItem>
									<Text>தமிழ்</Text>
								</MenuItem>
							</MenuList>
						</Menu>
						<Menu>
							<Tooltip label="Go to Ca">
								<MenuButton onClick={() => navigate("/cart")}>
									<Flex align={"center"} gap={2}>
										<AiOutlineShoppingCart fontSize={"18px"} />
										<Text
											fontSize={"16px"}
											display={["none", "block", "block", "block"]}
											fontWeight={cartItemCount ? 700 : 500}
											color={cartItemCount ? "brand" : "black"}
										>
											{cartItemCount ? cartItemCount : "Cart"}
										</Text>
									</Flex>
								</MenuButton>
							</Tooltip>
						</Menu>
					</Flex>
				</Flex>

				{/* mobile nav */}
				<Collapse in={isOpen} animateOpacity>
					<MobileNav />
				</Collapse>
			</Box>

			{/* mobile search */}
			<Flex
				position={"relative"}
				left={"20px"}
				right={"30px"}
				align="center"
				justify={"center"}
				h={"60px"}
				display={{ base: "flex", md: "flex", lg: "none" }}
			>
				<Search />
			</Flex>

			{/* desktop nav */}
			<Box
				borderTop={1}
				borderStyle={"solid"}
				borderColor={useColorModeValue("gray.200", "gray.700")}
				display={{ base: "none", md: "flex" }}
				py={3}
				pl={5}
			>
				<DesktopNav />
			</Box>
		</>
	);
}

