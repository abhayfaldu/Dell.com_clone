import { Button, Flex } from "@chakra-ui/react";
import React from "react";

const Pagination = ({
	totalProducts,
	page,
	limit,
	onChange,
	handlePrev,
	handleNext,
}) => {
	const prev = (
		<Button
			onClick={handlePrev}
			disabled={page === 1}
			bgColor={"brand"}
			color={"white"}
			_hover={{ backgroundColor: "#0076cecc" }}
		>
			Previous
		</Button>
	);
	const pages = new Array(Math.ceil(totalProducts / limit))
		.fill(0)
		.map((el, i) => (
			<Button
				key={i + 1}
				disabled={page === i + 1}
				bgColor={page === i + 1 ? "brand" : ""}
				color={page === i + 1 ? "white" : ""}
				onClick={() => onChange(i + 1)}
				_hover={{
					backgroundColor: page === i + 1 ? "#0076cecc" : "brand",
					color: "#fff",
				}}
			>
				{i + 1}
			</Button>
		));
	const next = (
		<Button
			onClick={handleNext}
			disabled={page === Math.ceil(totalProducts / limit)}
			bgColor={"brand"}
			color={"white"}
			_hover={{ backgroundColor: "#0076cecc" }}
		>
			Next
		</Button>
	);

	return (
		<Flex gap={2} my={4}>
			{prev}
			{pages}
			{next}
		</Flex>
	);
};

export default Pagination;
