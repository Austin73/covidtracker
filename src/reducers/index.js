import { combineReducers } from "redux";
import ButtonReducer from "./ButtonReducer";
import CovidDataReducer from "./CovdiDataReducer";
import DataReducer from "./DataReducer";

const allReducers=combineReducers({
    covidData:CovidDataReducer,
    isDataLoaded:DataReducer,
    navButton:ButtonReducer 
})
export default allReducers