const CovidDataReducer=(state={
    Data:{},
    isLoading:false
},action) =>{

    switch(action.type)
    {
        case 'SETCOVIDDATA':
            return {
                Data:action.payload,
                isLoading:false
            }
        case "ISDATALOADING":
            return{
                ...state,
                isLoading:true
            }
        default:
            return state
    }
}

export default CovidDataReducer