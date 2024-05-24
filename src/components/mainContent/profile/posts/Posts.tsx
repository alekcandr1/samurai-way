import React from 'react'
import Post from './post/Post';
import NewPost from './newPost/NewPost';
import s from './Posts.module.css'
import { postType } from '../../../../redux/state';

type ProfileProps = {
    posts: Array<postType>
    addPost: (title: string) => void


}

const Posts = ({posts, addPost}: ProfileProps) => {
    return (
        <>
            <h3>Posts</h3>
            <NewPost addPost={ addPost } />
            <div className={ s.posts }>
                { posts.map(post => <Post post={ post } />) }
            </div>
        </>
    )
        ;
};

export default Posts;