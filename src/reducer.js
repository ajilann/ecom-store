export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  console.log(action); // to check the action works when click button
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};

export default reducer;
