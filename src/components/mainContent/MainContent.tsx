import React from 'react';
import Profile from './profile/Profile';
import Dialogs from './dialogs/Dialogs';
import News from './news/News';
import Music from './music/Music';
import Settings from './settings/Settings';
import classes from './profile/Profile.module.css';
import { BrowserRouter, Route } from 'react-router-dom';


const MainContent = () => {
    return (

            <main className={ classes.content }>
                <Route exact path={'/profile'} component={ Profile } />
                <Route exact path={'/dialogs'} component={ Dialogs } />
                <Route exact path={'/news'} component={ News } />
                <Route exact path={'/music'} component={ Music } />
                <Route exact path={'/settings'} component={ Settings } />
            </main>

    );
};

export default MainContent;