import React, { useRef, useState } from 'react';
import s from './Dialogs.module.css';
import { Dialog } from './Dialog';
import { Route } from 'react-router-dom';
import { Button } from '../../Button';
import Textarea from '../../Textarea';
import { DialogsPageType } from '../../../redux/redux-store';

type DialogsPropsType = {
    state: DialogsPageType
    onAddMessageHandler: ( currentUserId: string, newMessage: string ) => void
}

const Dialogs = ( {state, onAddMessageHandler}: DialogsPropsType ) => {

    const [currentUserId, setCurrentUserId] = useState('0')
    const [textNewMessage, setTextNewMessage] = useState('')
    const onChangeTextArea = ( title: string ) => {
        setTextNewMessage(title)
    }
    const onClickHandler = ( userId: string ) => {
        setCurrentUserId(userId)
    }
    let messageRef = useRef<HTMLTextAreaElement>(null);
    const addMessageHandler = () => {
        let newMessage = messageRef.current?.value
        newMessage && onAddMessageHandler(currentUserId, newMessage)
        setTextNewMessage('')
    }

    return (
        <div>
            <h3>Dialogs</h3>

            <div className={ s.dialogs }>
                <div className={ s.friends }>
                    { state.users.map(( user, index ) => {
                        return <Dialog key={ index } id={ user.id } name={ user.name }
                                       onClick={ () => onClickHandler(user.id) } />
                    }) }
                </div>
                <div className={ s.messages }>
                    {
                        state.users.map(( user, index ) => {
                            return <Route key={ index } path={ '/dialogs/' + user.id } render={ () => {
                                return <div>
                                    {
                                        state.messages[user.id].map(( mes ) => {
                                            return <div key={ mes.id } className={ s.messageItem }>{ mes.title }</div>
                                        })
                                    }
                                </div>
                            }
                            } />
                        })
                    }
                    <Textarea value={ textNewMessage } ref={ messageRef } onChange={ onChangeTextArea } />
                    <Button title={ 'Send' } onClick={ addMessageHandler } />
                </div>
            </div>
        </div>
    )
};

export default Dialogs;