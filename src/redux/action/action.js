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


export const FILTTER_DATA = (data) => {
  return {  
    type: "filter",
    payload: data,
  };
};
