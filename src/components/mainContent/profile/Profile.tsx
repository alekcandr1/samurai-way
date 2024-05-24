import React from 'react'
import classes from './Profile.module.css'
import Posts from './posts/Posts';
import { ProfileInfo } from './profileInfo/ProfileInfo';
import { PostType } from '../../../redux/state';

type ProfileProps = {
    posts: Array<PostType>
    addPost: (title: string) => void

}

const Profile = ( {posts, addPost}: ProfileProps ) => {
    return (
        <div>
            <ProfileInfo />
            <Posts posts={ posts } addPost={ addPost } />
        </div>
    );
};

export default Profile;