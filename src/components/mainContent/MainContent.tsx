import React from 'react';
import Profile from './profile/Profile';
import News from './news/News';
import Music from './music/Music';
import Settings from './settings/Settings';
import classes from './profile/Profile.module.css';
import { Route } from 'react-router-dom';
import DialogsContainer from './dialogs/DialogsContainer';

type MainContentProps = {}

const MainContent = ( props: MainContentProps ) => {
    return (
        <main className={ classes.content }>
            <Route exact path={ '/profile' } render={ () => <Profile /> } />
            <Route path={ '/dialogs' } render={ () => <DialogsContainer /> } />
            <Route exact path={ '/news' } render={ () => <News /> } />
            <Route exact path={ '/music' } render={ () => <Music /> } />
            <Route exact path={ '/settings' } render={ () => <Settings /> } />

        </main>

    );
};

export default MainContent;