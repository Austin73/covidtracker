

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
export const setNavButton=(number)=>{
    return{
        type: "SETNAVBUTTON",
        payload:number
    }
}