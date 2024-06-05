import { v1 } from 'uuid';
import { DialogsPageType } from './redux-store';

export type ActionsType =
    | addMessageACType

type addMessageACType = ReturnType<typeof addMessageAC>

export const addMessageAC = ( userID: string, newMessage: string ) => {
    return {type: 'ADD-MESSAGE', userID: userID, newMessage: newMessage} as const
}

const id1 = v1()
const id2 = v1()
const id3 = v1()
const id4 = v1()
const id5 = v1()
const id6 = v1()

let initialState: DialogsPageType = {
    users: [
        {id: id1, name: 'Alex'},
        {id: id2, name: 'Bob'},
        {id: id3, name: 'Viktor'},
        {id: id4, name: 'Andrey'},
        {id: id5, name: 'Ilya'},
        {id: id6, name: 'Ann'},
    ],
    messages: {
        [id1]: [
            {id: '1', title: 'Hi'},
            {id: '2', title: 'i\'m developer Alex'},
            {id: '3', title: 'how are you?..'}
        ],
        [id2]: [
            {id: '1', title: 'i\'m developer Bob'},
            {id: '2', title: 'how are you?..'}
        ],
        [id3]: [{id: '1', title: 'i\'m developer Viktor'}],
        [id4]: [{id: '1', title: 'i\'m developer Andrey'}],
        [id5]: [{id: '1', title: 'i\'m developer Ilya'}],
        [id6]: [{id: '1', title: 'i\'m developer Ann'}],
    },
}

const dialogReducer = ( state: DialogsPageType = initialState, action: ActionsType ) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.userID]: [...state.messages[action.userID], {id: '123', title: action.newMessage}]
                }
            }
        default:
            return state

    }
}


export default dialogReducer