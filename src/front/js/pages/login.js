import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom"

import "../../styles/home.css";

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

	return (
		<div className="d-flex justify-content-center align-items-center bg-dark-purple vh-100">
		  <div className="bg-white p-3 rounded w-25">
			<h2>Login</h2>
			{store.token && store.token !== "" && store.token !== undefined ? (
			  "You have successfully logged in"
			) : (
			  <div>
				<div className="mb-3">
				  <label htmlFor="email"><strong>Email</strong></label>
				  <input
					type="email"
					placeholder="Enter Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="form-control rounded-0"
				  />
				</div>
				<div className="mb-3">
				  <label htmlFor="password"><strong>Password</strong></label>
					<input		
					type="password"			
					placeholder="Enter Password"			 
					value={password}		
					onChange={(e) => setPassword(e.target.value)}
					className="form-control rounded-0"
				  />
				</div>
				<button onClick={handleClick} className="btn btn-success w-100">
				  <strong>Login</strong>
				</button>
				<button className="btn btn-link mt-2 w-100">Forgot Password?</button>
			  </div>
			)}
		  </div>
		</div>
	  );
};
