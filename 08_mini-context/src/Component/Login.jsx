import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };


  return (
    <div className="mb-5 p-2">
      <h2 className="mb-5" >Login Here</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />{"  "}


      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />

      <button className="ml-5 border rounded-lg p-1 bg-slate-100 " onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login; 
