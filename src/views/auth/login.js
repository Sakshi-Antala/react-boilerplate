import React, { useState } from "react";
import axios from "axios";
import { Routes } from "../../constants/api_url";

const Login = () => {
    const [userdata, setUserDatastate] = useState({
        email: "",
        password: "",
      });
    
      const changeuserdata = (e) => {
        setUserDatastate({
          ...userdata,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = async () => {
        const response = await axios.post(Routes.API_URL + Routes.LOGIN, userdata, {
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
        });
        const responseData = response.data;
        if (responseData && responseData.status === "success") {
          localStorage.setItem("userData", JSON.stringify(responseData.data));
        }
      };
    return (
        <div className="container-form">
        <section className="login-section">
          <h2>Login</h2>
          <div>
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={changeuserdata}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={changeuserdata}
            />
            <button type="button" onClick={handleSubmit}>
              Login
            </button>
           
          </div>
        </section>
      </div>
    )
}

export default Login