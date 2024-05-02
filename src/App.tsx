import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import MainContent from './components/mainContent/MainContent';
import { BrowserRouter } from 'react-router-dom'
import { MessagesType, postType, UserType } from './redux/state';

type AppProps = {
    posts: Array<postType>
    messages: MessagesType
    users: UserType[]
    addPost: (title: string) => void
}

function App( {posts, users, messages, addPost}: AppProps ) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <MainContent posts={ posts } users={ users } messages={ messages } addPost={ addPost } />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App