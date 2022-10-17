import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../store/store";
import {RandomArr, StateType} from "../store/main-reducer";
import SuperButton from "./SuperComponents/SuperButton";

import {turnUser, UserType} from "../store/user-reducer";
import styles from './Users/Usr.module.css';
import Timer from "./Timer";

const Content = () => {
    const wordStore = useSelector<RootStateType, string>(state => state.wordsStore.resultWord)
    const userStore = useSelector<RootStateType, UserType[]>(state1 => state1.userStore.users)
    const userTurn = useSelector<RootStateType, number>(state => state.userStore.turn)
    const dispatch = useDispatch()

    let [show, setShow] = useState(true)
    const [spy, setSpy] = useState<string>("")

    const startGame = () => {
        if (userStore.length - 1 > 4) {
            dispatch(RandomArr())
        } else {
            alert("Add more players,please")
        }
    }


    const changeTurn = () => {
        if (userTurn === userStore.length || !show) {

            return
        } else {
            dispatch(turnUser())
        }

    }

function result(index:number) {
        setTimeout(()=>{
            setSpy((index + 1).toString())
        },60000)

    setShow(false)
}
    const processGame = () => {
        setShow(!show)
        changeTurn()
        showSpy()
    }
    function showSpy() {
        if (userTurn === userStore.length - 1 && userTurn > 3) {

            let newUserStore = userStore.filter(u => u.name !== "@TEST-USER@")

            newUserStore.map((u, index) => {
                u.isSpy ? result(index) : u
            })

        } else {

        }
    }




    return (
        <div>

            <SuperButton name={"Начать игру"} onClick={startGame}/>
            <div onClick={processGame}>
                <h2 className={show ? "" : styles.hide}>{wordStore}</h2>
            </div>

            <p> Player {userTurn}</p>

            <Timer userTurn={userTurn} userStore={userStore}/>
            <h3>Player {spy}</h3>
        </div>
    )


}

export default Content;