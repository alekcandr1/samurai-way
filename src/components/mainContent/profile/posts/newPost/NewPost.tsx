import React from 'react';

type NewPostType = {
    message: string
}

const NewPost = ( props: NewPostType ) => {

    let postMessageRef = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        alert(postMessageRef.current?.value)
    }

    return (
        <>
            <div>New post:</div>
            <div>
                <textarea ref={ postMessageRef }></textarea>
                <button onClick={ addPost }>Add post</button>
            </div>
        </>
    )
        ;
};

export default NewPost;