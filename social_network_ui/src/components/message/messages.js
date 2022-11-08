import {Message} from "./message";
import React, {useEffect, useState} from "react";
import {getChat, sendMessage} from "../../services/messageService";
import Navbar from "../navbar/navbar";
import './message.css';

export const Messages = () => {

    const user = JSON.parse(localStorage.getItem('user'));
    const friendId = localStorage.getItem("friendId");

    const[text, setText] = useState("");
    const[messages, setMessages] = useState([]);

    const initChat = async () => {
        const messagesList = await getChat(user.id, friendId);
        setMessages(messagesList);
    }

    const isSender = (message) => {
        return message.sender.id === user.id;
    }

    useEffect( () => {
        initChat();
    }, []);

    function validateForm() {
        return text.length > 0;
    }


    async function send(event) {
        event.preventDefault();
        await sendMessage(user.id, friendId, text);
        setMessages(await getChat(user.id, friendId));
        setText("");
        event.target.reset();
    }

    const messagesUl = messages.map((m) =>
        <li key={m.id}>
            <Message message={m} isSender={isSender(m)}/>
        </li>
    );

    return (
        <>
            <Navbar/>
        <div className={"row width90 centered fl-col"}>
            <div className={"messages"}>
                <ul className={"list centered"}>
                    {messagesUl}
                </ul>
            </div>

            <div>
                <form onSubmit={send} className="col xs8 s6 m6 rowC message-form">
                    <input type={"text"} onChange={(e) => setText(e.target.value)}/>
                    <div className="row send-btn">
                        <div className=" col xs4 s2 m2">
                            <button className="btn-floating waves-effect waves-light blue" disabled={!validateForm()} type={"submit"}>
                                <i className="small material-icons">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}
