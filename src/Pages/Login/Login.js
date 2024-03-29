import { useNavigate } from "react-router-dom";
import "./Login.css"
import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setpass] = useState("");

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);
        const response = await axios.post("http://127.0.0.1:8000/login", {"email": email, "password": pass })
        console.log(response.data)
        return;
    }

    return (
        <div className="auth-form-container">
            <><form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => { setpass(e.target.value) }} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-button" onClick={() => navigate("/Register")}> Don't have an account? Register Here</button></>
        </div>
    );
};

export default Login;