import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pic from "../../assets/Pic.jpg";
import axios from "axios";
import "..//styles/login.css"

export default function Login({ setUserRole }) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
    if (!email || !email.includes("@")) {
        alert("Please enter a valid email.");
        return;
    }

    try {
        const response = await axios.post("http://localhost:8000/login", { email });
        
        if (response.data) {
            const userrole = response.data.role;
            setUserRole(userrole);

            if (userrole === "std") {
                navigate("/academics");
            } else if (userrole === "fac") {
                navigate("/timetable");
            } else {
                alert("Invalid role. Please contact admin.");
            }
        } else {
            alert("User not found.");
        }
    } catch (error) {
        console.error("Login error:", error);
        alert("Login failed. Check your credentials.");
    }
};


    return (
        <div className='app'>
            <img src={Pic} alt="" className='pic' />
            <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value.trim())} />
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
