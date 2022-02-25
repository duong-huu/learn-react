import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addNewHobby, setActiveHobby } from '../actions/hobby';
import { addNUser } from '../actions/user';
import HobbyList from './HobbyList';
const HomePage = () => {
    const hobbyList = useSelector(state => state.hobby.list)
    const actionID = useSelector(state => state.hobby.action)

    const dispatch = useDispatch()

    const user = useSelector(state => state.user.users)
    console.log("🙉🍀  user", user)

    const hanldeAddhobby = () => {
        const Newhobby = {
            title: 'Đã thêm'
        }
        const action = addNewHobby(Newhobby)
        dispatch(action)
    }
    const HanldeActiveHobby = (value, index) => {
        const action = setActiveHobby(index)
        dispatch(action)
    }

    const HanldClickUse = () => {
        const action = addNUser('abc')
        dispatch(action)
    }
    return (
        <div style={{display:'flex'}}>
            <div >
                <button onClick={hanldeAddhobby}>
                    Add hobby(Toi cung sua lai la chuc nang moi New Nhung)
                </button>

                <HobbyList List={hobbyList}
                    actionID={actionID}
                    OnHanldeActiveHobby={HanldeActiveHobby}
                />

            </div>
            <div style={{marginLeft:20}}>
                <button onClick={HanldClickUse}>Người dùng</button>
            </div>
            {
                user.map(x => <div>{x}</div>)
            }
        </div>
    );
};

export default HomePage;