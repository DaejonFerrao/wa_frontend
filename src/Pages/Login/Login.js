import "./Login.css"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login= (props) => {
    const [email, setEmail] = useState("");
    const [pass, setpass] = useState("");

    const naviagte = useNavigate()

    const handleSubmit = () => {
        email.preventDefault();
        console.log(email);
    }

    return (
        <><form onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <button onClick={navigate("/Register")}> Don't have an account? Register Here</button></>
    );
};

export default Login;