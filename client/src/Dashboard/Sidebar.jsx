import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
  AvatarBadge,
} from "@chakra-ui/react";
import {
  FiHome,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import { AiOutlineUsergroupAdd, AiOutlineFolderAdd } from "react-icons/ai";
import { MdOutlineStoreMallDirectory } from "react-icons/md";
import image from "../Utils/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import AdminImage from "./Utils/admin.png";

const LinkItems = [
  { name: "Home", icon: FiHome, path: "/dashboard" },
  { name: "Add Product", icon: AiOutlineFolderAdd, path: "/addproduct" },
  { name: "Store", icon: MdOutlineStoreMallDirectory, path: "/adminstore" },
  { name: "Customer", icon: AiOutlineUsergroupAdd, path: "/admincustomer" },
  { name: "Settings", icon: FiSettings, path: "/setting" },
];

export default function AdminSide() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box pos={"fixed"} top={0} right={0} left={0} zIndex={999}>
      <SidebarContent
        bg={"#1A2A47"}
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />

      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {LinkItems.map((link) => (
          <Link href={link.path}></Link>
        ))}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg="#1A2A47"
      color="white"
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Image
          src={image}
          alt="logo"
          width={"160px"}
          bg={"white"}
          rounded={"lg"}
        />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          color={"white"}
          item={link.path}
        >
          {link}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, item, ...rest }) => {
  return (
    <NavLink
      to={item}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "#152036",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children.name}
      </Flex>
    </NavLink>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const Navigate = useNavigate();
  const name = JSON.parse(localStorage.getItem("firstName"));
  const handleClick = () => {
    localStorage.clear();
    Navigate("/");
  };
  return (
    <Flex
      bg={"#1A2A47"}
      color="white"
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        {/* <Image width={"100px"} src={image} alt="logo" /> */}
      </Text>

      <HStack
        style={{ backgroundColor: "#1b2a47", color: "white" }}
        spacing={{ base: "0", md: "3" }}
        border={"2px solid lightgrey"}
        rounded={"lg"}
        px={3}
      >
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          _hover={{
            bg: "#152036",
            color: "white",
          }}
          icon={<FiBell />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar size={"sm"} src={AdminImage} mr={3}>
                  <AvatarBadge boxSize="1em" bg="green.500" />
                </Avatar>
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">{name}</Text>
                  <Text fontSize="xs" color="gray.300">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList bg={"#1b2a47"} borderColor={"white"} px={2}>
              <MenuItem
                bg={"#1b2a47"}
                _hover={{
                  bg: "#152036",
                  color: "white",
                }}
              >
                Profile
              </MenuItem>
              <MenuItem
                bg={"#1b2a47"}
                _hover={{
                  bg: "#152036",
                  color: "white",
                }}
              >
                Settings
              </MenuItem>
              <MenuDivider />
              <MenuItem
                bg={"#1b2a47"}
                _hover={{
                  bg: "#152036",
                  color: "white",
                }}
                onClick={handleClick}
              >
                Sign out
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
