import axios from "axios";
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
} from "./actionTypes";

//post
export const postCartProductsRequestAction = () => {
  return { type: POST_CART_PRODUCTS_REQUEST };
};

export const postCartProductsSuccessAction = () => {
  return { type: POST_CART_PRODUCTS_SUCCESS };
};

export const postCartProductsFailureAction = () => {
  return { type: POST_CART_PRODUCTS_FAILURE };
};

//get
export const getCartProductsRequestAction = () => {
  return { type: GET_CART_PRODUCTS_REQUEST };
};

export const getCartProductsSuccessAction = (payload) => {
  return { type: GET_CART_PRODUCTS_SUCCESS, payload };
};

export const getCartProductsFailureAction = () => {
  return { type: GET_CART_PRODUCTS_FAILURE };
};

//delete
export const deleteCartProductsRequestAction = () => {
  return { type: DELETE_CART_PRODUCTS_REQUEST };
};

export const deleteCartProductsSuccessAction = () => {
  return { type: DELETE_CART_PRODUCTS_SUCCESS };
};

export const deleteCartProductsFailureAction = () => {
  return { type: DELETE_CART_PRODUCTS_FAILURE };
};

//deleteall
export const clearCartProductsRequestAction = () => {
  return { type: CLEAR_CART_PRODUCTS_REQUEST };
};

export const clearCartProductsSuccessAction = () => {
  return { type: CLEAR_CART_PRODUCTS_SUCCESS };
};

export const clearCartProductsFailureAction = () => {
  return { type: CLEAR_CART_PRODUCTS_FAILURE };
};

// <<<<<<< HEAD
//   (title, original_price, discounted_price, image_url) => (dispatch) => {
//     dispatch(postCartProductsRequestAction());
//     return axios
//       .post(
//         "http://localhost:8080/cart/create",
//         { title, original_price, discounted_price, image_url },
//         {
//           headers: {
//             Authorization: localStorage.getItem("token"),
//           },
//         }
//       )
//       .then((res) => {
//         console.log(res);
//         dispatch(postCartProductsSuccessAction());
//       })
//       .catch((err) => {
//         console.log("something went wrong in getting products:", err);
//         dispatch(postCartProductsFailureAction());
//       });
//   };

// Get Cart products
export const getProducts = (dispatch) => {
  dispatch(getCartProductsRequestAction());
  axios
    .get(`${process.env.REACT_APP_SERVER_URL}/cart/singlecart`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log("res:", res);
      console.log(res.data.userCart.length);
      dispatch(getCartProductsSuccessAction(res.data.userCart));
    })
    .catch((err) => {
      console.log("something went wrong in getting products:", err);
      dispatch(getCartProductsFailureAction());
    });
};

//  Delete Single Product

export const deleteProduct = (id) => (dispatch) => {
  dispatch(deleteCartProductsRequestAction());
  return axios
		.delete(
			`${process.env.REACT_APP_SERVER_URL}/cart/deletecart/${id}`,
			{
				headers: {
					Authorization: localStorage.getItem("token"),
				},
			}
		)
		.then(res => {
			dispatch(deleteCartProductsSuccessAction());
		})
		.catch(err => {
			console.log("something went wrong in getting products:", err);
			dispatch(deleteCartProductsFailureAction());
		});
};

// clear cart

export const clearAllProducts = (id) => (dispatch) => {
  dispatch(clearCartProductsRequestAction());
  return axios
		.delete(`${process.env.REACT_APP_SERVER_URL}/cart/clearcart`, {
			headers: {
				Authorization: localStorage.getItem("token"),
			},
		})
		.then(res => {
			dispatch(clearCartProductsSuccessAction());
		})
		.catch(err => {
			console.log("something went wrong in getting products:", err);
			dispatch(clearCartProductsFailureAction());
		});
};

export const addToCart =
  (title, original_price, discounted_price, image_url, getToast) =>
  (dispatch) => {
	  console.log('image_url:', image_url)
    dispatch(postCartProductsRequestAction());
    return axios
			.post(
				`${process.env.REACT_APP_SERVER_URL}/cart/create`,
				{ title, original_price, discounted_price, image_url },
				{
					headers: {
						Authorization: localStorage.getItem("token"),
					},
				}
			)
			.then(res => {
				res.data.success
					? getToast("success", res.data.message)
					: getToast("error", res.data.message);
				dispatch(postCartProductsSuccessAction());
			})
			.catch(err => {
				if (!localStorage.getItem("token")) {
					return getToast("error", "Please Login First");
				}
				getToast("error", "something went wrong in getting products");
				dispatch(postCartProductsFailureAction());
			});
  };
