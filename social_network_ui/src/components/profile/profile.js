import './profile.css'
import React from 'react';
import Navbar from "../navbar/navbar";

export const Profile = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <>
        <Navbar/>
        <div className={"user-page"}>
            <h1>{user.nickname}</h1>
            <h2>{user.email}</h2>
        </div>
        </>
    )
}
