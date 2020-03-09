export const initialState = {
  user: [],
  userValue: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
      return {
        ...state,
        user: action.payload,
        userValue: action.payload
      };
    case "SEARCH":
      return {
        ...state,
        user: state.userValue.filter(item => action.payload == item.product)
      };
    case "QUANTITY":
      return {
        ...state,
        user: state.userValue.filter(item => action.payload == item.quantity)
      };
    case "DEFAULT":
      return {
        ...state,
        user: state.userValue
      };
    case "SUBMIT":
      console.log(action.payload);
      const items = state.user.filter(item => item.id !== action.payload.id);
      console.log(items);
      return {
        ...state,
        user: [action.payload, ...items]
      };
    case "DELETE":
      const itemS = state.user.filter(item => item.id !== action.payload);
      return {
        ...state,
        user: [...itemS]
      };

    default:
      return state;
  }
};

export default reducer;
