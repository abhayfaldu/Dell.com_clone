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

export const getProducts = () => dispatch => {
	dispatch(getProductsRequestAction());
	axios("http://localhost:8080/products")
		.then(res => {
			dispatch(getProductsSuccessAction(res.data));
		})
		.catch(err => {
			console.log("something went wrong in getting products:", err);
			dispatch(getProductsFailureAction());
		});
};
