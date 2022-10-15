import React, {ChangeEvent} from 'react';

type  SuperInputPropsType={
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void
    value:string
}

const SuperInput = (props:SuperInputPropsType) => {
    return (
        <div>
        <input onChange={props.onChange} value={props.value}/>
        </div>
    );
};

export default SuperInput;