import React, { useRef, useState } from 'react';
import { ActionsType, addPostAC } from '../../../../../redux/state';
import Textarea from '../../../../Textarea';
import { Button } from '../../../../Button';

type NewPostType = {
    dispatch: ( action: ActionsType ) => void
}

const NewPost = ( {dispatch}: NewPostType ) => {
    const [title, setTitle] = useState<string>('')

    let postMessageRef = useRef<HTMLTextAreaElement>(null);
    const addPost = () => {
        let newPost = postMessageRef.current?.value
        newPost && dispatch(addPostAC(newPost))
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