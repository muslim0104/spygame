import {randomizer} from "../utils/randomizer";
import {log} from "util";

type ActionType = ReturnType<typeof RandomArr>
export  type StateType = {
    randomWord: string[],
    resultWord: string
}

const initialState = {
    randomWord: ["Карандаш", "ручка", "машина", "школа", "книга", "мышка", "клавиатура", "наушники", "стол", "фото", "стул", "степлер",
        "кабель", "монитор", "телевизор", "скобы", "окно", "аккумалятор", "колонки", "язык", "программа", "лист", "диск", "отец", "сестра", "мама", "брат", "человек", "парта", "банка", "танк", "банк"],
    resultWord: ""
}

export function mainReducer(state: StateType = initialState, action: ActionType) {

    switch (action.type) {
        case "RANDOM": {
            let oldWords=[]
            let randomWord = state.randomWord[randomizer(state.randomWord)]
            oldWords.push(randomWord)

            return {...state, resultWord: randomWord}
        }

        default: {
            return state
        }
    }

}

export const RandomArr = () => {
    return {type: "RANDOM"} as const
}

