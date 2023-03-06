import { Button, Flex, Img, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function HomepageCard({
	title,
	data,
	button,
	image,
	button_link,
}) {
	const navigate = useNavigate();
	return (
		<Flex
			h="full"
			m="auto"
			maxW={"460px"}
			flexDir="column"
			shadow={"lg"}
			border={"1px solid"}
			borderColor={"gray.300"}
			rounded={"md"}
			overflow={"hidden"}
			p={4}
		>
			<Text
				fontSize={"2rem"}
				fontWeight={300}
				pb={"10px"}
				mb={"8px"}
				borderBottom={"1px solid lightgray"}
			>
				{title}
			</Text>
			<Flex gap={4} mt={"10px"} pb="2rem">
				{image && (
					<Img src={image} alt="laptop" maxW={"200px"} minW={"100px"} />
				)}
				<Text
					fontSize={"1.25rem"}
					fontWeight={400}
					lineHeight={"1.75rem"}
					textAlign={"left"}
				>
					{data}
				</Text>
			</Flex>
			<Button
				onClick={() => navigate(button_link)}
				mt={"auto"}
				marginInline={["auto", "auto", "0"]}
				w="140px"
				bg={"blue.400"}
				color={"white"}
				rounded={"md"}
				shadow={"md"}
				_hover={{
					bg: "blue.500",
				}}
				_focus={{
					bg: "blue.500",
				}}
			>
				{button}
			</Button>
		</Flex>
	);
}
