import React, { ChangeEvent, useState } from 'react';
import { PostType } from '../../../../../redux/state';

type NewPostType = {
    addPost: (title: string) => void

}

const NewPost = ( {addPost}: NewPostType ) => {
    const [title, setTitle] = useState<string>('')

    let postMessageRef = React.createRef<HTMLTextAreaElement>()
    let onClickHandler = () => {
        let newPost = postMessageRef.current?.value
        newPost && addPost(newPost)
        setTitle('')
    }
    let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.currentTarget.value)
    }
    return (
        <>
            <div>New post:</div>
            <div>
                <textarea ref={ postMessageRef } value={title} onChange={onChangeHandler}></textarea>
                <br />
                <button onClick={ onClickHandler }>Add post</button>
            </div>
        </>
    )
        ;
};

export default NewPost;