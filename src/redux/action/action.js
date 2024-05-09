export const VIEW_DATA = () => {
  return {
    type: "view",
  };
};
export const ADD_DATA = (data) => {
  return {
    type: "add",
    payload: data,
  };
};
