import { GET_FILTRED_COUNTRIES, GET_ALL_COUNTRIES , SET_FILTER } from "./constants";

export const allCountriesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return action.payload;
    default:
      return state;
  }
};

export const filtredCountriesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_FILTRED_COUNTRIES:
      return action.payload;
    default:
      return state;
  }
};
export const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    default:
      return state;
  }
};
