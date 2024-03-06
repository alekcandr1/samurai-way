import React from 'react';
import classes from './Post.module.css';
import avatar from '../../../../../assets/images/avatar.jpg'

type PostPropsType = {
    message: string
}
const Post = ( {message}: PostPropsType ) => {
    return (
        <div className={ classes.item }>
            <img src={ avatar } alt=""/>
            { message }
        </div>
    );
};

export default Post;