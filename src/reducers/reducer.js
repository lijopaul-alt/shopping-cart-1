export const init = {
  cart: [],
};

function reducer(state = init, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    default:
      return state;
  }
}

export default reducer;
