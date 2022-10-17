import {removeUser, setUser, turnUser, userReducer} from "./user-reducer";
import {v1} from "uuid";

test("should be changed", () => {
    let initialState = {
        users: [{
            id: v1(),
            name: "",
            isSpy: false
        }],
        turn:4
    }


   let state=userReducer(initialState,turnUser())

    expect(state.turn-1).toBe(1)
    expect(state.turn).toBe(2)
})


