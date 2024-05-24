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
    posts: Array<PostType>
    messages: MessagesType
    users: UserType[]
    addPost: ( title: string ) => void

}

const MainContent = ( {posts, messages, users, addPost, state}: MainContentProps ) => {
    return (
        <main className={ classes.content }>
            <Route exact path={ '/profile' } render={ () => <Profile posts={ posts } addPost={ addPost } /> } />
            <Route exact path={ '/dialogs' } render={ () => <Dialogs users={ users } messages={ messages } /> } />
            <Route exact path={ '/news' } render={ () => <News /> } />
            <Route exact path={ '/music' } render={ () => <Music /> } />
            <Route exact path={ '/settings' } render={ () => <Settings /> } />

        </main>

    );
};

export default MainContent;