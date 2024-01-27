import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom"
import Logo from "../../img/Logo.png";

import "../../styles/home.css";
import "../../styles/login.css";


export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const token = sessionStorage.getItem("token");

	const handleClick = () => {
		actions.login(email,password)
		};

	if(store.token && store.token != "" && store.token != undefined) navigate("/private");

	const handleResetPasswordClick = () => {
        // Use the navigate function to go to the "/Passreset" route
        navigate("/Passreset");
    };
	return (
		<div className="d-flex justify-content-center align-items-center bg-dark-purple vh-100">
		  <div className="bg-white p-3 rounded w-25">
		  <img src={Logo} height={160} width= {350} ClassName= "logo22"/>
			<h2>Login</h2>
			{store.token && store.token !== "" && store.token !== undefined ? (
			  "You have successfully logged in"
			) : (
			  <div>
				<div className="input-container mb-3">
				  <label htmlFor="email"><strong>Email</strong></label>
				  <input
					type="email"
					placeholder="Enter Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="form-control rounded-0"
				  />
				</div>
				<div className="input-container mb-3">
				  <label htmlFor="password"><strong>Password</strong></label>
					<input		
					type="password"			
					placeholder="Enter Password"			 
					value={password}		
					onChange={(e) => setPassword(e.target.value)}
					className="form-control rounded-0"
				  />
				</div>
				<button ClassName=" " onClick={handleClick} className="btn btn-dark w-100">
				  <strong>Login</strong>
				</button>
				<button onClick={handleResetPasswordClick} className="btn btn-link mt-2 w-100">Forgot Password?</button>
			  </div>
			)}
		  </div>
		</div>
	  );
};
