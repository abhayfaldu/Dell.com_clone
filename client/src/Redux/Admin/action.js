import {
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
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

export const getProductData = (dispatch) => {
  dispatch(getProductRequest());
  axios
    .get(`https://wadrobe.onrender.com/men`)
    .then((res) => {
      dispatch(getProductSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getProductFailure());
    });
};
