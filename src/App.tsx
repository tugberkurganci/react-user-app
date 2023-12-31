import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import { useState, useEffect } from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import FriendList from "./pages/FriendList/FriendList";
import { UserModel } from "./Model/User";
import Navbar1 from "./components/Navbar/Navbar";



type Props = {}

function App({}: Props) {

  
  
  return ( 
    <>
      <BrowserRouter>
        <Navbar1 />
        <Routes>
          <Route path="/" element={<Homepage />} />
		      <Route path="/friend-list" element={< FriendList/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App
