import React, { useState } from 'react';
import s from './Dialogs.module.css';
import { Dialog } from './Dialog';
import { MessagesType, UserType } from '../../../redux/state';
import { Route } from 'react-router-dom';


type DialogsPropsType = {
    messages: MessagesType
    users: UserType[]
}

const Dialogs = ( {users, messages}: DialogsPropsType ) => {
    const [currentUserId, setCurrentUserId] = useState(users[0].id)

    const onClickHandler = ( userId: string ) => {
        setCurrentUserId(userId)
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
                        <Route path={ '/dialogs/' + currentUserId } render={ () => {
                            return messages[currentUserId].map(( mes, index ) => {

                                return <div key={ mes.id } className={ s.messageItem }>{ mes.title }</div>
                            })
                        }
                        } />
                        // users.map(( user, index ) => user.id === currentUserId
                        //     ? (
                        //         <div key={ index }>
                        //             { messages[user.id] && messages[user.id].map(mes => {
                        //                 return (
                        //                     <Route path={ '/' + mes.id } render={ () => {
                        //                         return <div key={ mes.id }
                        //                                     className={ s.messageItem }>{ mes.title }</div>
                        //                     } }
                        //                     />
                        //                     // <div key={ mes.id } className={ s.messageItem }>{ mes.title }</div>
                        //                 )
                        //             }) }
                        //         </div>
                        //     )
                        //     : 'OK '
                        // )
                    }

                </div>
            </div>
        </div>
    )
        ;
};

export default Dialogs;