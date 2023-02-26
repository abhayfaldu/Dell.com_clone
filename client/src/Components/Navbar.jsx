import {
	ChevronDownIcon,
	ChevronRightIcon,
	CloseIcon,
	HamburgerIcon,
} from "@chakra-ui/icons";
import {
	Box,
	Button,
	Collapse,
	Flex,
	Icon,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
	Menu,
	MenuButton,
	Center,
	MenuItem,
	MenuList,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Stack,
	Text,
	useColorModeValue,
	useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";

import { Link as Routerlink } from "react-router-dom";

import {
	Link,
	useLocation,
	useNavigate,
	useSearchParams,
} from "react-router-dom";
import logo from "../Utils/logo.png";
import "./Navbar.modules.css";

export default function Navbar() {
	const [products, setProducts] = useState([]);

	const location = useLocation();
	const [searchParams, setSearchParams] = useSearchParams();
	const { isOpen, onToggle } = useDisclosure();
	const navigate = useNavigate();
	const token = localStorage.getItem("token");

	const name = JSON.parse(localStorage.getItem("firstName"));
	const role = JSON.parse(localStorage.getItem("role"));
	const dispatch = useDispatch();

	const handleNavigate = () => {
		navigate("/login");
	};

	const handleChpassword = () => {
		navigate("/changepassword");
	};

	const handleLogout = () => {
		localStorage.clear();
		navigate("/");
	};
	
	const handleCart = () => {
		navigate("/cart");
	};



	const [keyword, setKeyword] = useState("");
	const [isInputFocused, setIsInputFocused] = useState(false);

	const handleInputFocus = () => {
		setIsInputFocused(true);
	};

	const handleInputBlur = () => {
		setIsInputFocused(false);
	};

	const renderSuggestions = () => {
		if (isInputFocused) {
			return (
				<Flex
					flexDir={"column"}
					border="1px solid lightgray"
					position="relative"
					bgColor={"#fff"}
					shadow={"lg"}
					borderRadius="8px"
					mt={"8px"}
					textAlign="left"
				>
					{products.map(product => (
						<Text
							onClick={() => navigate(`/products/${product._id}`)}
							p={2}
							curser={"pointer"}
						>
							{product.title}
						</Text>
					))}
				</Flex>
			);
		}
		return null;
	};

	

	const getSearchResults = params => {
		axios(`${process.env.REACT_APP_SERVER_URL}/products/all`, params)
			.then(res => {
				console.log("res.data", res.data.products);
				setProducts(res.data.products);
			})
			.catch(err =>
				console.log("something went wrong in getting search results", err)
			);
	};

	

	useEffect(() => {
		const params = {
			// 	category,
			// 	memory,
			// 	storage,
		};
		if (keyword !== "") params.keyword = keyword;
		// if (minPrice) params["discounted_price[gte]"] = minPrice;
		// if (maxPrice) params["discounted_price[lte]"] = maxPrice;
		// processor && (params.processor = processor);
		setSearchParams(params);
	}, [
		keyword,
		// category, processor, memory, storage, isPriceFilterApplied
	]);

	useEffect(() => {
		// const processor = searchParams.get("processor");
		// console.log("processor:", processor);
		// const discounted_price_lte = searchParams.get("discounted_price[lte]");
		// const discounted_price_gte = searchParams.get("discounted_price[gte]");
		const keyword = searchParams.get("keyword");
		console.log("keyword:", keyword);
		let paramObj = {
			params: {
				// category: searchParams.getAll("category"),
				// memory: searchParams.getAll("memory"),
				// storage: searchParams.getAll("storage"),
				// "discounted_price[lte]": discounted_price_lte,
				// "discounted_price[gte]": discounted_price_gte,
			},
		};
		if (keyword !== "") {
			paramObj.params.keyword = keyword;
		}
		// if (processor) {
		// 	paramObj.params.processor = process	or;
		// }
		if (keyword !== "") {
			getSearchResults(paramObj);
		}
	}, [location.search]);

	return (
		<>
			<Box>
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
				>
					<Flex
						flex={{ base: 1, md: "auto" }}
						ml={{ base: -2 }}
						display={{ base: "flex", md: "none" }}
					>
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
					{/* <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }} border={"1px solid red"} >
					<Box><Routerlink to={"/"}><div className="laplogo"><img src={logo} alt="" srcset="" width={"35%"} /></div></Routerlink></Box>
						
								<Box justify={{ base: "center", md: "start" }}><InputGroup border={"1px solid red"} width={"100%"} >
								<InputLeftElement pointerEvents="none">
									<AiOutlineSearch />
								</InputLeftElement>
								<Input type="tel" placeholder="Search LAP-DEN"  />
							</InputGroup></Box>
					</Flex> */}
					<Flex
						color="white"
						flex={{ base: 1 }}
						justify={{ base: "center", md: "start" }}
					>
						<Center w="100px">
							<Box>
								<Routerlink to={"/"}>
									<div className="laplogo">
										<img src={logo} alt="" srcset="" />
									</div>
								</Routerlink>
							</Box>
						</Center>
						<Center>
							<Box className="inputbtn">
								<InputGroup
								flexDir={"column"}
								w="350px"
								zIndex={1000}
								position="absolute"
								top={"13px"}
							>
								<InputLeftElement pointerEvents="none">
									<AiOutlineSearch />
								</InputLeftElement>
								<Input
									type="text"
									onFocus={handleInputFocus}
									onBlur={handleInputBlur}
									placeholder="Search LAP-DEN"
									value={keyword}
									onChange={e => setKeyword(e.target.value)}
								/>
								{renderSuggestions()}
							</InputGroup>
							</Box>
						</Center>
					</Flex>
					<Stack
						className="dropdown"
						flex={{ base: 1, md: 0 }}
						justify={"flex-end"}
						direction={"row"}
						spacing={6}
					>
						{token && name ? (
							<Menu zIndex={"100"}>
								<MenuButton>
									<Button
										as={"a"}
										rightIcon={<ChevronDownIcon />}
										fontSize={"sm"}
										fontWeight={400}
										variant={"link"}
										href={"#"}
									>
										<div className="logo">
											<MdOutlineAccountCircle />
										</div>
										<div className="text">{name}</div>
									</Button>
								</MenuButton>
								<MenuList>
									<MenuItem>
										<Button
											onClick={handleLogout}
											backgroundColor={"#0672cb"}
											width={"100%"}
											color={"white"}
										>
											Logout
										</Button>
									</MenuItem>
									<MenuItem>
										<Button onClick={handleChpassword} width={"100%"}>
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
										>
											Admin
										</Button>
									</MenuItem>
								</MenuList>
							</Menu>
						) : (
							<Menu zIndex={"100"}>
								<MenuButton>
									<Button
										as={"a"}
										rightIcon={<ChevronDownIcon />}
										fontSize={"sm"}
										fontWeight={400}
										variant={"link"}
										href={"#"}
									>
										<div className="logo">
											<MdOutlineAccountCircle />
										</div>
										<div className="text">Sign In</div>
									</Button>
								</MenuButton>
								<MenuList>
									<MenuItem>
										<Button
											backgroundColor={"#0672cb"}
											width={"100%"}
											color={"white"}
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
											onClick={handleNavigate}
											width={"100%"}
											backgroundColor={"#0672cb"}
											color={"white"}
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
						<Button
							as={"a"}
							fontSize={"sm"}
							fontWeight={400}
							variant={"link"}
							href={"#"}
						>
							<div className="logo">
								<RiCustomerService2Fill />
							</div>

							<div className="text">Contact Us</div>
						</Button>
						<Menu>
							<MenuButton>
								<Button
									as={"a"}
									fontSize={"sm"}
									fontWeight={400}
									variant={"link"}
									href={"#"}
								>
									<div className="logo">
										<TbWorld />
									</div>

									<div className="text">IN/EN</div>
								</Button>
							</MenuButton>
							<MenuList display={"grid"} gridTemplateColumns={"3"}>
								<MenuItem>
									<Text>Your cart is empty!</Text>
								</MenuItem>
								<MenuItem>
									<Text>Your cart is empty!</Text>
								</MenuItem>
								<MenuItem>
									<Text>Your cart is empty!</Text>
								</MenuItem>
							</MenuList>
						</Menu>
						<Menu>
							<MenuButton>
								<Button
									as={"a"}
									fontSize={"sm"}
									fontWeight={400}
									variant={"link"}
									href={"#"}
								>
									<div className="logo">
										<AiOutlineShoppingCart />
									</div>

									<div className="text">Cart</div>
								</Button>
							</MenuButton>
							<MenuList>
								<MenuItem>
									<Button
										onClick={handleCart}
										backgroundColor={"#0672cb"}
										width={"100%"}
										color={"white"}
									>
										Your LAP-DEN Carts
									</Button>
								</MenuItem>
								<MenuItem>
									<Text>Your cart is empty!</Text>
								</MenuItem>
								<MenuItem>
									<Text></Text>
								</MenuItem>
								<MenuItem>
									{token && name ? (
										<Text>
											<hr />
											Hello {name}
										</Text>
									) : (
										<Text>
											<hr />
											Sign-in to view Saved Carts
										</Text>
									)}
								</MenuItem>
							</MenuList>
						</Menu>
					</Stack>
				</Flex>

				<Collapse in={isOpen} animateOpacity>
					<MobileNav />
				</Collapse>
			</Box>
			<Box className={"tags"}>
				<Flex display={{ base: "none", md: "flex" }} ml={10}>
					<DesktopNav />
				</Flex>
			</Box>
		</>
	);
}

const DesktopNav = () => {
	const linkColor = useColorModeValue("gray.600", "gray.200");
	const linkHoverColor = useColorModeValue("gray.800", "white");
	const popoverContentBgColor = useColorModeValue("white", "gray.800");

	return (
		<Stack direction={"row"} spacing={4}>
			{NAV_ITEMS.map(navItem => (
				<Box key={navItem.label}>
					<Popover trigger={"hover"} placement={"bottom-start"}>
						<PopoverTrigger>
							<Link
								p={2}
								href={navItem.href ?? "#"}
								fontSize={"sm"}
								fontWeight={500}
								color={linkColor}
								_hover={{
									textDecoration: "none",
									color: linkHoverColor,
								}}
							>
								{navItem.label}
							</Link>
						</PopoverTrigger>

						{navItem.children && (
							<PopoverContent
								border={0}
								boxShadow={"xl"}
								bg={popoverContentBgColor}
								p={4}
								rounded={"xl"}
								minW={"sm"}
							>
								<Stack>
									{navItem.children.map(child => (
										<DesktopSubNav key={child.label} {...child} />
									))}
								</Stack>
							</PopoverContent>
						)}
					</Popover>
				</Box>
			))}
		</Stack>
	);
};

const DesktopSubNav = ({ label, href, subLabel }) => {
	return (
		<Link
			href={href}
			role={"group"}
			display={"block"}
			p={2}
			rounded={"md"}
			_hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
		>
			<Stack direction={"row"} align={"center"}>
				<Box>
					<Text
						transition={"all .3s ease"}
						_groupHover={{ color: "pink.400" }}
						fontWeight={500}
					>
						{label}
					</Text>
					<Text fontSize={"sm"}>{subLabel}</Text>
				</Box>
				<Flex
					transition={"all .3s ease"}
					transform={"translateX(-10px)"}
					opacity={0}
					_groupHover={{ opacity: "100%", transform: "translateX(0)" }}
					justify={"flex-end"}
					align={"center"}
					flex={1}
				>
					<Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
				</Flex>
			</Stack>
		</Link>
	);
};

const MobileNav = () => {
	return (
		<Stack
			bg={useColorModeValue("white", "gray.800")}
			p={4}
			display={{ md: "none" }}
		>
			{NAV_ITEMS.map(navItem => (
				<MobileNavItem key={navItem.label} {...navItem} />
			))}
		</Stack>
	);
};

const MobileNavItem = ({ label, children, href }) => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Stack spacing={4} onClick={children && onToggle}>
			<Flex
				py={2}
				as={Link}
				href={href ?? "#"}
				justify={"space-between"}
				align={"center"}
				_hover={{
					textDecoration: "none",
				}}
			>
				<Text
					fontWeight={600}
					color={useColorModeValue("gray.600", "gray.200")}
				>
					{label}
				</Text>
				{children && (
					<Icon
						as={ChevronDownIcon}
						transition={"all .25s ease-in-out"}
						transform={isOpen ? "rotate(180deg)" : ""}
						w={6}
						h={6}
					/>
				)}
			</Flex>

			<Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
				<Stack
					mt={2}
					pl={4}
					borderLeft={1}
					borderStyle={"solid"}
					borderColor={useColorModeValue("gray.200", "gray.700")}
					align={"start"}
				>
					{children &&
						children.map(child => (
							<Link key={child.label} py={2} href={child.href}>
								{child.label}
							</Link>
						))}
				</Stack>
			</Collapse>
		</Stack>
	);
};

const NAV_ITEMS = [
	{
		label: "APEX",
		children: [
			{
				label: "View All APEX",
			},
			{
				label: "Compute & API",
			},
			{
				label: "Storage",
			},
			{
				label: "Cyber and Data Protection",
			},
			{
				label: "Create a Custom Solution",
			},
			{
				label: "Resources",
			},
		],
	},
	{
		label: "Products",
		children: [
			{
				label: "Laptops",

				href: "/products",
			},
			{
				label: "Desktops and All-in-One",
				href: "/products",
			},
			{
				label: "Gaming",
				href: "/products",
			},
			{
				label: "Workstations",
				href: "/products",
			},
			{
				label: "Thin Clients",
				href: "/products",
			},
			{
				label: "Server",
				href: "/products",
			},
			{
				label: "Data Storage",
				href: "/products",
			},
			{
				label: "Data Protection",
				href: "/products",
			},
			{
				label: "Networking",
				href: "/products",
			},
			{
				label: "Monitors",
				href: "/products",
			},
		],
	},
	{
		label: "Solutions",
		children: [
			{
				label: "View All Solutions",
			},
			{
				label: "Cloud Solutions",
			},
			{
				label: "DevOps Tools & Solutions",
			},
			{
				label: "Edge Solutions",
			},
			{
				label: "Industry Solutions",
			},
			{
				label: "Infrastructure Solutions",
			},
			{
				label: "Midmarket Solutions",
			},
			{
				label: "OEM Solutions",
			},
			{
				label: "Security Solutions",
			},
			{
				label: "Small Solutions",
			},
		],
	},
	{
		label: "Services",
		children: [
			{
				label: "View All Services",
			},
			{
				label: "Consulting Services",
			},
			{
				label: "Deployment Services",
			},
			{
				label: "Support Services",
			},
			{
				label: "Residency Services",
			},
			{
				label: "Education Services",
			},
		],
	},
	{
		label: "Support",
		children: [
			{
				label: "Support Home",
			},
			{
				label: "Support Library",
			},
			{
				label: "Support Services & Warranty",
			},
			{
				label: "Drivers & Downloads",
			},
			{
				label: "Manuals & Documentation",
			},
			{
				label: "Order Support",
			},
			{
				label: "Contact Support",
			},
			{
				label: "Community",
			},
		],
	},
	{
		label: "Deals",
		children: [
			{
				label: "Laptops Deals",
			},
			{
				label: "Desktops aDeals",
			},
			{
				label: "Gaming Deals",
			},
			{
				label: "Workstations Deals",
			},
			{
				label: "Clients Deals",
			},
			{
				label: "Server Deals",
			},
			{
				label: "Data Storage Deals",
			},
			{
				label: "Data Protection Deals",
			},
			{
				label: "Networking Deals",
			},
			{
				label: "Monitors Deals",
			},
		],
	},
	{
		label: "Find a Store",
		children: [
			{
				label: "Laptops",
			},
			{
				label: "Desktops and All-in-One",
			},
			{
				label: "Gaming",
			},
			{
				label: "Workstations",
			},
			{
				label: "Thin Clients",
			},
			{
				label: "Server",
			},
			{
				label: "Data Storage",
			},
			{
				label: "Data Protection",
			},
			{
				label: "Networking",
			},
			{
				label: "Monitors",
			},
		],
	},
	{
		label: "About Us",
		children: [
			{
				label: "What do we Do",
			},
			{
				label: "Who we are",
			},
			{
				label: "Newsroom",
			},
			{
				label: "Recycling",
			},
			{
				label: "Investors",
			},
			{
				label: "Server",
			},
		],
	},
];