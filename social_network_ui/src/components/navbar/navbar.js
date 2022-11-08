import React from "react";
import {Link} from "react-router-dom"
import './navbar.css';

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title current">
                Social Network
            </Link>
            <ul className={"navbar"}>
                <Link  to="/profile" >Profile</Link>
                <Link  to="/friends" >Friends</Link>
                <Link  to="/requests" >Requests</Link>
            </ul>
        </nav>
    )
}
