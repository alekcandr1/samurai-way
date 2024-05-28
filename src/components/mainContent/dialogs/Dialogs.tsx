import React, { useRef, useState } from 'react';
import s from './Dialogs.module.css';
import { Dialog } from './Dialog';
import { ActionsType, addMessageAC, addPostAC, MessagesType, UserType } from '../../../redux/state';
import { Route } from 'react-router-dom';
import { Button } from '../../Button';
import Textarea from '../../Textarea';

type DialogsPropsType = {
    messages: MessagesType
    users: UserType[]
    dispatch: ( action: ActionsType ) => void

}

const Dialogs = ( {users, messages, dispatch}: DialogsPropsType ) => {
    const [currentUserId, setCurrentUserId] = useState('0')
    const [textNewMessage, setTextNewMessage] = useState('')
    const onChangeTextArea = (title: string) => {
        setTextNewMessage(title)
    }
    const onClickHandler = ( userId: string ) => {
        setCurrentUserId(userId)
    }
    let messageRef = useRef<HTMLTextAreaElement>(null);
    const addMessageHandler = () => {
        let newMessage = messageRef.current?.value
        newMessage && dispatch(addMessageAC(currentUserId, newMessage))
        setTextNewMessage('')
    }

    return (
        <div>
            <h3>Dialogs</h3>

            <div className={ s.dialogs }>
                <div className={ s.friends }>
                    { users.map(( user, index ) => {
                        return <Dialog key={ index } id={ user.id } name={ user.name }
                                       onClick={ () => onClickHandler(user.id) } />
                    }) }
                </div>
                <div className={ s.messages }>
                    {
                        users.map(( user, index ) => {
                            return <Route key={ index } path={ '/dialogs/' + user.id } render={ () => {
                                return <div>
                                    {
                                        messages[user.id].map(( mes ) => {
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