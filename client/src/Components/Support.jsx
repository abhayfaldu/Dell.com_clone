import {
	Box,
	Button,
	Flex,
	Icon,
	SimpleGrid,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";
import React from "react";
import {
	AiFillCheckCircle,
	AiFillSetting,
	AiOutlineCustomerService,
} from "react-icons/ai";
import { FcSupport } from "react-icons/fc";

const Feature = props => {
	return (
		<Flex>
			<Icon
				boxSize={5}
				mt={1}
				mr={2}
				color="brand.500"
				_dark={{
					color: "brand.300",
				}}
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fillRule="evenodd"
					d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
					clipRule="evenodd"
				></path>
			</Icon>
			<p
				fontSize="lg"
				color="gray.700"
				_dark={{
					color: "gray.400",
				}}
				{...props}
			/>
		</Flex>
	);
};
const Support = () => {
	return (
		<Flex
			_dark={{
				bg: "#3e3e3e",
			}}
			maxW={["7xl"]}
			m={[4, 4, 4, 4, "auto"]}
			px={8}
			py={20}
			borderRadius={"15px"}
			border={"0.5px solid lightgray"}
			justifyContent="center"
			alignItems="center"
			shadow="xl"
		>
			<SimpleGrid
				alignItems="center"
				columns={{
					base: 1,
					lg: 2,
				}}
				spacingY={{
					base: 10,
					lg: 32,
				}}
				spacingX={{
					base: 10,
					lg: 24,
				}}
			>
				<Box>
					<Text
						mb={3}
						fontSize={{
							base: "3xl",
							md: "4xl",
						}}
						textAlign={{
							base: "center",
							sm: "left",
						}}
						_light={{
							color: "black",
						}}
						lineHeight="shorter"
						letterSpacing="tight"
					>
						LAP-DEN Support
					</Text>
					<Text
						mb={6}
						fontSize={{
							base: "lg",
							md: "xl",
						}}
						textAlign={{
							base: "center",
							sm: "left",
						}}
						color="gray.600"
						_dark={{
							color: "gray.500",
						}}
					>
						Get your questions answered.
					</Text>
					<Button
						as="a"
						variant="solid"
						w={{
							base: "full",
							sm: "auto",
						}}
						colorScheme="brand"
						size="lg"
					>
						Become a Partner
					</Button>
				</Box>
				<VStack direction="column" flexGrow={1} spacing={5} alignItems="start">
					<Stack direction={{ base: "column", sm: "row" }} color={"blue.400"}>
						<Stack>
							<AiOutlineCustomerService fontSize={"30px"} />
						</Stack>
						<Stack>
							<Text fontSize={{ base: "xl", sm: "xl", lg: "xl" }}>
								Contact Support
							</Text>
						</Stack>
					</Stack>
					<Feature>
						Let us assist you with any product or service questions
					</Feature>
					<Stack direction={{ base: "column", sm: "row" }} color={"blue.400"}>
						<Stack>
							<AiFillCheckCircle fontSize={"30px"} />
						</Stack>
						<Stack>
							<Text fontSize={{ base: "xl", sm: "xl", lg: "xl" }}>
								Warranty and Contracts
							</Text>
						</Stack>
					</Stack>
					<Feature>Check warranty of the product</Feature>
					<Stack direction={{ base: "column", sm: "row" }} color={"blue.400"}>
						<Stack>
							<FcSupport fontSize={"30px"} />
						</Stack>
						<Stack>
							<Text fontSize={{ base: "xl", sm: "xl", lg: "xl" }}>
								Product Support
							</Text>
						</Stack>
					</Stack>
					<Feature>Expertise. Convenience. Quality Support.</Feature>
					<Stack direction={{ base: "column", sm: "row" }} color={"blue.400"}>
						<Stack>
							<AiFillSetting fontSize={"30px"} />
						</Stack>
						<Stack>
							<Text fontSize={{ base: "xl", sm: "xl", lg: "xl" }}>
								Drivers and Downloads
							</Text>
						</Stack>
					</Stack>
					<Feature>Get the latest Drivers and Softwares</Feature>
				</VStack>
			</SimpleGrid>
		</Flex>
	);
};

export default Support;
