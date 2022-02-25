const addNewHobby = (hobby) => {
    return {
        type:'add_hobby',
        payload : hobby,
    }
}

const setActiveHobby = (hobby) => {
    return {
        type:'set_active_hobby',
        payload : hobby,
    }
}
export { addNewHobby, setActiveHobby}