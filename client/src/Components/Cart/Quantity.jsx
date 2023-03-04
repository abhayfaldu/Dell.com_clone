import { Select } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts, updateCartItemQuantity } from "../../Redux/Cart/action";

const Quantity = ({ id, items }) => {
	const [qty, setQty] = useState(items);
	const dispatch = useDispatch();

	const handleSetQty = e => {
		setQty(prev => +e.target.value);

		dispatch(updateCartItemQuantity(id, e.target.value)).then(() => {
			dispatch(getProducts);
		});
	};

	return (
		<Select
			maxW="64px"
			aria-label="Select quantity"
			onChange={handleSetQty}
			defaultValue={qty}
		>
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
		</Select>
	);
};

export default Quantity;
