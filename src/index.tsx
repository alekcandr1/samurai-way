import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { addPost, state } from './redux/state'

ReactDOM.render(<App posts={ state.profilePage.posts }
                     users={ state.dialogsPage.users }
                     messages={ state.dialogsPage.messages }
                     addPost={ addPost }
/>, document.getElementById('root'));