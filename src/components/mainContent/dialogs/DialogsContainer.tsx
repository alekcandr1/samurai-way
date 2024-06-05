import React from 'react';
import { addMessageAC } from '../../../redux/state';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType, DialogsPageType } from '../../../redux/redux-store';
import Dialogs from './Dialogs';

type DialogsContainerPropsType = {}

const DialogsContainer = ( props: DialogsContainerPropsType ) => {
    let dispatch = useDispatch()
    let dialogsPage = useSelector<AppRootStateType, DialogsPageType>(state => state.dialogsPage)

    const onAddMessageHandler = ( currentUserId: string, newMessage: string ) => {
        dispatch(addMessageAC(currentUserId, newMessage))
    }

    return <Dialogs state={ dialogsPage } onAddMessageHandler={ onAddMessageHandler } />
};

export default DialogsContainer;