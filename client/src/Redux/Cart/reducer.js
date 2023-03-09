import {
	CLEAR_CART_PRODUCTS_FAILURE,
	CLEAR_CART_PRODUCTS_REQUEST,
	CLEAR_CART_PRODUCTS_SUCCESS,
	DELETE_CART_PRODUCTS_FAILURE,
	DELETE_CART_PRODUCTS_REQUEST,
	DELETE_CART_PRODUCTS_SUCCESS,
	GET_CART_PRODUCTS_FAILURE,
	GET_CART_PRODUCTS_REQUEST,
	GET_CART_PRODUCTS_SUCCESS,
	POST_CART_PRODUCTS_FAILURE,
	POST_CART_PRODUCTS_REQUEST,
	POST_CART_PRODUCTS_SUCCESS,
	UPDATE_CART_ITEMS_PRODUCTS_FAILURE,
	UPDATE_CART_ITEMS_PRODUCTS_REQUEST,
	UPDATE_CART_ITEMS_PRODUCTS_SUCCESS,
} from "./actionTypes";

const initialState = { isLoading: false, isError: false, products: [] };

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case POST_CART_PRODUCTS_REQUEST:
			return { ...state, isLoading: true, isError: false };
		case POST_CART_PRODUCTS_SUCCESS:
			return { ...state, isLoading: false, isError: false };
		case POST_CART_PRODUCTS_FAILURE:
			return { ...state, isLoading: false, isError: true };

		case GET_CART_PRODUCTS_REQUEST:
			return { ...state, isLoading: true, isError: false };
		case GET_CART_PRODUCTS_SUCCESS:
			return { ...state, isLoading: false, isError: false, products: payload };
		case GET_CART_PRODUCTS_FAILURE:
			return { ...state, isLoading: false, isError: true };

		case DELETE_CART_PRODUCTS_REQUEST:
			return { ...state, isLoading: true, isError: false };
		case DELETE_CART_PRODUCTS_SUCCESS:
			return { ...state, isLoading: false, isError: false };
		case DELETE_CART_PRODUCTS_FAILURE:
			return { ...state, isLoading: false, isError: true };

		case CLEAR_CART_PRODUCTS_REQUEST:
			return { ...state, isLoading: true, isError: false };
		case CLEAR_CART_PRODUCTS_SUCCESS:
			return { ...state, isLoading: false, isError: false };
		case CLEAR_CART_PRODUCTS_FAILURE:
			return { ...state, isLoading: false, isError: true };

		case UPDATE_CART_ITEMS_PRODUCTS_REQUEST:
			return { ...state, isLoading: true, isError: false };
		case UPDATE_CART_ITEMS_PRODUCTS_SUCCESS:
			return { ...state, isLoading: false, isError: false };
		case UPDATE_CART_ITEMS_PRODUCTS_FAILURE:
			return { ...state, isLoading: false, isError: true };
		default:
			return state;
	}
};

export { reducer };
