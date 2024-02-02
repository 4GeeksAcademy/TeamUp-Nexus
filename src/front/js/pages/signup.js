import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom"
import Logo from "../../img/Logo.png";

import "../../styles/home.css";
import "../../styles/signup.css";

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
		let securityQuestions = { q1: q1, q2: q2, a1: a1, a2: a2 }
		actions.signup(email, password, securityQuestions);
		navigate("/login");
	};

	if (store.token && store.token != "" && store.token != undefined) navigate("/");

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
					"You are now signed up!"
				) : (
					<form className="text-start mx-1 mx-md-4">
						<div className="mb-3 form-control-sm  ">
							<i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
							<label htmlFor="email ">
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
						<div className="mb-3 form-control-sm">
							<label htmlFor="password">
								<i class="fas fa-lock fa-lg me-3 fa-fw"></i>
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
							<div className="mb-3 pb-2 form-control-sm">
								<label>
									<i class="fas fa-lock fa-lg me-3 fa-fw"></i>
									<strong>Security Question</strong>
								</label>
								<select onChange={(e) => setQ1(e.target.value)}>
									<option value="city">What city did you grow up in?</option>
									<option value="pet">What is the name of your first pet?</option>
									<option value="spot">What is your favorite vacation spot?</option>
									<option value="make">What is the make of your first car?</option>
								</select>
								<input
									onChange={(e) => setA1(e.target.value)}
									type="text"
									className="form-control rounded-0"
								/>
							</div>
							<div className="mb-3 form-control-sm">
								<label>
									<i class="fas fa-lock fa-lg me-3 fa-fw"></i>
									<strong>Security Question</strong>
								</label>
								<select onChange={(e) => setQ2(e.target.value)}>
									<option value="pet">What is the name of your first pet?</option>
									<option value="city">What city did you grow up in?</option>
									<option value="spot">What is your favorite vacation spot?</option>
									<option value="make">What is the make of your first car?</option>
								</select>
								<input
									onChange={(e) => setA2(e.target.value)}
									type="text"
									className="form-control rounded-0"
								/>
							</div>
						</div>
						<div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
							<button onClick={handleClick} type="button" className="btn btn-dark w-100">
								<strong>Signup</strong>
							</button>
						</div>
					</form>
				)}
			</div>
		</div>


	)
};

