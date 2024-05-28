// @flow 
import * as React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import { MouseEvent } from 'react';

type DialogPropsType = {
    id: string,
    name: string,
    onClick: ( userId: string ) => void
};
export const Dialog = ( {id, name, onClick}: DialogPropsType ) => {

    const onClickHandler = ( e: MouseEvent<HTMLDivElement> ) => {
        onClick(id)
        // e.currentTarget.className = s.friend + ' ' + s.friendActive

    }

    return (
        <div className={ s.friend } onClick={ onClickHandler }>
            <NavLink to={ '/dialogs/' + id }>{ name }</NavLink>
        </div>

    );
};