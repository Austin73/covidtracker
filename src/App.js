import NavBar from "./components/NavBar";
import Header from "./components/Header";
import {  applyMiddleware, createStore } from "redux";
import allReducers from "./reducers";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk' ;
import FetchData from "./components/FetchData";
const store =createStore(allReducers,applyMiddleware(thunk))
function App() {
  return (
    <Provider store={store}>
    <div className="App">
         
     <NavBar/>
     <Header/>
     <FetchData/>
    </div></Provider>
  );
}

export default App;
