import React, { useEffect, useState, Component } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Home from "./components/Home";
import { useSelector, useDispatch, connect } from "react-redux";
import { fetchUsers } from "./store/Actions";

function App() {
  const [login, setLogin] = useState(true);
  const [msg, setMsg] = useState("Login to view Dashboard");
  const dispatch = useDispatch();
  useEffect(() => {
    return dispatch(fetchUsers());
  }, []);

  const handleLogin = () => {
    setLogin(false);
    setMsg("Login to view Dashboard");
  };
  const handleLogout = () => {
    setLogin(true);
    setMsg("See you soon !");
  };
  return (
    <div className="App form-group">
      {login ? (
        <Login msg={msg} handleLogin={handleLogin} />
      ) : (
        <Home handleLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
