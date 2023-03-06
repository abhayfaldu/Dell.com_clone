import { Box, Button, Checkbox, Flex, Heading, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

// style objects
const filterBoxStyle = {
	backgroundColor: "#f3f3f3",
	padding: "12px",
	marginBottom: "10px",
	borderRadius: "8px",
	flexDirection: "column",
	gap: "4px",
};

const radio_input_container_style = {
	marginBottom: "4px",
	display: "flex",
	gap: "8px",
};

const FilterSection = ({onClose, onOpen}) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const initialCategory = searchParams.getAll("category");
	const [ category, setCategory ] = useState(initialCategory || []);
	const initialProcessor = searchParams.get("processor");
	const [processor, setProcessor] = useState(initialProcessor || "");
	const initialPage = searchParams.get("page");
	const [page] = useState(+initialPage || 1);
	const initialMinPrice = searchParams.get("discounted_price[gte]");
	const [minPrice, setMinPrice] = useState(initialMinPrice);
	const initialMaxPrice = searchParams.get("discounted_price[lte]");
	const [maxPrice, setMaxPrice] = useState(initialMaxPrice);
	const [isPriceFilterApplied, setIsPriceFilterApplied] = useState(1);
	const initialMemory = searchParams.getAll("memory");
	const [memory, setMemory] = useState(initialMemory || []);
	const initialStorage = searchParams.getAll("storage");
	const [storage, setStorage] = useState(initialStorage || []);
	const initialKeyword = searchParams.get("keyword");
	const [keyword] = useState(initialKeyword || "");

	const handleCategoryFilter = e => {
		let newCategory = [...category];
		if (newCategory.includes(e.target.value)) {
			newCategory.splice(newCategory.indexOf(e.target.value), 1);
		} else {
			newCategory.push(e.target.value);
		}
		setCategory(newCategory);
	};

	const handlePriceChange = () => {
		setIsPriceFilterApplied(prev => (prev === 1 ? 2 : 1));
	};

	const handleMemoryFilter = e => {
		let newMemory = [...memory];
		if (newMemory.includes(e.target.value)) {
			newMemory.splice(newMemory.indexOf(e.target.value), 1);
		} else {
			newMemory.push(e.target.value);
		}
		setMemory(newMemory);
	};

	const handleStorageFilter = e => {
		let newStorage = [...storage];
		if (newStorage.includes(e.target.value)) {
			newStorage.splice(newStorage.indexOf(e.target.value), 1);
		} else {
			newStorage.push(e.target.value);
		}
		setStorage(newStorage);
	};

	// useEffect to send all the changes in filters to url
	useEffect(() => {
		const params = {
			category,
			memory,
			storage,
			page,
		};
		if (keyword) {
			params.keyword = keyword;
		}
		if (minPrice) params["discounted_price[gte]"] = minPrice;
		if (maxPrice) params["discounted_price[lte]"] = maxPrice;
		processor && (params.processor = processor);
		setSearchParams(params);
	}, [category, processor, memory, storage, isPriceFilterApplied, keyword, onClose, onOpen, page]);

	return (
		<Box gap={4}>
			{/* filter heading */}
			<Flex
				flexDir={"column"}
				style={filterBoxStyle}
				color={"#5a5a5a"}
				fontSize={"1.1rem"}
			>
				Filter Results
			</Flex>

			{/* category filter */}
			<Flex style={filterBoxStyle}>
				<Heading size={"sm"} mb={2}>
					Category
				</Heading>
				<Checkbox
					value={"Laptop"}
					onChange={handleCategoryFilter}
					defaultChecked={category.includes("Laptop")}
				>
					Laptop
				</Checkbox>
				<Checkbox
					value={"Desktop"}
					onChange={handleCategoryFilter}
					defaultChecked={category.includes("Desktop")}
				>
					Desktop
				</Checkbox>
			</Flex>

			{/* processor filter */}
			<Flex style={filterBoxStyle}>
				<Heading size={"sm"} mb={2}>
					Processor
				</Heading>
				<Flex flexDir={"column"} onChange={e => setProcessor(e.target.value)}>
					<div style={radio_input_container_style}>
						<input
							type={"radio"}
							name="processor"
							value={undefined}
							defaultChecked
						/>
						<label>All processors</label>
					</div>
					<div style={radio_input_container_style}>
						<input
							type={"radio"}
							name="processor"
							value={"12th Gen Intel® Core™ i7-1255U"}
							checked={processor === "12th Gen Intel® Core™ i7-1255U"}
						/>
						<label>Intel Core i7</label>
					</div>
					<div style={radio_input_container_style}>
						<input
							type={"radio"}
							name="processor"
							value={"12th Gen Intel® Core™ i5-1235U"}
							checked={processor === "12th Gen Intel® Core™ i5-1235U"}
						/>
						<label>Intel Core i5</label>
					</div>
					<div style={radio_input_container_style}>
						<input
							type={"radio"}
							name="processor"
							value={"12th Gen Intel® Core™ i3-1215U"}
							checked={processor === "12th Gen Intel® Core™ i3-1215U"}
						/>
						<label>Intel Core i3</label>
					</div>
					<div style={radio_input_container_style}>
						<input
							type={"radio"}
							name="processor"
							value={"Intel® Pentium® Silver N5030"}
							checked={processor === "Intel® Pentium® Silver N5030"}
						/>
						<label>Intel Pentium</label>
					</div>
					<div style={radio_input_container_style}>
						<input
							type={"radio"}
							name="processor"
							value={
								"AMD Ryzen™ 5 5625U 6-core/12-thread Processor with Radeon™ Graphics"
							}
							checked={
								processor ===
								"AMD Ryzen™ 5 5625U 6-core/12-thread Processor with Radeon™ Graphics"
							}
						/>
						<label>AMD Ryzen 5</label>
					</div>
					<div style={radio_input_container_style}>
						<input
							type={"radio"}
							name="processor"
							value={
								"AMD Ryzen™ 3 5425U 4-core/8-thread Processor with Radeon™ Graphics"
							}
							checked={
								processor ===
								"AMD Ryzen™ 3 5425U 4-core/8-thread Processor with Radeon™ Graphics"
							}
						/>
						<label>AMD Ryzen 3</label>
					</div>
				</Flex>
			</Flex>

			{/* price range filter */}
			<Flex flexDir={"column"} style={filterBoxStyle}>
				<Heading size={"sm"} mb={2}>
					Price Range
				</Heading>
				<Flex gap={2} mb={2} align={"center"}>
					<Flex flexDir={"column"}>
						<label>Min: </label>
						<Input
							type={"number"}
							value={minPrice}
							onChange={e => setMinPrice(e.target.value)}
							placeholder="Min"
						></Input>
					</Flex>
					<Flex flexDir={"column"}>
						<label>Max: </label>
						<Input
							type={"number"}
							value={maxPrice}
							onChange={e => setMaxPrice(e.target.value)}
							placeholder="Max"
						></Input>
					</Flex>
				</Flex>
				<Button
					bgColor={"brand"}
					color="white"
					_hover={{ backgroundColor: "#0076cecc" }}
					onClick={handlePriceChange}
				>
					Apply Price Range
				</Button>
			</Flex>

			{/* memory filter */}
			<Flex flexDir={"column"} style={filterBoxStyle}>
				<Heading size={"sm"} mb={2}>
					Memory
				</Heading>
				<Flex flexDir={"column"}>
					<Checkbox
						value={"16 GB, 2 x 8 GB, DDR4, 3200 MHz"}
						onChange={handleMemoryFilter}
						defaultChecked={memory.includes("16 GB, 2 x 8 GB, DDR4, 3200 MHz")}
					>
						16 Gb
					</Checkbox>
					<Checkbox
						value={"8 GB, 1 x 8 GB, DDR4, 3200 MHz"}
						onChange={handleMemoryFilter}
						defaultChecked={memory.includes("8 GB, 1 x 8 GB, DDR4, 3200 MHz")}
					>
						8 Gb
					</Checkbox>
				</Flex>
			</Flex>

			{/* storage filter */}
			<Flex flexDir={"column"} style={filterBoxStyle}>
				<Heading size={"sm"} mb={2}>
					Storage
				</Heading>
				<Checkbox
					value={
						'256GB M.2 PCIe NVMe Solid State Drive (Boot) + 1TB 5400 rpm 2.5" SATA Hard Drive (Storage)'
					}
					onChange={handleStorageFilter}
					defaultChecked={storage.includes(
						'256GB M.2 PCIe NVMe Solid State Drive (Boot) + 1TB 5400 rpm 2.5" SATA Hard Drive (Storage)'
					)}
				>
					1 Tb
				</Checkbox>
				<Checkbox
					value={"512 GB, M.2, PCIe NVMe, SSD"}
					onChange={handleStorageFilter}
					defaultChecked={storage.includes("512 GB, M.2, PCIe NVMe, SSD")}
				>
					512 Gb
				</Checkbox>
				<Checkbox
					value={"256 GB, M.2, PCIe NVMe, SSD"}
					onChange={handleStorageFilter}
					defaultChecked={storage.includes("256 GB, M.2, PCIe NVMe, SSD")}
				>
					256 Gb
				</Checkbox>
			</Flex>
		</Box>
	);
};

export default FilterSection;
