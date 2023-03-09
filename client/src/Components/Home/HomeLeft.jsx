import {
	Box,
	Button,
	Flex,
	Heading,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";

export default function HomeLeft({ title, head, body, img }) {
	return (
		<Flex
			maxW={"7xl"}
			align={"center"}
			flexDir={{ base: "column", md: "row" }}
			m="auto"
			mt="30px"
		>
			<Stack
				flex={1}
				spacing={{ base: 5, md: 10 }}
				align={"center"}
				justify={"center"}
			>
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
						{title}
					</Text>
					<br />
					<Text as={"span"} fontSize={{ base: "4xl", sm: "4xl", lg: "4xl" }}>
						{head}
					</Text>
				</Heading>
				<Text color={"gray.500"}>{body}</Text>
				<Flex
					gap={{ base: 4, sm: 6 }}
					align={"center"}
				>
					<Button
						w="120px"
						size={"lg"}
						fontWeight={"normal"}
						px={6}
						colorScheme={"blue"}
						border={"1px solid"}
						borderColor={"blue.400"}
						bg={"blue.400"}
						_hover={{ bg: "blue.500" }}
					>
						Show Now
					</Button>

					<Button
						w="120px"
						size={"lg"}
						fontWeight={"normal"}
						px={6}
						color={"blue.400"}
						border={"1px solid"}
						borderColor={"blue.400"}
						bg={"white.400"}
						_hover={{ bg: "blue.500" }}
					>
						Learn More
					</Button>
				</Flex>
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
						w={"85%"}
						m={"auto"}
						h={"100%"}
						src={img}
					/>
				</Box>
			</Flex>
		</Flex>
	);
}
