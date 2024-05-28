import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

type TextareaProps = {
    value: string
    onChange: (title: string)=>void
};

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(( {value, onChange}, ref ) => {
    return (
        <div>
            <textarea ref={ ref } value={ value } onChange={ (e: ChangeEvent<HTMLTextAreaElement>)=> onChange(e.currentTarget.value) } />
        </div>
    );
});

export default Textarea;
