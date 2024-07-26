export const shoppingReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: [],
      }
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (bassketItem) => bassketItem.itex.id === action.payload.id
      );

      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `cannot remove(id:${action.payload.id})as it is not in the basket`
        );
      }
      localStorage.setItem('basket', JSON.stringify(newBasket));
      return{
        ...state,
        basket: newBasket,
      }
    default:
      return state;
  }
};
