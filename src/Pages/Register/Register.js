import "./Register.css"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../Login/Login";

const Register = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setpass] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div>
            <><form onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input value={name} name="name" id="name" placeholder="Full Name" />
                <label htmlFor="email">email</label>
                <input value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">SignUp</button>
            </form>
                <button onClick={navigate(<Login/>)}>Already have an account? Login Here</button></>
        </div>
    );
};

export default Register;