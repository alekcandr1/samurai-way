import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import MainContent from './components/mainContent/MainContent';
import { BrowserRouter } from 'react-router-dom';

function App() {

    return (
        <div className="app-wrapper">
            <Header />
            <BrowserRouter>
                <Navbar />
                <MainContent />
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App