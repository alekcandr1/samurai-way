import React from 'react';
import s from './Dialogs.module.css';
import { Dialog } from './Dialog';
import { v1 } from 'uuid';
import { string } from 'prop-types';

type MessageType = {
    id: string,
    title: string
}

const id1 = v1()
const id2 = v1()
const id3 = v1()
const id4 = v1()
const id5 = v1()
const id6 = v1()

const users = [
    {id: id1, name: 'Alex'},
    {id: id1, name: 'Bob'},
    {id: id3, name: 'Viktor'},
    {id: id4, name: 'Andrey'},
    {id: id5, name: 'Ilya'},
    {id: id6, name: 'Ann'},
]
const messages = {
    [id1]: [{id: '1', title: 'Hi'},
        {id: '2', title: 'i\'m developer Alex'},
        {id: '3', title: 'how are you?..'}],
    [id2]: [{id: '2', title: 'i\'m developer Bob'}],
    [id3]: [{id: '3', title: 'i\'m developer Viktor'}],
}

const Dialogs = () => {
    return (
        <div>
            <h3>Dialogs</h3>
            <div className={ s.dialogs }>
                <div className={ s.friends }>
                    {users.map(user=>{
                        return <Dialog id={user.id} name={user.name}/>
                    })}
                </div>
                <div className={ s.messages }>
                    { messages[id1].map(mes=>{
                        return <div className={ s.messageItem }>{ mes.title }</div>
                    }) }



                    {/*<div className={ s.messageItem }>Hi</div>*/}
                    {/*<div className={ s.messageItem }>i'm developer</div>*/}
                    {/*<div className={ s.messageItem }>how are you?..</div>*/}
                </div>
            </div>
        </div>
    );
};

export default Dialogs;