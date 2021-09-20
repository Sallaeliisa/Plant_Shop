import * as actionTypes from "../actions/actions";

const productReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.INIT_PRODUCTS:
      return action.data;

    default:
      return state;
  }
};

export default productReducer;
