import React, { useContext,useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import Logo from "../../img/Logo.png";
import "../../styles/home.css";
import "../../styles/Passreset.css";

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
    <div className="d-flex justify-content-center align-items-center bg-dark-purple vh-100">
    <div className=" bg-secondary rounded w-25 text-dark ">
      <img src={Logo} height={125} width={280} ClassName="logo22" />

      <p>
					<a href="" class="btn btn-block btn-twitter"> <i class="fab fa-twitter"></i>   Login via Twitter</a>
					<br />
					<a href="" class="btn btn-block btn-facebook"> <i class="fab fa-facebook-f"></i>   Login via facebook</a>
				</p>
				<p class="divider-text">
					<span class="bg-light">OR</span>
				</p>
      
      <h2>Reset Password</h2>
      <h2>Enter Email</h2>
      <div className="input-container mb-3 text-start mx-1 mx-md-4 form-control-sm">
      <input type="text" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}  />
      </div>
      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
      <button onClick={handleResetPassword} className="btn btn-dark w-100" >Reset Password</button>
      </div>
    </div>
    </div>
    
  );
};
