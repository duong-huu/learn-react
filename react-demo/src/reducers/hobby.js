
const initialState = {
    list : [],
    action:null,
}
const hobbyReducer = (state = initialState,action) => {

    switch (action.type) {
        case 'add_hobby': {
            const NewList = [...state.list]
            NewList.push(action.payload)
            return {
                ...state,list:NewList
            }
        }
        case 'set_active_hobby': {
            return {
                ...state,action:action.payload
            }
        }     

        default:
            return state
    }
}
export default hobbyReducer;