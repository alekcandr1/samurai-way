import React, { useRef, useState } from 'react';
import s from './Dialogs.module.css';
import { Dialog } from './Dialog';
import { ActionsType, addMessageAC, addPostAC, MessagesType, UserType } from '../../../redux/state';
import { Route } from 'react-router-dom';
import { Button } from '../../Button';
import Textarea from '../../Textarea';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType, DialogsPageType } from '../../../redux/redux-store';

type DialogsPropsType = {
    // messages: MessagesType
    // users: UserType[]
    // dispatch: ( action: ActionsType ) => void
}

const Dialogs = ( props: DialogsPropsType ) => {
    let dispatch = useDispatch()
    let dialogsPage = useSelector<AppRootStateType, DialogsPageType>(state => state.dialogsPage)

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
                    { dialogsPage.users.map(( user, index ) => {
                        return <Dialog key={ index } id={ user.id } name={ user.name }
                                       onClick={ () => onClickHandler(user.id) } />
                    }) }
                </div>
                <div className={ s.messages }>
                    {
                        dialogsPage.users.map(( user, index ) => {
                            return <Route key={ index } path={ '/dialogs/' + user.id } render={ () => {
                                return <div>
                                    {
                                        dialogsPage.messages[user.id].map(( mes ) => {
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