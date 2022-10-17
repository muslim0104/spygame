import React, {useState} from 'react';
import User from "./User";
import {useSelector} from "react-redux";
import {RootStateType} from "../../store/store";
import {UserType} from "../../store/user-reducer";

const Main = () => {
    const usersStore = useSelector<RootStateType, UserType[]>(state => state.userStore.users)
    const [show,setShow]=useState<boolean>(false)
    usersStore.map(u=><User id={u.id} isSpy={u.isSpy}/>)
    return (
        <div>

            <div onClick={()=>setShow(true)}>
                <div></div>
                <p>Игроки</p>
            </div>
            {show ? <User id={""} isSpy={false}/> : null}

        </div>
    );
};

export default Main;