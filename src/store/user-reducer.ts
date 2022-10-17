import {v1} from "uuid";
import {constants} from "buffer";


type ActionType =ReturnType<typeof setUser | typeof removeUser | typeof setUserWithName | typeof turnUser>
export type UserType = {
    id: string
    name?: string
    isSpy: boolean
}
type StateType = {
    users: UserType[],
    turn:number
}
let initialState = {
    users: [{
        id: v1(),
        name: "@TEST-USER@",
        isSpy:Boolean(Math.round(Math.random()))
    }],
    turn:0
}


export const userReducer = (state: StateType = initialState, action: ActionType): StateType => {

    switch (action.type) {
        case "SET-USER-WITH-NAME": {
            let spy = state.users.find(u => u.isSpy === true)

            if (spy) {
                return {...state, users: [...state.users, {id: v1(), name: action.name, isSpy: false}]}
            } else {
                return {
                    ...state,
                    users: [...state.users, {id: v1(), name: action.name, isSpy: Boolean(Math.round(Math.random()))}]
                }

            }
        }

        case 'SET-USER':{
            let newUser={id: v1(), isSpy: false,name:"Alex"}
            let secondVariable={...state,users: [...state.users,newUser]}
            let spy = state.users.find(u => u.isSpy === true)
            const randomIndex=Math.floor(Math.random()*state.users.length)

            return {...secondVariable,users:secondVariable.users.map((user,i)=>{
                return {...user, isSpy: i === randomIndex}
                })}




            }

        case "REMOVE-USER":{
        if (state.users.length>1){
            return  {...state,users:state.users.slice(1)}
        }
        else {
           return state
        }
        }

        case "TURN-USER":{
            if (state.turn===state.users.length-1){
                return state
            }
            else {
                return {...state,turn:state.turn+1}
            }
        }

        default: {
            return state
        }
    }
}

export let setUserWithName = (name: string) => {
    return {
        type: "SET-USER-WITH-NAME",
        name
    } as const
}

export const setUser=()=>{
    return {type:'SET-USER'} as const
}
export const removeUser=()=>{
    return  {
        type:"REMOVE-USER",

    } as const
}

export  const turnUser=()=>{
    return {
        type:"TURN-USER"
    } as const
}

