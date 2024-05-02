import React from 'react';
import { postType } from '../../../../../redux/state';

type NewPostType = {
    addPost: (title: string) => void

}

const NewPost = ( {addPost}: NewPostType ) => {

    let postMessageRef = React.createRef<HTMLTextAreaElement>()
    let onClickHandler = () => {
        let newPost = postMessageRef.current?.value
        newPost && addPost(newPost)
    }
    return (
        <>
            <div>New post:</div>
            <div>
                <textarea ref={ postMessageRef }></textarea>
                <br />
                <button onClick={ onClickHandler }>Add post</button>
            </div>
        </>
    )
        ;
};

export default NewPost;