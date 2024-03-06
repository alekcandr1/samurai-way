import React from 'react'
import classes from './Profile.module.css'
import Posts from './posts/Posts';

const Profile = () => {
    return (
        <div>
            <div>
                Main img
            </div>
            <div>
                Ava + description
            </div>
           <Posts />
        </div>
    );
};

export default Profile;