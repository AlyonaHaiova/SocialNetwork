import React, {useState} from 'react';
import {register} from "../../services/userService";
import {Link, Navigate} from "react-router-dom";
import './authorization.css';

export const Registration = () => {

    const [user, setUser] = useState(null);
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return nickname.length > 0 && email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const userData = {nickname: nickname, email: email, password: password}
        const user = await register(userData);
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
    }

    if(user != null) {
        return(<Navigate to={"/profile"}/>);
    }
    return (
        <div className={"container"}>
            <div className="row authorization-form" >
                <form onSubmit={handleSubmit} className="col xs12 s12 m8">
                    <div className="row">
                        <div className="input-field col xs10 s6 m6">
                            <input placeholder="Nickname" id="nickname" type="text"
                                       onChange={(e) => setNickname(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col xs10 s6 m6">
                            <input placeholder="Email" id="email" type="email"
                                   onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col xs10 s6 m6">
                            <input placeholder="Password" id="password" type="password"
                                   onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col xs10 s6 m6">
                            <button type="submit" className={"center auth-btn"} disabled={!validateForm()}>Register</button>
                        </div>
                    </div>
                </form>
            </div>
            <Link to={"/login"} className="waves-effect waves-light btn-small">I`m already registered</Link>
        </div>
        );
}
