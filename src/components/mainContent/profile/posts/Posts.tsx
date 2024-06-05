import React from 'react'
import Post from './post/Post';
import NewPost from './newPost/NewPost';
import s from './Posts.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType, ProfilePageType } from '../../../../redux/redux-store';

type ProfileProps = {
    state: ProfilePageType
    onAddPost: (newPost: string) => void
}

const Posts = ( {onAddPost, state}: ProfileProps ) => {

    return (
        <>
            <h3>Posts</h3>
            <NewPost onAddPost={ onAddPost } />
            <div className={ s.posts }>
                { state.posts.map(( post, index ) => <Post key={ index } post={ post } />) }
            </div>
        </>
    )
        ;
};

export default Posts;