import React from 'react';
import Profile from './profile/Profile';
import Dialogs from './dialogs/Dialogs';
import News from './news/News';
import Music from './music/Music';
import Settings from './settings/Settings';
import classes from './profile/Profile.module.css';
import { Route } from 'react-router-dom';
import { MessagesType, PostType, StateType, UserType } from '../../redux/state';

type MainContentProps = {
    state: StateType
    dispatch: ( action: any ) => void
}

const MainContent = ( {state, dispatch}: MainContentProps ) => {
    return (
        <main className={ classes.content }>
            <Route exact path={ '/profile' }
                   render={ () => <Profile posts={ state.profilePage.posts } dispatch={ dispatch } /> } />
            <Route exact path={ '/dialogs' } render={ () => <Dialogs users={ state.dialogsPage.users }
                                                                     messages={ state.dialogsPage.messages } /> } />
            <Route exact path={ '/news' } render={ () => <News /> } />
            <Route exact path={ '/music' } render={ () => <Music /> } />
            <Route exact path={ '/settings' } render={ () => <Settings /> } />

        </main>

    );
};

export default MainContent;