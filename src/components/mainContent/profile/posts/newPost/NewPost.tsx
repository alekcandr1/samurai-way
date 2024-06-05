import React, { useRef, useState } from 'react';
import Textarea from '../../../../Textarea';
import { Button } from '../../../../Button';
import { addPostAC, ProfilePageActionsType } from '../../../../../redux/profile-reducer';

type NewPostType = {
    onAddPost: (newPost: string) => void
}

const NewPost = ( {onAddPost}: NewPostType ) => {
    const [title, setTitle] = useState<string>('')

    let postMessageRef = useRef<HTMLTextAreaElement>(null);
    const addPost = () => {
        let newPost = postMessageRef.current?.value
        newPost && onAddPost(newPost)
        setTitle('')
    }
    let onClickHandler = () => {
        addPost()
    }
    const onChangeHandler = () => {
        let currentTextarea = postMessageRef.current?.value
        currentTextarea && setTitle(currentTextarea)
    }

    return (
        <>
            <div>New post:</div>
            <div>
                <Textarea value={ title } ref={ postMessageRef } onChange={ onChangeHandler } />
                <Button title={ 'Add post' } onClick={ onClickHandler } />
            </div>
        </>
    )
}


export default NewPost;