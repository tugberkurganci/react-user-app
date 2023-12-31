import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserModel } from "../../Model/User";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../state/redux";

type Props = {};

function LoginPage(props: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState<UserModel[]>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users");
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleLogin = () => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    let userWithEmptyFriendList;
    if (user) {
      if (user.friendList === undefined) {
        const userWithEmptyFriendList = { ...user, friendList: [] };
        dispatch(loginSuccess(userWithEmptyFriendList));
      } else {
        dispatch(loginSuccess(user));
      }

      navigate("/");
    } else {
      alert("Kullanıcı adı veya şifre hatalı!");
    }
  };
  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Kullanıcı Adı:
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Şifre:
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleLogin}>
        Giriş Yap
      </button>
    </div>
  );
}

export default LoginPage;
