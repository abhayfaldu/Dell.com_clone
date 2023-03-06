import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	SimpleGrid,
	Stack,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { BiCookie } from "react-icons/bi";
import HomeLeft from "../Components/Home/HomeLeft";
import HomeRight from "../Components/Home/HomeRight";
import HomepageCard from "../Components/Home/HomepageCard";
import Support from "../Components/Support";
import homeImage1 from "../Utils/homeImage1.png";
import homeImage2 from "../Utils/homeImage2.png";
import homeImage3 from "../Utils/homeImage3.png";
import homeImage4 from "../Utils/homeImage4.png";
import homeImage5 from "../Utils/homeImage5.png";
import homeImage6 from "../Utils/homeImage6.png";
import home_card_1_image from "../Utils/home_card_1_image.png";

const Homepage = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [scrollBehavior] = useState("inside");
	const btnRef = useRef(null);
	return (
		<Box>
			<HomeLeft
				title={"INSPIRON LAPTOPS"}
				head={"Versatile By Design"}
				body={"Get instant dsicounts up to  ₹2,000 on UPI & No Cost EMI."}
				img={homeImage1}
			/>
			<Flex
				maxW={"7xl"}
				p={4}
				m="auto"
				my="3rem"
				flexDir="column"
				gap={2}
				textAlign={["center", "center", "left"]}
			>
				<Text
					fontSize="3rem"
					fontWeight={300}
					color={"customGray"}
					textAlign={["center", "center", "left"]}
				>
					Welcome Back
				</Text>
				<SimpleGrid
					columns={[1, 1, 2, 3]}
					gap={4}
					w="full"
					minH="350px"
					m={"auto"}
				>
					<HomepageCard
						title={"Best Seller"}
						data={"Get our best laptops for less."}
						button={"Shop Now"}
						image={home_card_1_image}
						button_link="/products"
					/>
					<HomepageCard
						title={"Student Purchase Program"}
						data={"Get Special discounts under our Student Purchase program."}
						button={"Learn More"}
					/>
					<HomepageCard
						title={"Laptop Buying Guide"}
						data={
							"Looking to buy a laptop or desktop from Dell & don't know where to start? Don't worry because we are here to help you."
						}
						button={"Explore Now"}
					/>
				</SimpleGrid>
			</Flex>
			<HomeRight
				title={"XPS LAPTOPS"}
				head={"Stylish, Modern Laptops"}
				body={
					"Gorgeous displays & powerful features now with instant discounts up to ₹6,500 on Netbanking & more."
				}
				img={homeImage2}
			/>
			<HomeLeft
				title={"ALIENWARE 27 GAMING MONITOR"}
				head={"Outshine Everyone"}
				body={
					"Built-in bragging rights with premium performance, overclockable refresh rates up to 280Hz and more."
				}
				img={homeImage3}
			/>
			<Support />
			<HomeRight
				title={"INSPIRON DESKTOPS & ALL-IN-ONE PCS"}
				head={"Versatile By Design"}
				body={
					"The features you need with the flexibility you want. Get instant discounts on Net-banking & no cost EMI. *T&C apply."
				}
				img={homeImage4}
			/>
			<Container maxW={"7xl"}>
				<Stack
					align={"center"}
					spacing={{ base: 8, md: 10 }}
					direction={{ base: "column", md: "row" }}
				>
					<Stack
						align={"center"}
						spacing={{ base: 8, md: 10 }}
						py={{ base: 20, md: 28 }}
					>
						<Stack flex={1} spacing={{ base: 5, md: 10 }} align={"center"}>
							<Heading lineHeight={1.1} fontWeight={600}>
								<Text
									align={"left"}
									as={"span"}
									fontSize={{ base: "xl", sm: "xl", lg: "xl" }}
									position={"relative"}
									_after={{
										content: "''",
										width: "full",
										height: "30%",
										position: "absolute",
										bottom: 1,
										left: 0,
										zIndex: -1,
									}}
								>
									DEALS ON HOME COMPUTER
								</Text>
								<br />
								<Text
									as={"span"}
									fontSize={{ base: "4xl", sm: "4xl", lg: "4xl" }}
								>
									Designed To Impress
								</Text>
							</Heading>
							<Text color={"gray.500"}>
								Whether you're looking for a keyboard, mouse, docking station or
								something else, we've got you covered.
							</Text>
							<Stack width={"50%"} align={"center"}>
								<Button
									fontWeight={"normal"}
									variant={"link"}
									colorScheme={"blue"}
								>
									For Home
								</Button>
							</Stack>
						</Stack>
						<Flex
							flex={1}
							justify={"center"}
							align={"center"}
							position={"relative"}
							w={"full"}
						>
							<Box width={"full"} overflow={"hidden"}>
								<Image
									alt={"Hero Image"}
									fit={"cover"}
									align={"center"}
									w={"100%"}
									h={"100%"}
									src={homeImage5}
								/>
							</Box>
						</Flex>
					</Stack>
					<Stack
						align={"center"}
						spacing={{ base: 8, md: 10 }}
						py={{ base: 20, md: 28 }}
					>
						<Stack flex={1} spacing={{ base: 5, md: 10 }} align={"center"}>
							<Heading lineHeight={1.1} fontWeight={600}>
								<Text
									align={"left"}
									as={"span"}
									fontSize={{ base: "xl", sm: "xl", lg: "xl" }}
									position={"relative"}
									_after={{
										content: "''",
										width: "full",
										height: "30%",
										position: "absolute",
										bottom: 1,
										left: 0,
										zIndex: -1,
									}}
								>
									COMPUTER ELECTRONICS AND ACCESSORIES
								</Text>
								<br />
								<Text
									as={"span"}
									fontSize={{ base: "4xl", sm: "4xl", lg: "4xl" }}
								>
									Overprepared For Everything
								</Text>
							</Heading>
							<Text color={"gray.500"}>
								Whether you're looking for a keyboard, mouse, docking station or
								something else, we've got you covered.
							</Text>
							<Stack width={"50%"} align={"center"}>
								<Button
									fontWeight={"normal"}
									variant={"link"}
									colorScheme={"blue"}
									_hover={{textDecor:"none"}}
								>
									Learn More
								</Button>
							</Stack>
						</Stack>
						<Flex
							flex={1}
							justify={"center"}
							align={"center"}
							position={"relative"}
							w={"full"}
						>
							<Box width={"full"} overflow={"hidden"}>
								<Image
									alt={"Hero Image"}
									fit={"cover"}
									align={"center"}
									w={"100%"}
									h={"100%"}
									src={homeImage6}
								/>
							</Box>
						</Flex>
					</Stack>
				</Stack>
			</Container>
			<Box
				position="fixed"
				bottom="20px"
				left="20px"
				bgColor="white"
				p={2}
				border={"1px solid"}
				borderColor="gray.100"
				rounded="md"
				shadow="lg"
			>
				<BiCookie
					left={20}
					bottom={20}
					fontSize={"40px"}
					color={"blue"}
					mt={3}
					ref={btnRef}
					onClick={onOpen}
				/>
				<Modal
					onClose={onClose}
					finalFocusRef={btnRef}
					isOpen={isOpen}
					scrollBehavior={scrollBehavior}
				>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>LAP-DEN Cookie Preference</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<Text>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Consectetur velit mollitia sit adipisci doloremque at esse
								incidunt itaque alias natus in fuga eum dolor, saepe, reiciendis
								labore tempora ab iste! Quaerat id aliquid magnam ad quod,
								excepturi beatae veniam similique? Illo labore praesentium,
								voluptatem autem similique cum officia laboriosam impedit
								recusandae, accusantium aperiam. Sint, laudantium iste molestias
								omnis ratione ipsam. Natus, ut. Alias sit natus repellat
								mollitia ad ex vitae deleniti sequi? Similique, at aspernatur
								dolore, numquam autem aperiam sed minima accusamus iste
								assumenda quasi, repellat dignissimos. Doloribus, ipsum
								necessitatibus. Placeat, consequuntur tenetur dolorum sint ipsam
								nemo assumenda soluta iure optio eum consequatur omnis possimus
								deserunt recusandae? Exercitationem itaque quidem sit, alias,
								ipsum veniam odit facilis laboriosam asperiores quia
								consequuntur? Animi quam ratione delectus hic asperiores
								veritatis laborum, possimus quos enim, labore magni iste harum,
								eveniet a! Odio accusantium quis sapiente ipsam, ratione itaque
								officia ad quia facere commodi aspernatur. Recusandae
								repudiandae exercitationem illum laudantium possimus harum,
								culpa eaque voluptates facilis dolore placeat porro quam
								voluptas reprehenderit in sunt, fuga nam ea et. Perferendis
								distinctio beatae consequatur corrupti eligendi temporibus.
								Accusamus ratione quam quaerat aliquid magni corrupti illo sunt
								et quod, sapiente, repudiandae, beatae voluptatum. Architecto
								sint ducimus non praesentium blanditiis? Soluta, mollitia. Magni
								id perferendis assumenda. Consectetur, ratione perferendis. Ad
								non exercitationem aperiam odio maiores libero provident sunt
								magni nulla numquam consequatur corporis temporibus illo sit
								cumque iusto ducimus, vitae officiis rem repellat suscipit
								distinctio enim possimus. Et, accusamus. Dolores ea saepe
								expedita minus, doloremque maiores consequuntur facilis earum
								cupiditate, deserunt voluptatum ex soluta modi, aliquam adipisci
								quaerat. Autem quam minus commodi minima repellendus in
								exercitationem, laboriosam consequuntur deleniti? Illo, odit
								laborum. Voluptas, culpa. Quod neque tempora explicabo, aliquam
								blanditiis ullam quas omnis ipsam mollitia quae alias
								repudiandae voluptate minus porro dolorem. Explicabo iste nemo,
								ea in rem consequuntur! Exercitationem explicabo tenetur aliquid
								sint doloribus molestias distinctio aut temporibus natus dolorum
								corporis, quis assumenda? Veritatis debitis quas libero
								distinctio quidem commodi ducimus laborum voluptatem et sapiente
								labore, ipsa odit? Eius deserunt sequi sed. Praesentium est cum
								a magnam iusto obcaecati similique nemo dolores ipsa animi
								dolorum magni error cumque itaque modi maiores repudiandae, vero
								ab. Animi nulla pariatur a. Omnis exercitationem quibusdam eius,
								magnam eveniet iste nisi nesciunt numquam labore autem
								voluptatibus minus minima. Inventore corporis, ex nihil
								accusamus aut, ea blanditiis nostrum temporibus, nemo ipsum
								asperiores doloribus atque? Non placeat distinctio dolor
								mollitia dolores, tenetur a odio quam? Qui ad officia libero
								eaque modi in omnis aut laboriosam? Possimus placeat fuga maxime
								velit. Perspiciatis voluptas unde doloremque laudantium?
								Deleniti qui a maxime dicta doloremque alias non dolores laborum
								fugit veniam officia commodi sequi inventore, repellendus
								eligendi sed deserunt aspernatur saepe neque quod autem. Aliquam
								laudantium minima distinctio nesciunt. Corporis optio minus
								possimus, voluptatibus voluptatem doloribus ipsam, nobis
								repellendus quis dicta velit sequi aliquid nisi? Dolores at quos
								fugiat vel, eveniet exercitationem sit qui ipsa, neque
								consectetur ipsum sapiente. Ipsa sequi facilis, cumque error ab
								at. Inventore distinctio incidunt harum, dolore dolor ea
								debitis, ratione dolorem, commodi aliquam quo cumque magni
								repellendus sequi tenetur iste reprehenderit. Adipisci,
								molestiae facere? Asperiores temporibus pariatur suscipit iure
								praesentium voluptates tempora, facilis, tempore eius saepe,
								enim modi. Reprehenderit itaque omnis esse cumque unde, ipsa
								ratione distinctio molestias et, cupiditate consequatur harum
								deserunt vel! Enim, laborum. Blanditiis saepe optio sit
								asperiores ipsum libero odio veniam rerum aspernatur? Dolores
								libero quidem, fuga, voluptatibus soluta maiores aliquid autem
								incidunt, sunt explicabo tenetur iusto odio iure maxime.
								Reprehenderit rerum, ratione enim magnam repellendus itaque
								possimus sunt eius vitae, eum quae necessitatibus exercitationem
								ut hic cum libero molestiae quidem error? Id a, optio iure
								aliquam itaque voluptate temporibus?
							</Text>
						</ModalBody>
						<ModalFooter>
							<Button onClick={onClose}>Save Changes</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</Box>
		</Box>
	);
};

export default Homepage;
