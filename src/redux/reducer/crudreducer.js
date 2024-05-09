const intnitial = {
  users: JSON.parse(localStorage.getItem("users")) || [],
  user: {},
};

export const crudReducer = (state = intnitial, action) => {
  switch (action.type) {
    case "add":
      const old = [...state.users, action.payload];
      let a = localStorage.setItem("users", JSON.stringify(old));
      return {
        ...state,
        users: old,
      };
    default:
      return state;
  }
};
