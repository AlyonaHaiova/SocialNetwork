import React, {useState} from 'react';
import {login} from "../../services/userService";
import './authorization.css';
import {Link, Navigate} from "react-router-dom";

export const Login = () => {

    const [user, setUser] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const userData = {email: email, password: password}
        const user = await login(userData);
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
    }

    if(user != null) {
        return(<Navigate to={"/profile"}/>);
    }

    return (
        <div className={"container"}>
            <div className="row authorization-form">
                <form onSubmit={handleSubmit} className="col xs12 s12 m8">
                    <div className="row">
                        <div className="input-field col xs10 s6 m6">
                            <input placeholder="Email" id="email" type="email"
                                   onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="input-field col xs10 s6 m6">
                            <input placeholder="Password" id="password" type="password"
                                   onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="input-field col xs10 s6 m6">
                            <button type="submit" className={"centered auth-btn"} disabled={!validateForm()}>Login</button>
                        </div>
                    </div>
                </form>
            </div>
            <Link to={"/registration"} className="waves-effect waves-light btn-small">I`m not registered yet</Link>
            </div>
        );
}
