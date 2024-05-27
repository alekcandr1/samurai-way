import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import MainContent from './components/mainContent/MainContent';
import { BrowserRouter } from 'react-router-dom'
import store, { MessagesType, PostType, StateType, UserType } from './redux/state';

type AppProps = {
    state: StateType
    dispatch: ( action: any ) => void
}

function App( {state, dispatch}: AppProps ) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <MainContent state={ state } dispatch={ dispatch } />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App