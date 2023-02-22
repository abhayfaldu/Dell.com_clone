import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionTypes";

const initialState = {
	isLoading: false,
	isError: false,
	products: [],
};

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_PRODUCTS_REQUEST:
			return { ...state, isLoading: true, isError: false };
		case GET_PRODUCTS_SUCCESS:
			return { ...state, isLoading: false, isError: false, products: payload };
		default:
			return state;
	}
};

export { reducer };
