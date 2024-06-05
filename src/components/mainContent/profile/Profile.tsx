import React from 'react'
import classes from './Profile.module.css'
import Posts from './posts/Posts';
import { ProfileInfo } from './profileInfo/ProfileInfo';
import PostsContainer from './posts/PostsContainer';

type ProfileProps = {}

const Profile = ( props: ProfileProps ) => {
    return (
        <div>
            <ProfileInfo />
            <PostsContainer />
        </div>
    );
};

export default Profile;