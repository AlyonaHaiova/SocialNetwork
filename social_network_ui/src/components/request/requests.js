import {
    acceptRequest,
    cancelRequest,
    declineRequest,
    getRequestsFromUser,
    getRequestsToUser
} from "../../services/requestService";
import {CloseButton, DeleteButton, OkButton} from "../buttons/button";
import {useEffect, useState} from "react";
import {RequestReceived, RequestSent} from "./request";
import React from 'react';
import Navbar from "../navbar/navbar";

export const Requests = () => {

    const user = JSON.parse(localStorage.getItem('user'));

    const[receivedRequests, setReceivedRequests] = useState([]);
    const[sentRequests, setSentRequests] = useState([]);

    const initReceivedRequests = async () => {
        const receivedRequestsList = await getRequestsToUser(user.id);
        setReceivedRequests(receivedRequestsList);
    }

    const initSentRequests = async () => {
        const sentRequestsList = await getRequestsFromUser(user.id);
        setSentRequests(sentRequestsList);
    }

    const accept = async (id, relationshipId) => {
        await  acceptRequest(id,  relationshipId);
        setReceivedRequests(await getRequestsToUser(user.id));
    }

    const decline = async (id, relationshipId) => {
        await  declineRequest(id,  relationshipId);
        setReceivedRequests(await getRequestsToUser(user.id));
    }

    const cancel = async (id, relationshipId) => {
        await  cancelRequest(id,  relationshipId);
        setSentRequests(await getRequestsFromUser(user.id));
    }

    useEffect( () => {
        initReceivedRequests();
        initSentRequests();
    }, []);

    const receivedRequestsUl = receivedRequests.map((r) =>
        <li key={r.id} className={"rowC"}>
           <RequestReceived relationship={r}/>
            <OkButton handleClick={() => accept(user.id, r.id)}/>
            <CloseButton handleClick={() => decline(user.id, r.id)}/>
        </li>
    );

    const sentRequestsUl = sentRequests.map((r) =>
        <li key={r.id} className={"rowC"}>
            <RequestSent relationship={r}/>
            <DeleteButton handleClick={() => cancel(user.id, r.id)}/>
        </li>
    );

    return (
        <>
            <Navbar/>
            <div className={"row rowC width90 centered"}>
            <div className={"col m6 s6 xs12"}>
                <h3>Requests for you</h3>
                <ul className={"list"}>
                    {receivedRequestsUl}
                </ul>
            </div>
            <div className={"col m6 s6 xs12"}>
                <h3>Requests from you</h3>
                <ul className={"list"}>
                    {sentRequestsUl}
                </ul>
            </div>
        </div>
        </>
    )
}
