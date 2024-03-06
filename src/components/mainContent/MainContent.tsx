import React from 'react';
import Profile from './profile/Profile';
import Dialogs from './dialogs/Dialogs';
import classes from './profile/Profile.module.css';

const MainContent = () => {
    return (
        <main className={ classes.content }>
            <Profile />
            <Dialogs />
        </main>
    );
};

export default MainContent;