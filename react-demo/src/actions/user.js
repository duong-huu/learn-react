const addNUser= (hobby) => {
    return {
        type:'user',
        payload : hobby,
    }
}

const setUser = (hobby) => {
    return {
        type:'set_user',
        payload : hobby,
    }
}
export { addNUser, setUser}