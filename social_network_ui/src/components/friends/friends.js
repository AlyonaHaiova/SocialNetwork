import React from 'react';
import {deleteFriend, getFriends, getNotFriends} from "../../services/userService";
import {Friend, Unknown} from "./friend";
import {useEffect, useState} from "react";
import {DeleteButton, MessageButton, SendButton} from "../buttons/button";
import {useNavigate} from "react-router-dom";
import {sendRequest} from "../../services/requestService";
import Navbar from "../navbar/navbar";

export const Friends = () => {

    const user = JSON.parse(localStorage.getItem('user'));
    let navigate = useNavigate();

    const[friends, setFriends] = useState([]);
    const[unknowns, setUnknowns] = useState([]);

    const initFriends = async () => {
        const friendsList = await getFriends(user.id);
        setFriends(friendsList);
    }

    const initUnknowns = async () => {
        const unknownsList = await getNotFriends(user.id);
        setUnknowns(unknownsList);
    }

    const openChat = (friendId) => {
        localStorage.setItem("friendId", friendId);
        navigate("/messages");
    }

    const deleteUserFriend = async (id, friendId) => {
        await  deleteFriend(id, friendId);
        setFriends(await getFriends(user.id));
    }

    const sendRequestForFriendship = async (id, friendId) => {
        await  sendRequest(id, friendId);
        setUnknowns(await getNotFriends(user.id));
    }

    useEffect( () => {
        initFriends();
        initUnknowns();
    }, []);

    const friendsUl = friends.map((f) =>
        <li key={f.id} className={"rowC"}>
            <Friend userId={user.id} friend={f}/>
            <MessageButton handleClick={() => openChat(f.id)}/>
            <DeleteButton handleClick={() => deleteUserFriend(user.id, f.id)}/>
        </li>
    );

    const unknownsUl = unknowns.map((un) =>
        <li key={un.id} className={"rowC"}>
            <Unknown userId={user.id} unknown={un}/>
            <SendButton handleClick={() => sendRequestForFriendship(user.id, un.id)}/>
        </li>
    );

    return (
        <>
       <Navbar/>
        <div className={"row rowC width90 centered"}>
            <div className={"col m6 s6 xs12"}>
                <h3>Your Friends</h3>
                <ul className={"list"}>
                    {friendsUl}
                </ul>
            </div>
            <div className={"col m6 s6 xs12"}>
                <h3>Recommended Users</h3>
                <ul className={"list"}>
                    {unknownsUl}
                </ul>
            </div>
        </div>
        </>
    )
}

