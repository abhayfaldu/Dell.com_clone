import {
	Box,
	Flex,
	Text,
	IconButton,
	Button,
	Stack,
	Collapse,
	Icon,
	Link,
	Popover,
	PopoverTrigger,
	PopoverContent,
	useColorModeValue,
	useDisclosure,
	InputGroup,
	InputLeftElement,
	Input,
	MenuList,
	MenuItem,
	Menu,
	MenuButton,
} from "@chakra-ui/react";
import {
	HamburgerIcon,
	CloseIcon,
	ChevronDownIcon,
	ChevronRightIcon,
} from "@chakra-ui/icons";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import logo from "../Utils/logo.png";
import { MdOutlineAccountCircle } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import "./Navbar.modules.css";
import { useEffect } from "react";
import { getProducts } from "../Redux/Product/action";
import { useDispatch, useSelector } from "react-redux";
import {Link as Routerlink} from "react-router-dom"

export default function Navbar() {
	const { products, isLoading } = useSelector(store => store.ProductReducer);
	const location = useLocation();
	const [searchParams] = useSearchParams();
	const { isOpen, onToggle } = useDisclosure();
	const navigate = useNavigate();
	const token=localStorage.getItem("token");
	const name=JSON.parse(localStorage.getItem("firstName"));
	const dispatch = useDispatch();
	const handleNavigate=()=>{
		if(token){
			navigate("/login")
		}else{
			navigate("/register")
		}
	}
	const handleChpassword=()=>{
		navigate("/changepassword")
	}

	
	const handleLogout=()=>{
		localStorage.clear();
		navigate("/")
	}
	const handleCart=()=>{
		navigate("/cart")
	}



	
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
	console.log(products)
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
					<Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }} width={"50%"}>
						<Routerlink to={"/"}><div className="laplogo"><img src={logo} alt="" srcset="" width={"35%"} /></div></Routerlink>
						{/* <Flex display={{ base: "none", md: "flex" }} ml={10}  width={"500px"}> */}
							<InputGroup>
								<InputLeftElement pointerEvents="none">
									<AiOutlineSearch />
								</InputLeftElement>
								<Input type="tel" placeholder="Search LAP-DEN"  />
							</InputGroup>
						{/* </Flex> */}
					</Flex>
					<Stack
					className="dropdown"
						flex={{ base: 1, md: 0 }}
						justify={"flex-end"}
						direction={"row"}
						spacing={6}
					>
						{token && name ?(<Menu>
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
									<Button onClick={handleChpassword} width={"100%"}>Reset Password</Button>
								</MenuItem>
							</MenuList>
						</Menu>):(<Menu>
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
									<Button width={"100%"}>Create an Account</Button>
								</MenuItem>
								<MenuItem>
									<Button width={"100%"}> Premier Sign In</Button>
								</MenuItem>
								<MenuItem>
									<Button width={"100%"}>Partner Program Sign In</Button>
								</MenuItem>
							</MenuList>
						</Menu>)}
						<Button
							as={"a"}
							fontSize={"sm"}
							fontWeight={400}
							variant={"link"}
							href={"#"}
						>
							<div className="logo">
								<RiCustomerService2Fill  />
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
									{token && name ?(<Text>
										<hr />
										Hello {name}
									</Text>):(<Text>
										<hr />
										Sign-in to view Saved Carts
									</Text>)}
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
			{NAV_ITEMS.map((navItem) => (
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
									{navItem.children.map((child) => (
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
			{NAV_ITEMS.map((navItem) => (
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
						children.map((child) => (
							<Link key={child.label} py={2} href={child.href}>
								{child.label}
							</Link>
						))}
				</Stack>
			</Collapse>
		</Stack>
	);
};



const NAV_ITEMS  = [
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
