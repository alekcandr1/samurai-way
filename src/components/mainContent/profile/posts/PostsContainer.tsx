import React from 'react'
import Post from './post/Post';
import NewPost from './newPost/NewPost';
import s from './Posts.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType, ProfilePageType } from '../../../../redux/redux-store';
import Posts from './Posts';
import { addPostAC } from '../../../../redux/profile-reducer';

type PostsContainerType = {}

const PostsContainer = ( props: PostsContainerType ) => {
    let profilePage = useSelector<AppRootStateType, ProfilePageType>(state => state.profilePage)
    let dispatch = useDispatch()

    const onAddPost = ( newPost: string ) => {
        dispatch(addPostAC(newPost))
    }
    return (
        <Posts state={ profilePage } onAddPost={ onAddPost } />
    )
        ;
};

export default PostsContainer;