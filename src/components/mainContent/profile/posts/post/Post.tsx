import React from 'react';
import classes from './Post.module.css';
import avatar from '../../../../../assets/images/avatar.jpg'
import { postType } from '../../../../../redux/state';

type PostPropsType = {
    post: postType
}
const Post = ( {post}: PostPropsType ) => {
    return (
        <div className={ classes.item }>
            <img src={ avatar } alt=""/>
            { post.title }
        </div>
    );
};

export default Post;