import type { ActionsType, StateType } from './state';

export const addPostAC = ( newPost: string ) => {
    return {type: 'ADD-POST', postTitle: newPost} as const
}
export const getStateAC = () => {
    return {type: 'GET-STATE'} as const
}
export const addMessageAC = ( userID: string, newMessage: string ) => {
    return {type: 'ADD-MESSAGE', userID: userID, newMessage: newMessage} as const
}

export const profileReducer = ( state: StateType, action: ActionsType ) => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                profilePage: {
                    ...state.profilePage,
                    posts: [...state.profilePage.posts, {id: 123, title: action.postTitle}]
                }
            };
        case 'ADD-MESSAGE':
            return {
                ...state,
                dialogsPage: {
                    ...state.dialogsPage,
                    messages: {...state.dialogsPage.messages, [action.userID]: [...state.dialogsPage.messages[action.userID], {id: '123', title: action.newMessage}]}
                }
            };
        default:
            return state
    }
}

export default profileReducer