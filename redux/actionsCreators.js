import {
  GET_ALL_COUNTRIES,
  GET_FILTRED_COUNTRIES,
  SET_FILTER,
  GET_SEARCHED_COUNTRIES,
} from "./constants";
import axios from "axios";

export const getAllCountries = () => async (dispatch, getState) => {
  const { data } = await axios.get("https://restcountries.com/v2/all");
  console.log(data);
  dispatch({ type: GET_ALL_COUNTRIES, payload: data });
};

export const GetFiltredCountries = (continet) => async (dispatch, getState) => {
  const data = getState().countries;
  const countries = data.filter((e) => {
    return e.region == continet;
  });
  dispatch({ type: GET_FILTRED_COUNTRIES, payload: countries });
};
export const GetSearchedCountries = (keyword) => async (dispatch, getState) => {
  const data = getState().countries;
  const input = keyword.toLowerCase();

  const countries = data.filter((e) => {
    const countryName = e.name.toLowerCase();
    return countryName.includes(input);
  });
  dispatch({type : SET_FILTER , payload : ""})
  dispatch({ type: GET_SEARCHED_COUNTRIES, payload: countries });
};

export const setFilter = (continet) => async (dispatch, getState) => {
  dispatch({ type: SET_FILTER, payload: continet });
};
