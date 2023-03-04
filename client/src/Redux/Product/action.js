import axios from "axios";
import {
	GET_PRODUCTS_FAILURE,
	GET_PRODUCTS_REQUEST,
	GET_PRODUCTS_SUCCESS,
} from "./actionTypes";

export const getProductsRequestAction = () => {
	return { type: GET_PRODUCTS_REQUEST };
};

export const getProductsSuccessAction = payload => {
	return { type: GET_PRODUCTS_SUCCESS, payload };
};

export const getProductsFailureAction = () => {
	return { type: GET_PRODUCTS_FAILURE };
};

export const getProducts =
	(params = {}) =>
	dispatch => {
		dispatch(getProductsRequestAction());
		axios
			.get(`${process.env.REACT_APP_SERVER_URL}/products/all`, params)
			.then(res => {
				dispatch(getProductsSuccessAction(res.data.products));
			})
			.catch(err => {
				console.log("something went wrong in getting products:", err);
				dispatch(getProductsFailureAction());
			});
	};
