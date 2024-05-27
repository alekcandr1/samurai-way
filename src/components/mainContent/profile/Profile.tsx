import React from 'react'
import classes from './Profile.module.css'
import Posts from './posts/Posts';
import { ProfileInfo } from './profileInfo/ProfileInfo';
import { PostType } from '../../../redux/state';

type ProfileProps = {
    posts: Array<PostType>
    dispatch: ( action: any ) => void
}

const Profile = ( {posts, dispatch}: ProfileProps ) => {
    return (
        <div>
            <ProfileInfo />
            <Posts posts={ posts } dispatch={ dispatch } />
        </div>
    );
};

export default Profile;