import { getAll, getCart } from "../../services/request";

export const INIT_PRODUCTS = "INIT_PRODUCTS";
export const INIT_CART = "INIT_CART";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const initializeProducts = () => {
  return async (dispatch) => {
    const products = await getAll();
    dispatch({
      type: INIT_PRODUCTS,
      data: products,
    });
  };
};

export const initializeCart = () => {
  return async (dispatch) => {
    const cart = await getCart();
    dispatch({
      type: INIT_CART,
      data: cart,
    });
  };
};

export const addProduct = (product) => {
  return (dispatch) => {
    dispatch({
      type: ADD_PRODUCT,
      data: product,
    });
  };
};

export const removeProduct = (productId) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_PRODUCT,
      data: productId,
    });
  };
};
