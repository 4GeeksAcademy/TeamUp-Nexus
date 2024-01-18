import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/TeamUp4.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Welcome to</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
		</div>
	);
};
