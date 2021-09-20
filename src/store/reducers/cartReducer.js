import * as actionTypes from "../actions/actions";

const cartReducer = (state = [], action) => {
  let updatedCart;
  let updatedItemIndex;
  switch (action.type) {
    case actionTypes.INIT_CART:
      return action.data;
    case actionTypes.ADD_PRODUCT:
      updatedCart = [...state];
      updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.data.id
      );
      console.log(updatedItemIndex);
      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.data, quantity: 1 });
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex],
        };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }
      return updatedCart;
    case actionTypes.REMOVE_PRODUCT:
      updatedCart = [...state];
      updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.data
      );
      const updatedItem = {
        ...updatedCart[updatedItemIndex],
      };
      updatedItem.quantity--;

      if (updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1);
      } else {
        updatedCart[updatedItemIndex] = updatedItem;
      }

      return updatedCart;

    default:
      return state;
  }
};

export default cartReducer;
