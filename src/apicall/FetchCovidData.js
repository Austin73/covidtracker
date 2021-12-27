import { isDataLoading,setCovidData } from "../actions"



function fetchCovidData(city) {

    return function (dispatch) {
       
        dispatch(isDataLoading())
        
        fetch('https://api.covid19api.com/summary')
        .then(res => {
            console.log(res)
            return res.json()
        })
        .then(data=>{
          
            console.log(data)
            console.log("int fetch funciton")
            dispatch(setCovidData(data))
        })
        
    }
}

export default fetchCovidData