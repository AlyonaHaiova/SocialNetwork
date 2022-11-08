import {RelationshipToUser, RelationshipFromUser} from "../user/relationship";
import React from 'react';

export const RequestReceived = ({relationship}) => {
    return (
        <div className={"rowC"}>
           <RelationshipToUser relationship={relationship}/>
        </div>
    )
}

export const RequestSent = ({relationship}) => {
    return (
        <div className={"rowC"}>
            <RelationshipFromUser relationship={relationship}/>
        </div>
    )
}
