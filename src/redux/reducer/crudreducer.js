const intnitial = {
  users: JSON.parse(localStorage.getItem("users")) || [],
  user: {},
  fltr: [],
};

export const crudReducer = (state = intnitial, action) => {
  switch (action.type) {
    case "add":
      const old = [...state.users, action.payload];
      localStorage.setItem("users", JSON.stringify(old));
      return {
        ...state,
        users: old,
      };


      case "filter":      
      console.log(action.payload);
      let flt = state.users.find(item => item.movieCategory === action.payload )
      let callstd = [flt]
      return{
        ...state,
        fltr: callstd 
      }
      
    default:
      return state;
  }
};
