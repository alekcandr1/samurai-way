import { v1 } from 'uuid';
import profileReducer from './profile-reducer';

export type StateType = {
    profilePage: {
        posts: PostType[]
    },
    dialogsPage: {
        users: UserType[],
        messages: MessagesType
    }
}

export type PostType = {
    id: number,
    title: string
}

export type UserType = {
    id: string
    name: string
}

export type MessageType = {
    id: string,
    title: string
}

export type MessagesType = {
    [key: string]: MessageType[]
}

const id1 = v1()
const id2 = v1()
const id3 = v1()
const id4 = v1()
const id5 = v1()
const id6 = v1()

export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    subscribe: ( observer: () => void ) => void
    dispatch: ( action: ActionsType ) => any
    getState: () => StateType
}

export type ActionsType =
    | addPostType
    | getStateACType
    | addMessageACType

type addPostType = ReturnType<typeof addPostAC>
type getStateACType = ReturnType<typeof getStateAC>
type addMessageACType = ReturnType<typeof addMessageAC>


export const addPostAC = ( newPost: string ) => {
    return {type: 'ADD-POST', postTitle: newPost} as const
}
export const getStateAC = () => {
    return {type: 'GET-STATE'} as const
}
export const addMessageAC = ( userID: string, newMessage: string ) => {
    return {type: 'ADD-MESSAGE', userID: userID, newMessage: newMessage} as const
}

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, title: 'Hello, Im Alex Bohon'},
                {id: 2, title: 'a web developer'},
            ],
        },
        dialogsPage: {
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
                [id2]: [{id: '1', title: 'i\'m developer Bob'}],
                [id3]: [{id: '1', title: 'i\'m developer Viktor'}],
                [id4]: [{id: '1', title: 'i\'m developer Andrey'}],
                [id5]: [{id: '1', title: 'i\'m developer Ilya'}],
                [id6]: [{id: '1', title: 'i\'m developer Ann'}],
            },
        }
    },
    _callSubscriber() {
        console.log('Subscriber is not exist')
    },
    subscribe( observer ) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch( action ) {
        this._state = profileReducer(this._state, action)
        this._callSubscriber()


        // this._state = profileReducer(this._state, action)

        //     if (action.type === 'ADD-POST') {
        //         return this.addPost(action.postTitle)
        //     } else if (action.type === 'GET-STATE') {
        //         return this.getState()
        //     } else if (action.type === 'ADD-MESSAGE') {
        //         return this.addMessage(action.userID, action.newMessage)
        //     }
        //     return this._state as StateType
        // }
    }
}

export default store