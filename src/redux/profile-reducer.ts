import { ProfilePageType } from './redux-store';

export type ProfilePageActionsType =
    | addPostType
    | getStateACType

type addPostType = ReturnType<typeof addPostAC>
type getStateACType = ReturnType<typeof getStateAC>

export const addPostAC = ( newPost: string ) => {
    return {type: 'ADD-POST', postTitle: newPost} as const
}
export const getStateAC = () => {
    return {type: 'GET-STATE'} as const
}

let initialState: ProfilePageType = {
    posts: [
        {id: 1, title: 'Hello, Im Alex Bohon'},
        {id: 2, title: 'a web developer'},
    ],
}

export const profileReducer = ( state: ProfilePageType = initialState, action: ProfilePageActionsType ) => {
    switch (action.type) {
        case 'ADD-POST':
            return  {
                    ...state,
                    posts: [...state.posts, {id: 123, title: action.postTitle}]
                }
        default:
            return state
    }
}

export default profileReducer