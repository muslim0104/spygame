import React from 'react';
type ButtonPropsType= {
    name: string
    onClick: (...params:any) => void
}
const SuperButton = (props:ButtonPropsType) => {
    return (
        <div>
           <button onClick={props.onClick}> {props.name}</button>
        </div>
    );
};

export default SuperButton;