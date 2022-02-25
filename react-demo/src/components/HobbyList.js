import React from 'react';

const HobbyList = ({List,actionID,OnHanldeActiveHobby}) => {
    
    const handleClick = (value,index) => {
        if (OnHanldeActiveHobby){
            OnHanldeActiveHobby(value,index)
        }
    }
  
    return (
        <div>
            HobbyList : 
            {
                List.length == 0 
                ? <span> - Không có gì</span>
                : List.map((value,index) => {
                    return (
                        <div key={index} 
                        onClick={() => handleClick(value,index)}
                        style={{color: actionID === index? 'red' : 'green',cursor:'pointer'}}
                        >
                            {value.title} {index} 
                        </div>
                    )
                })
            }
        </div>
    );
};

export default HobbyList;