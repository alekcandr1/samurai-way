import { v1 } from 'uuid';

export type stateType = {
    profilePage: {
        posts: Array<postType>
    }
    dialogsPage: {
        users: UserType[],
        messages: MessagesType
    }
}

export type postType = {
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
    [key: string]: Array<MessageType>
}

const id1 = v1()
const id2 = v1()
const id3 = v1()
const id4 = v1()
const id5 = v1()
const id6 = v1()

export const state: stateType = {
    profilePage: {
        posts: [
            {id: 1, title: 'Hello, Im Alex Bohon'},
            {id: 2, title: 'a web developer'},
        ]
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
}

export let addPost = (postTitle: string) => {
    state.profilePage.posts = [...state.profilePage.posts, {id: 5, title: postTitle}]
}