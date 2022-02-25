
const initvalue = {
    users: []
}
const useReducer = (state = initvalue, action) => {
console.log("🙉🍀  action", action)
    switch (action.type) {
        case 'user' :{
            const newUsser = [...state.users]
            newUsser.push(action.payload)
            return {
                ...state,users:newUsser
            }
        }
        case 'set_use' :{
            return state
        }
        default : return state
    }
}
export default useReducer;