import React, { EventHandler, SyntheticEvent, useState } from 'react';

type PropsType = {}

const OnOff = () => {
    const [status, setStatus] = useState<boolean>(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        borderRadius: '10px',
        border: '1px solid #000',
        marginLeft: '10px',
        display: 'inline-block',
        paddingLeft: '3px',
        background: status ? 'green' : 'white'


    }
    const offStyle = {
        width: '30px',
        height: '20px',
        borderRadius: '10px',
        border: '1px solid #000',
        marginLeft: '10px',
        display: 'inline-block',
        paddingLeft: '3px',
        background: status ? 'white' : 'red'


    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '10px',
        border: '1px solid #000',
        marginLeft: '10px',
        display: 'inline-block',
        background: status ? 'green' : 'red'
    }

    function onClickHandler() {
        setStatus(!status)
    }

    return (
        <div>
            <div style={ onStyle } onClick={ onClickHandler }>On</div>
            <div style={ offStyle } onClick={ onClickHandler }>Off</div>
            <div style={ indicatorStyle }></div>
        </div>
    );
};

export default OnOff;