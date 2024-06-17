import "bootstrap/dist/css/bootstrap.css";
import { getUsers, postLogin } from "../../apiService";
import { useState } from "react";
import SignIn from "../SignIn/SignIn";

import "./LoginForm.scss";

interface User {
  userId: number;
  username: string;
  profilePhotoUri: string | null;
  photos: [];
}

export default function LoginForm(props: any) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  const getUserId = (username: string, users: User[]): number => {
    for (const user of users) {
      if (user.username === username) {
        return user.userId;
      }
    }
    return 0;
  };

  const handleLogin = async () => {
    try {
      const response = await postLogin(username, password);
      console.log("Login successful:", response);
      localStorage.setItem(
        "token",
        JSON.stringify(response.token).slice(1, -1)
      );
      localStorage.setItem("username", username);
      localStorage.setItem(
        "userId",
        getUserId(username, await getUsers()).toString()
      );
      setIsAuthenticated(true);
      props.onRefresh();
      setUsername("");
      setPassword("");
    } catch (error) {
      console.error("Login failed:", error);
      alert(error);
    }
  };

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
    setIsAuthenticated(false);
    props.onRefresh();
  }

  if (isAuthenticated)
    return (
      <>
        <div>
          <div className="logged">
            <div>
              <h5>You are logged as: {localStorage.getItem("username")}</h5>
            </div>
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </>
    );
  else
    return (
      <>
        <div className="login-form">
          <div className="input-group">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
              placeholder="username"
            />
            <input
              type="password"
              className="form-control"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="btn btn-outline-primary"
              type="button"
              onClick={handleLogin}
            >
              Log In
            </button>
            <div className="sign-up">
              <SignIn />
            </div>
          </div>
        </div>
      </>
    );
}
