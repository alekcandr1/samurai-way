import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import MainContent from './components/mainContent/MainContent';
import { BrowserRouter } from 'react-router-dom'

type AppProps = {}

function App( props: AppProps ) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <MainContent />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App