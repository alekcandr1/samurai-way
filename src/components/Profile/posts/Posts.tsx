import React from 'react'
import classes from './Posts.module.css'
import Post from './post/Post';
import NewPost from './newPost/NewPost';

const Posts = () => {
    return (
        <>
            <h3>Posts</h3>
            <NewPost/>
            <Post message="Hello, Im Alex Bohon"/>
            <Post message="a web developer"/>


        </>
    )
        ;
};

export default Posts;