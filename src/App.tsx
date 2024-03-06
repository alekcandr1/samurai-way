import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import OnOff from './components/kabzda/OnOff';
import MainContent from './components/mainContent/MainContent';

function App() {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <MainContent />
            <Footer />
            {/*<OnOff />*/}
        </div>
    );
}

export default App