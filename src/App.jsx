import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import { useState, useEffect } from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import UserList from "./pages/User/UserList";
import FriendList from "./pages/FriendList/FriendList";

function App() {
  const [user, setUser] = useState();

  const handleLogin = (user) => {
    setUser(user);
  };

  const onLogout = () => {
    localStorage.removeItem("user");
	console.log(localStorage.getItem("user"))
  };

  const handleFriendList = (list) => {
	console.log(list)
	console.log(user)
	// Eğer user boşsa, hiçbir şey yapma
	if (!user) {
	  return;
	}
  
	// Eğer user'da friendList özelliği zaten varsa, bu özelliği güncelle
	if (user.friendList) {
	  setUser((prev) => ({ ...prev, friendList: list }));
	} else {
	  // Eğer user'da friendList özelliği yoksa, bu özelliği ekleyerek yeni bir nesne oluştur
	  setUser((prev) => ({ ...prev, friendList: list }));
	}
	console.log(user)
  };
  return ( 
    <>
      <BrowserRouter>
        <Navbar loggedUser={user} onLogout={onLogout} />
        <Routes>
          <Route path="/" element={<Homepage handleFriendList={handleFriendList} />} />
		  <Route exact  path="/friend-list" element={< FriendList/>} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
