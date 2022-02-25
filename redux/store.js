import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { allCountriesReducer, filterReducer ,filtredCountriesReducer } from "./reducer";

const reducers = combineReducers({
  filtredCountries :  filtredCountriesReducer,
  countries: allCountriesReducer,
  filter: filterReducer,
});
const initialState = {
  countries: [],
  filter: "all",
};
const middleware = [thunk];
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
