import { combineReducers } from "redux";
import CovidDataReducer from "./CovdiDataReducer";

const allReducers=combineReducers({
    covidData:CovidDataReducer
})
export default allReducers