import { combineReducers, legacy_createStore } from 'redux';
import profileReducer from './profile-reducer';
import dialogReducer from './dialog-reducer';

export type ProfilePageType = {
    posts: PostType[]
}
export type DialogsPageType = {
    users: UserType[],
    messages: MessagesType
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

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer
})

let store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store

export default store