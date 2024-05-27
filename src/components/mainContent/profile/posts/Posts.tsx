import React from 'react'
import Post from './post/Post';
import NewPost from './newPost/NewPost';
import s from './Posts.module.css'
import { PostType } from '../../../../redux/state';

type ProfileProps = {
    posts: Array<PostType>
    dispatch: ( action: any ) => void
}

const Posts = ( {posts, dispatch}: ProfileProps ) => {
    return (
        <>
            <h3>Posts</h3>
            <NewPost dispatch={ dispatch } />
            <div className={ s.posts }>
                { posts.map(( post, index ) => <Post key={ index } post={ post } />) }
            </div>
        </>
    )
        ;
};

export default Posts;