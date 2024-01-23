import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/Logomain.png";
import rigoImageUrl2 from "../../img/TeamupnexusCallofduty.png";
import rigoImageUrl3 from "../../img/TeamUpNexusDeadspace.png";
import rigoImageUrl4 from "../../img/TeamUpNexusFortnite.png";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	const handleSignup = () => {
		actions.signup();
		navigate("/signup");
	  };
	const handleLogin = () => {
		actions.login();
		navigate("/login");
	  };


	return (

// Images for Cards

		<div class="container">

			<div class="row justify-content-start">

				<div class="background-container">



					<div class="hero-image">

						<div class="hero-text">
							{<img src={rigoImageUrl} />}



							<div class="col-lg-4 col-md-4 col-sm-4 container justify-content-center">
								{/* <div class="row "> */}
								<div class="col-10">
									<div className="card">

										{<img src={rigoImageUrl3} />}
									</div>
								</div>
								<div class="col-10">
									<div className="card">

										{<img src={rigoImageUrl2} />}
									</div>
								</div>
								<div class="col">
									<div className="card">

										{<img src={rigoImageUrl4} />}

										<div class="stars"></div>

										<div class="container">

										</div>

									</div>


								</div>
								
							</div>
							<br/>
							<br/>
							<div class="d-flex justify-content-center align-items-center">
  								<button onClick={handleSignup}>SignUp</button>
							</div>
							<div class="d-flex justify-content-center align-items-center">
  								<button onClick={handleLogin}>Login</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
					








	);
};
