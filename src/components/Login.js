import React, { useState } from "react";
import axios from "axios"; // Adicionado

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log(email, password);

    try {
      const response = await axios.post(
        "http://localhost:3001/login",
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (error) {
      if (error?.response) {
        setErro("erro ao acessar o servidor");
      } else if (error.response.status == 401) {
        setErro("Usuario ou senha invalida");
      }
    }
  };

  return (
    <div className="LoginForm-wrap">
      <h2>Login</h2>
      <form className="login-form">
        <input
          type="email"
          name="email"
          placeholder="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="btn-login"
          onClick={(e) => handleLogin(e)}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
