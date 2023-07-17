const defaultState = {
  count: 5,
};

export function countPlusAction(payload) {
  return {
    type: "COUNT_PLUS",
    payload: payload,
  };
}
export const countMinusAction = (payload) => ({
  type: "COUNT_MINUS",
  payload: payload,
});

export const countReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "COUNT_PLUS":
      return { ...state, count: state.count + action.payload };

    case "COUNT_MINUS":
      return { ...state, count: state.count - action.payload };

    default:
      return state;
  }
};
