import React from 'react'
import classes from './Profile.module.css'
import Posts from './posts/Posts';
import { ProfileInfo } from './profileInfo/ProfileInfo';

type ProfileProps = {
    posts: Array<string>
}

const Profile = ( {posts}: ProfileProps ) => {
    return (
        <div>
            <ProfileInfo />
            <Posts posts={ posts }/>
        </div>
    );
};

export default Profile;