import "./Register.css"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <><form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input type="text" onChange={(e) => { setName(e.target.value) }} name="name" id="name" placeholder="Full Name" required />
                <label htmlFor="email">Email</label>
                <input  type="email" onChange={(e) => { setEmail(e.target.value) }} id="email" name="email" placeholder="youremail@gmail.com" required />
                <label htmlFor="password">Password</label>
                <input  type="password" onChange={(e) => { setPass(e.target.value) }} placeholder="********" id="password" name="password" />
                <button className="submit" type="submit">SignUp</button>
            </form>
                <button className="link-button" onClick={() =>navigate("/Login")}>Already have an account? Login Here</button></>
        </div>
    );
};

export default Register;