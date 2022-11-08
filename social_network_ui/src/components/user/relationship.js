import {User} from "./user";
import React from 'react';

export const RelationshipFromUser = ({relationship}) => {
    return (
        <div className={"user"}>
            <User user={relationship.user2}/>
        </div>
    )
}

export const RelationshipToUser = ({relationship}) => {
    return (
        <div className={"user"}>
            <User user={relationship.user1}/>
        </div>
    )
}

