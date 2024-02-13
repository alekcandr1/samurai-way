import React from 'react'
import classes from './Profile.module.css'
import Posts from './posts/Posts';

const Profile = () => {
    return (
        <main className={ classes.content }>
            <div>
                Main img
            </div>
            <div>
                Ava + description
            </div>
           <Posts />
        </main>
    );
};

export default Profile;