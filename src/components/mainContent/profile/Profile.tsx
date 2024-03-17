import React from 'react'
import classes from './Profile.module.css'
import Posts from './posts/Posts';
import { ProfileInfo } from './profileInfo/ProfileInfo';

const Profile = () => {
    return (
        <div>

           <ProfileInfo />
           <Posts />
        </div>
    );
};

export default Profile;