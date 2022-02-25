# Redux  - React- redux
    - useSelector()
    - useDispatch()

# Setup redux store

1. `Reducers`
    - Tạo ra các function , có cái swhich ,với action.type thì  return state == ",..."  
2. `Root reducer` 
    - import {combineRuducers} from "redux"
    - Gọi all hàm `Reducers` ở trên 
3. `Store`
    - import [`Root Reducer`] về dùng
4. `Action creators`
    - Tạo ra các cái function để return payload: value ,....

# Setup redux provider
    - Bọc provider cho <App /> thêm key store={`Store`}

# Connect to redux store from component 
    - Using the two hooks
    - useSelect : lấy giá trị về
    - useDispatch : Gửi action lên