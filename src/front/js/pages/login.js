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

			{store.token && store.token !== "" && store.token !== undefined ? (
			  "You have successfully logged in"
			) : (

			  <div>
				<div className="input-container mb-3 text-start mx-1 mx-md-4 form-control-sm">
				<i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
				  <label htmlFor="email"><strong>Email</strong></label>
				  <input
					type="email"
					placeholder="Enter Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="form-control rounded-0"
				  />
				</div>


				<div className="input-container mb-3 text-start mx-1 mx-md-4 form-control-sm">
				<i class="fas fa-lock fa-lg me-3 fa-fw"></i>
				  <label htmlFor="password"><strong>Password</strong></label>
					<input		
					type="password"			
					placeholder="Enter Password"			 
					value={password}		
					onChange={(e) => setPassword(e.target.value)}
					className="form-control rounded-0"
				  />
				</div>

				<div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
				<button ClassName=" " onClick={handleClick} className="btn btn-dark w-100">
				  <strong>Login</strong>
				</button>
				</div>
				<button onClick={handleResetPasswordClick} className="btn btn-link mt-2 w-100">Forgot Password?</button>
			  </div>
			)}
		  </div>
		</div>
	  );
};
