const DataReducer=(state=false
,action) =>{

    switch(action.type)
    {
        case 'ISDATALOADED':
            let newState=true;
            return newState
        default:
            return state
    }
}

export default DataReducer