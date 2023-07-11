const INITIAL_STATE={
    themeType:{}
}
const mainPageReducers = (state = INITIAL_STATE, action) => {
    switch(action){
        case "SET_CURRENT_THEME":
            return{...state,themeType:action.payload}
        default :
        return state;
    }
}