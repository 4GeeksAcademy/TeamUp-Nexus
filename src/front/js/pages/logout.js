import React, { useContext, useEffect } from "react";
import Logo from "../../img/Logo.png";
import "../../styles/logout.css"
import "../../styles/home.css";


export const Logout = () => { 

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
			<h1>You have successfuly logged out.</h1>
		</div>
		</div>
		
	);
};
