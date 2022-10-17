import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../store/store";
import {removeUser, setUser, UserType} from "../../store/user-reducer";
type UserPropsType={
    id:string
    isSpy:boolean
}

const User = (props:UserPropsType) => {
    const usersStore = useSelector<RootStateType, UserType[]>(state => state.userStore.users)
    const dispatch = useDispatch()


    const addPlayer = () => {
        dispatch(setUser())


    }

    const removePlayer=()=>{
       dispatch(removeUser())
    }

    return (
        <div>


            <div>
                <span>
                    <button onClick={addPlayer}>+</button>
                    <span>{usersStore.length-1}</span>
                    <button onClick={()=>removePlayer()}>-</button>
                </span>
                <div>


                </div>
            </div>

        </div>
    );
};

export default User;