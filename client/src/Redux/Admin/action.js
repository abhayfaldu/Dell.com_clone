import {
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  GET_PRODUCT_COUNT_FAILURE,
  GET_PRODUCT_COUNT_REQUEST,
  GET_PRODUCT_COUNT_SUCCESS,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  POST_PRODUCT_FAILURE,
  POST_PRODUCT_REQUEST,
  POST_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
} from "./actionTypes";

import axios from "axios";

// GET PRODUCT ACTION

export const getProductRequest = () => {
  return { type: GET_PRODUCT_REQUEST };
};
export const getProductSuccess = (payload) => {
  return { type: GET_PRODUCT_SUCCESS, payload };
};
export const getProductFailure = () => {
  return { type: GET_PRODUCT_FAILURE };
};

// GET PRODUCT COUNT

export const getProductCountRequest = () => {
  return { type: GET_PRODUCT_COUNT_REQUEST };
};
export const getProductCountSuccess = (payload) => {
  return { type: GET_PRODUCT_COUNT_SUCCESS, payload };
};
export const getProductCountFailure = () => {
  return { type: GET_PRODUCT_COUNT_FAILURE };
};

// POST PRODUCT ACTION

export const postProductRequest = () => {
  return { type: POST_PRODUCT_REQUEST };
};
export const postProductSuccess = () => {
  return { type: POST_PRODUCT_SUCCESS };
};
export const postProductFailure = () => {
  return { type: POST_PRODUCT_FAILURE };
};

// UPDATE PRODUCT ACTION

export const updateProductRequest = () => {
  return { type: UPDATE_PRODUCT_REQUEST };
};
export const updateProductSuccess = () => {
  return { type: UPDATE_PRODUCT_SUCCESS };
};
export const updateProductFailure = () => {
  return { type: UPDATE_PRODUCT_FAILURE };
};

// DELETE PRODUCT ACTIION

export const deleteProductRequest = () => {
  return { type: DELETE_PRODUCT_REQUEST };
};
export const deleteProductSuccess = () => {
  return { type: DELETE_PRODUCT_SUCCESS };
};
export const deleteProductFailure = () => {
  return { type: DELETE_PRODUCT_FAILURE };
};

// GET USER ACTION

export const getUserRequest = () => {
  return { type: GET_USER_REQUEST };
};
export const getUserSuccess = (payload) => {
  return { type: GET_USER_SUCCESS, payload };
};
export const getUserFailure = () => {
  return { type: GET_USER_FAILURE };
};

// UPDATE USER ACTION

export const updateUserRequest = () => {
  return { type: UPDATE_USER_REQUEST };
};
export const updateUserSuccess = () => {
  return { type: UPDATE_USER_SUCCESS };
};
export const updateUserFailure = () => {
  return { type: UPDATE_USER_FAILURE };
};

// DELETE USER ACTIION

export const deleteUserRequest = () => {
  return { type: DELETE_USER_REQUEST };
};
export const deleteUserSuccess = () => {
  return { type: DELETE_USER_SUCCESS };
};
export const deleteUserFailure = () => {
  return { type: DELETE_USER_FAILURE };
};

//-------------------------------------------------------------------ACTION PROCESS-------------------------------------------------------//

export const getProductData = (page, setTotalCount) => (dispatch) => {
  dispatch(getProductRequest());
  axios
		.get(`${process.env.REACT_APP_SERVER_URL}/products/all?page=${page}`)
		.then(res => {
			setTotalCount(res.data.totalCount);
			dispatch(getProductSuccess(res.data.products));
		})
		.catch(err => {
			dispatch(getProductFailure());
		});
};

export const getProductCount = (dispatch) => {
  dispatch(getProductCountRequest());
  axios
		.get(`${process.env.REACT_APP_SERVER_URL}/products/all`)
		.then(res => {
			dispatch(getProductCountSuccess(res.data.totalCount));
		})
		.catch(err => {
			dispatch(getProductCountFailure());
		});
};

export const postProductData = (data) => (dispatch) => {
  dispatch(postProductRequest());
  return axios
		.post(`${process.env.REACT_APP_SERVER_URL}/products/create`, data)
		.then(res => {
			dispatch(postProductSuccess());
		})
		.catch(err => {
			dispatch(postProductFailure());
		});
};

export const updateProductData =
  (
    id,
    discounted_price,
    original_price,
    graphics_card,
    memory,
    category,
    getToast
  ) =>
  (dispatch) => {
    dispatch(updateProductRequest());
    return axios
			.patch(`${process.env.REACT_APP_SERVER_URL}/products/update/${id}`, {
				discounted_price,
				original_price,
				graphics_card,
				memory,
				category,
			})
			.then(res => {
				res.data.success
					? getToast("success", res.data.message)
					: getToast("error", res.data.message);
				dispatch(updateProductSuccess());
			})
			.catch(err => {
				dispatch(updateProductFailure());
			});
  };

export const deleteProductData = (id, getToast) => (dispatch) => {
  dispatch(deleteProductRequest());
  return axios
		.delete(`${process.env.REACT_APP_SERVER_URL}/products/delete/${id}`)
		.then(res => {
			res.data.success
				? getToast("success", res.data.message)
				: getToast("error", res.data.message);
			dispatch(deleteProductSuccess());
		})
		.catch(err => {
			dispatch(deleteProductFailure());
		});
};

//-------------------------------------------------------------------User Action-------------------------------------------------------------//
export const getUserData = (dispatch) => {
  dispatch(getUserRequest());
  axios
		.get(`${process.env.REACT_APP_SERVER_URL}/users`)
		.then(res => {
			dispatch(getUserSuccess(res.data.users));
		})
		.catch(err => {
			dispatch(getUserFailure());
		});
};

export const deleteUserData = (id) => (dispatch) => {
  dispatch(deleteUserRequest());
  return axios
		.delete(`${process.env.REACT_APP_SERVER_URL}/users/delete/${id}`)
		.then(res => {
			dispatch(deleteUserSuccess());
		})
		.catch(err => {
			dispatch(deleteUserFailure());
		});
};

export const updateUserData = (id, role) => (dispatch) => {
  dispatch(updateUserRequest());
  return axios
		.patch(`${process.env.REACT_APP_SERVER_URL}/users/update/${id}`, { role })
		.then(res => {
			dispatch(updateUserSuccess());
		})
		.catch(err => {
			dispatch(updateUserFailure());
		});
};
