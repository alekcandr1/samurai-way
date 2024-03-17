import React from 'react'
import Post from './post/Post';
import NewPost from './newPost/NewPost';
import s from './Posts.module.css'

const Posts = () => {
    return (
        <>
            <h3>Posts</h3>
            <NewPost message={ '' } />
            <div className={s.posts}>
                <Post message="Hello, Im Alex Bohon" />
                <Post message="a web developer" />
            </div>


        </>
    )
        ;
};

export default Posts;