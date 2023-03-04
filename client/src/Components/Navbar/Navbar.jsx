import {
	ChevronDownIcon,
	ChevronRightIcon,
	CloseIcon,
	HamburgerIcon,
} from "@chakra-ui/icons";
import {BiChevronDown} from 'react-icons/bi'
import {
	Box,
	Button,
	Collapse,
	Flex,
	Icon,
	IconButton,
	Img,
	Menu,
	MenuButton,
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
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Utils/logo.png";
import "./Navbar.modules.css";
import Search from "./Search";

export default function Navbar() {
	const { isOpen, onToggle } = useDisclosure();
	const navigate = useNavigate();
	const token = localStorage.getItem("token");
	const name = JSON.parse(localStorage.getItem("firstName"));
	const role = JSON.parse(localStorage.getItem("role"));

	const handleNavigate = () => navigate("/login");

	const handleChpassword = () => navigate("/changepassword");

	const handleLogout = () => {
		localStorage.clear();
		navigate("/");
	};

	const handleCart = () => navigate("/cart");

	return (
		<>
			<Box>
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
									<Flex align={"center"} gap={2}>
										<MdOutlineAccountCircle fontSize={"18px"} />
										<Text fontSize={"16px"}>Sign In</Text>
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
						<Menu>
							<MenuButton>
								<Flex align={"center"} gap={2}>
									<RiCustomerService2Fill fontSize={"18px"} />
									<Text
										fontSize={"16px"}
										display={[ "none", "block", "block", "block" ]}
										whiteSpace='nowrap'
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
									<Text>Hindi</Text>
								</MenuItem>
								<MenuItem>
									<Text>தமிழ்</Text>
								</MenuItem>
							</MenuList>
						</Menu>
						<Menu>
							<MenuButton>
								<Flex align={"center"} gap={2}>
									<AiOutlineShoppingCart fontSize={"18px"} />
									<Text
										fontSize={"16px"}
										display={["none", "block", "block", "block"]}
									>
										Cart
									</Text>
								</Flex>
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
								<hr />
								<MenuItem>
									{token && name ? (
										<Text>Hello {name}</Text>
									) : (
										<Text>Sign-in to view Saved Carts</Text>
									)}
								</MenuItem>
							</MenuList>
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

const DesktopNav = () => {
	const linkColor = useColorModeValue("gray.600", "gray.200");
	const linkHoverColor = useColorModeValue("gray.800", "white");
	const popoverContentBgColor = useColorModeValue("white", "gray.800");

	return (
		<Flex gap={4}>
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
								<Flex align={"center"} gap={"2px"}>
									<Text>{navItem.label}</Text>
									<BiChevronDown fontSize={'18px'} color={"#636363"} />
								</Flex>
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
		</Flex>
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
