import './user.css'
import React from 'react';

export const User = ({user}) => {
    return (
        <div className={"user"}>
            <h4 className={"nickname"}>{user.nickname}</h4>
        </div>
    )
}
