import { combineReducers } from "redux";
import CovidDataReducer from "./CovdiDataReducer";
import DataReducer from "./DataReducer";

const allReducers=combineReducers({
    covidData:CovidDataReducer,
    isDataLoaded:DataReducer
})
export default allReducers