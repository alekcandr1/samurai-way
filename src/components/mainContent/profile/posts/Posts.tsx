import React from 'react'
import Post from './post/Post';
import NewPost from './newPost/NewPost';
import s from './Posts.module.css'

type ProfileProps = {
    posts: Array<string>
}

const Posts = ({posts}: ProfileProps) => {
    return (
        <>
            <h3>Posts</h3>
            <NewPost message={ '' } />
            <div className={ s.posts }>
                { posts.map(post => <Post message={ post } />) }
            </div>


        </>
    )
        ;
};

export default Posts;