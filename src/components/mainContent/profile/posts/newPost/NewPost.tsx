import React, { ChangeEvent, useState } from 'react';
import { addPostAC, PostType } from '../../../../../redux/state';

type NewPostType = {
    dispatch: ( action: any ) => void
}

const NewPost = ( {dispatch}: NewPostType ) => {
    const [title, setTitle] = useState<string>('')

    let postMessageRef = React.createRef<HTMLTextAreaElement>()
    let onClickHandler = () => {
        let newPost = postMessageRef.current?.value
        newPost && dispatch(addPostAC(newPost))
        setTitle('')
    }
    let onChangeHandler = ( e: ChangeEvent<HTMLTextAreaElement> ) => {
        setTitle(e.currentTarget.value)
    }
    return (
        <>
            <div>New post:</div>
            <div>
                <textarea ref={ postMessageRef } value={ title } onChange={ onChangeHandler }></textarea>
                <br />
                <button onClick={ onClickHandler }>Add post</button>
            </div>
        </>
    )
}

export default NewPost;