const ButtonReducer=(state=1,action) =>{

    switch(action.type)
    {
        case 'SETNAVBUTTON':
            let newState=state;
            newState=action.payload;
            return newState;
        default:
            return state
    }
}

export default ButtonReducer