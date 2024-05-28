import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import store from './redux/state'

export const rerenderEntireTree = () => {
    console.log('render App')
    ReactDOM.render(<App state={ store.dispatch({type: 'GET-STATE'})}
                         dispatch={ store.dispatch.bind(store) }
    />, document.getElementById('root'));
};

rerenderEntireTree()

store.subscribe(rerenderEntireTree)