import React, { useContext,useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const ResetPassword = () => {
  const { store,actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [q1, setQ1] = useState("city");
  const [q2, setQ2] = useState("pet");
  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");
  const navigate = useNavigate();
  
  

  useEffect(()=>{
    if (store.token && store.token != "" && store.token != undefined) navigate("/signup")
  }) 

  const handleResetPassword = () => {
    let securityQuestions = { q1: q1, q2: q2, a1: a1, a2: a2 };
    actions.forgotPassword(email, securityQuestions);
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <h2>Enter Email</h2>
      <input type="text" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleResetPassword}>Reset Password</button>
    </div>
  );
};
