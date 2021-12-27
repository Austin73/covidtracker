export const setCovidData=(data)=>{
    return{
        type:"SETCOVIDDATA",
        payload:data
    }
}
export const isDataLoading=()=>{
    return{
        type: "ISDATALOADING"
    }
}
export const isDataLoaded=()=>{
    return{
        type: "ISDATALOADED"
    }
}