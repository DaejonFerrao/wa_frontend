import "./SignUp.css"
import React, { useState } from "react";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [pass, setpass] = useState("");

    const handleSubmit = () => {
        email.preventDefault();
        console.log(email);
    }

    return (
        <><form onSubmit={handleSubmit}>
            <label for="email">email</label>
            <input value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label for="password">password</label>
            <input value={pass} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <button>Don't have an account? Register Here</button></>
    );
};

export default SignUp;