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
  const [user, setUser] = useState<UserModel>();

  const handleLogin = (user:UserModel) => {
    setUser(user);
  };

  const onLogout = () => {
    localStorage.removeItem("user");
	console.log(localStorage.getItem("user"))
  };

  const handleFriendList = (list:UserModel[]) => {
	console.log(list)
	console.log(user)
	
	if (!user) {
	  return;
	}
	
	
	  setUser((prev) => prev? { ...prev, friendList: list }:user);
	
	console.log(user)
  };
  return ( 
    <>
      <BrowserRouter>
        <Navbar1 loggedUser={user} onLogout={onLogout} />
        <Routes>
          <Route path="/" element={<Homepage handleFriendList={handleFriendList} />} />
		      <Route path="/friend-list" element={< FriendList/>} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App
