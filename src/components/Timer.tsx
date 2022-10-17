import React, {useState} from 'react';
import {UserType} from "../store/user-reducer";
import {log} from "util";

type PropsType = {
    userTurn: number
    userStore:UserType[]

}



const Timer = (props:PropsType) => {



    return (
        <div>
            <div >Timer</div>
            <h2></h2>

        </div>
    );
};

export default Timer;