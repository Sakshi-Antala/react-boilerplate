import React, { useState } from "react";
import { Routes } from "../../constants/api_url";
import axios from "axios";
const Register = () => {
    const [signupdata, setSignUpData] = useState({
        email: "",
        password: "",
        username: "",
      });
    
      const changesignupdata = (e) => {
        setSignUpData({
          ...signupdata,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = async () => {
        const response = await axios.post(
          Routes.API_URL + Routes.SIGNUP,
          signupdata,
          {
            headers: {
              "Content-Type": "application/json",
              accept: "application/json",
            },
          }
        );
        const responseData = response.data;
        if (responseData && responseData.status === "success") {
        }
      };
    return (
        <div className="container-form">
        <section className="signup-section">
          <h2>Sign Up</h2>
          <div>
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={changesignupdata}
            />
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={changesignupdata}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={changesignupdata}
            />
            <button type="button" onClick={handleSubmit}>
              Sign Up
            </button>
          </div>
        </section>
      </div>
    )
}

export default Register