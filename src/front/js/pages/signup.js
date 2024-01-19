import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom"

import "../../styles/home.css";

export const Signup = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const [q1, setQ1] = useState("city");
	const [q2, setQ2] = useState("pet");
	const [a1, setA1] = useState("");
	const [a2, setA2] = useState("");

	const token = sessionStorage.getItem("token");

	const handleClick = () => {
		let securityQuestions= {q1:q1, q2:q2, a1:a1, a2:a2}
		actions.signup(email,password,securityQuestions);
        navigate ("/login");
		};

	if(store.token && store.token != "" && store.token != undefined) navigate("/");

	return (
		<div className="d-flex justify-content-center align-items-center bg-dark-purple vh-100">
		  <div className="bg-white p-3 rounded w-25">
			<h2>Signup for TeamUp Nexus</h2>
			{store.token && store.token !== "" && store.token !== undefined ? (
			  "You are now signed up!"
			) : (
			  <form>
				<div className="mb-3">
				  <label htmlFor="email">
					<strong>Email</strong>
				  </label>
				  <input
					type="text"
					placeholder="Enter email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="form-control rounded-0"
				  />
				</div>
				<div className="mb-3">
				  <label htmlFor="password">
					<strong>Password</strong>
				  </label>
				  <input
					type="password"
					placeholder="Enter password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="form-control rounded-0"
				  />
				</div>
				<div>
				<div className="mb-3">
				  <label>
					<strong>Security Question</strong>
				  </label>
				  <select onChange={(e)=> setQ1(e.target.value)}>
					<option value= "city">What city did you grow up in?</option>
					<option value= "pet">What is the name of your first pet?</option>
					<option value= "spot">What is your favorite vacation spot?</option>
					<option value= "make">What is the make of your first car?</option>
				  </select>
				  <input
				  	onChange={(e)=> setA1 (e.target.value)}
				  	type = "text"
					className="form-control rounded-0"
				  />
				</div>
				<div className="mb-3">
				  <label>
					<strong>Security Question</strong>
				  </label>
				  <select onChange={(e)=> setQ2(e.target.value)}>
				  	<option value= "pet">What is the name of your first pet?</option>
					<option value= "city">What city did you grow up in?</option>
					<option value= "spot">What is your favorite vacation spot?</option>
					<option value= "make">What is the make of your first car?</option>
				  </select>
				  <input
				  	onChange={(e)=> setA2 (e.target.value)}
				  	type = "text"
					className="form-control rounded-0"
				  />
				</div>
				</div>
				<button onClick={handleClick} type="button" className="btn btn-success w-100">
				  <strong>Signup</strong>
				</button>
			  </form>
			)}
		  </div>
		</div>
	  );
};
