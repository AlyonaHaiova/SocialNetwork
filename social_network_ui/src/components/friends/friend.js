import React from 'react';
import {User} from "../user/user";

export const Friend = ({friend}) => {
    return (
        <User user={friend}/>
    );
}

export const Unknown = ({unknown}) => {
    return (
        <User user={unknown}/>
    );
}

