import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import store from './redux/redux-store'
import { Provider } from 'react-redux';

export const rerenderEntireTree = () => {
    console.log('render App')

    ReactDOM.render(
        <Provider store={ store }>
            <App />
        </Provider>
        ,
        document.getElementById('root'));
};

rerenderEntireTree()

store.subscribe(rerenderEntireTree)