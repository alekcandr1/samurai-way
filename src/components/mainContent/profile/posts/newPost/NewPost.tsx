import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { addPostAC } from '../../../../../redux/state';

type NewPostType = {
    dispatch: ( action: any ) => void
}

const NewPost = ( {dispatch}: NewPostType ) => {
    const [title, setTitle] = useState<string>('')

    let postMessageRef = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        let newPost = postMessageRef.current?.value
        newPost && dispatch(addPostAC(newPost))
        setTitle('')
    }
    let onClickHandler = () => {
        addPost()
    }
    let onKeyHandler = ( e: KeyboardEvent<HTMLTextAreaElement> ) => {
        e.key === 'Enter' && addPost()
    }
    let onChangeHandler = ( e: ChangeEvent<HTMLTextAreaElement> ) => {
        setTitle(e.currentTarget.value)
    }

    return (
        <>
            <div>New post:</div>
            <div>
                <textarea ref={ postMessageRef } value={ title }
                          onChange={ onChangeHandler }
                          onKeyUp={ onKeyHandler }></textarea>
                <br />
                <button onClick={ onClickHandler }>Add post</button>
            </div>
        </>
    )
}

export default NewPost;