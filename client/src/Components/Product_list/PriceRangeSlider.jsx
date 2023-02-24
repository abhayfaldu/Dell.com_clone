import { Box, Flex, Input } from "@chakra-ui/react";
import MultiRangeSlider from "multi-range-slider-react";
import React, { useState } from "react";
import styles from "./PriceRangeSlider.module.css";

const PriceRangeSlider = () => {
	const [minValue, set_minValue] = useState(25);
	const [maxValue, set_maxValue] = useState(75);
	const handleInput = e => {
		set_minValue(e.minValue);
		set_maxValue(e.maxValue);
	};
	return (
		<Box>
      <Flex gap={2} mb={2} align={'center'}>
        <label>Min: </label>
				<Input type="number" value={minValue} placeholder="Min" />
        <label>Max: </label>
				<Input type="number" value={maxValue} placeholder="Max" />
			</Flex>
			<Box className={styles.range}>
				<MultiRangeSlider
					className={styles.multi_range_slider}
					min={0}
					max={100}
					step={5}
					minValue={minValue}
					maxValue={maxValue}
					onInput={e => {
						handleInput(e);
					}}
				/>
			</Box>
		</Box>
	);
};

export default PriceRangeSlider;
