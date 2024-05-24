import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import store from './redux/state'

export const rerenderEntireTree = () => {
    console.log('render App')
    ReactDOM.render(<App state={ store.getState() }
                         posts={ store.getState().profilePage.posts }
                         users={ store._state.dialogsPage.users }
                         messages={ store._state.dialogsPage.messages }
                         addPost={ store.addPost.bind(store) }

    />, document.getElementById('root'));
};

rerenderEntireTree()

store.subscribe(rerenderEntireTree)