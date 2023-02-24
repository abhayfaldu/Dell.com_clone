import {
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
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

const instialState = {
  users: [],
  product: [],
  isLoading: false,
  isError: false,
  productCount: [],
};

const reducer = (state = instialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_PRODUCT_SUCCESS: {
      return { ...state, isLoading: false, product: payload };
    }
    case GET_PRODUCT_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case POST_PRODUCT_REQUEST: {
      return { ...state, isLoading: true };
    }
    case POST_PRODUCT_SUCCESS: {
      return { ...state, isLoading: false };
    }
    case POST_PRODUCT_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case UPDATE_PRODUCT_REQUEST: {
      return { ...state, isLoading: true };
    }
    case UPDATE_PRODUCT_SUCCESS: {
      return { ...state, isLoading: false };
    }
    case UPDATE_PRODUCT_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case DELETE_PRODUCT_REQUEST: {
      return { ...state, isLoading: true };
    }
    case DELETE_PRODUCT_SUCCESS: {
      return { ...state, isLoading: false };
    }
    case DELETE_PRODUCT_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case GET_USER_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_USER_SUCCESS: {
      return { ...state, isLoading: false, users: payload };
    }
    case GET_USER_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case UPDATE_USER_REQUEST: {
      return { ...state, isLoading: true };
    }
    case UPDATE_USER_SUCCESS: {
      return { ...state, isLoading: false };
    }
    case UPDATE_USER_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case DELETE_USER_REQUEST: {
      return { ...state, isLoading: true };
    }
    case DELETE_USER_SUCCESS: {
      return { ...state, isLoading: false };
    }
    case DELETE_USER_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case GET_PRODUCT_COUNT_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_PRODUCT_COUNT_SUCCESS: {
      return { ...state, isLoading: false, productCount: payload };
    }
    case GET_PRODUCT_COUNT_SUCCESS: {
      return { ...state, isLoading: false, isError: true };
    }
    default:
      return state;
  }
};

export { reducer };
