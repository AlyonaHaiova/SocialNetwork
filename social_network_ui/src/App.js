import './App.css';
import React from 'react';
import {Login} from "./components/authorization/login";
import {Friends} from './components/friends/friends';
import {Messages} from './components/message/messages'
import {Route, Routes, Navigate} from "react-router-dom"
import {Registration} from "./components/authorization/registration";
import {Profile} from "./components/profile/profile";
import {Requests} from "./components/request/requests";

function App() {
  return (
      <div className={"App"}>
          <Routes>
              <Route path={"/"} element={<Navigate to={"/login"}/>}/>
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/profile"  element={<Profile />} />
              <Route path="/requests" element={<Requests/>} />
              <Route path="/friends" element={<Friends/>}  />
              <Route path="/messages" element={<Messages/>}/>
          </Routes>
      </div>
  );
}

export default App;
