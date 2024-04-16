import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
const LoginForm = () => {
  const navigate = useNavigate();
  const Api = "https://back-d.onrender.com/auth/sign-up";

  if (localStorage.getItem("tokenavia")) {
    localStorage.removeItem("user");
  localStorage.removeItem("id");
    navigate("/");
  }


  const [data, setData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
        const logs = document.getElementById("logss");
logs.innerHTML = "WAIT";

    const response = await fetch(Api, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response) {
      const data = await response.json();
      console.log(data);
      if (data.successfully == 401) {
        const alert = document.getElementById("solo");
        alert.innerHTML = data.message;
      }
      else if (data.successfully == 207) {
        localStorage.setItem("id", data.uuid);
        localStorage.setItem("user", data.email);
        if (data.messagestatus == "active") {
          localStorage.setItem("tokenavia", data.messagestatus);
        }
        navigate("/predict/aviator");

      }
    }
  };
  return (
    <>
      <div className="container">
        <h1 className="aa">Login</h1>

        <form onSubmit={handleSubmit}>
          <h3 id="solo" className="aa"></h3>
          <label htmlFor="email" className="aa">
            <b>Email</b>
          </label>
          <input
            required
            className="inputs"
            type="email"
            placeholder="Enter 1Win email"
            onChange={(e) => {
              setData({ ...data, email: e.target.value.toLocaleLowerCase() });
            }}
          />
          <label htmlFor="password" className="aa">
            <b>Password</b>
          </label>
          <input
            required
            className="inputs"
            type="password"
            placeholder="1Win Password"
            onChange={(e) => {
              setData({ ...data, password: e.target.value.toLocaleLowerCase() });
            }}
          />
          <button type="submit" id="logss" className="btn">
            Login
          </button>
        </form>
      </div>
    </>
  );
};
export default LoginForm;
