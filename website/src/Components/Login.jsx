import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl p-5">
        <h2 className="text-2xl mb-4 font-bold text-center">Student Login</h2>
        <input type="email" placeholder="Email" className="input input-bordered w-full mb-2" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="input input-bordered w-full mb-4" onChange={(e) => setPassword(e.target.value)} />
        <button className="btn btn-primary w-full" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
