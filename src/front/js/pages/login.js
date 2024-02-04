import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
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
        actions.login(email, password);
    };

    if (store.token && store.token !== "" && store.token !== undefined) navigate("/private");

    const handleResetPasswordClick = () => {
        // Use the navigate function to go to the "/Passreset" route
        navigate("/Passreset");
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-dark-purple vh-100">
            <div className="bg-secondary rounded text-dark p-4" style={{ maxWidth: "400px" }}>
                <img src={Logo} height={125} width={280} className="logo22 mb-4" alt="Logo" />

                <p>
                    <a href="#" className="btn btn-block btn-twitter mb-2">
                        <i className="fab fa-twitter"></i>   Login via Twitter
                    </a>
                    <br />
                    <a href="#" className="btn btn-block btn-facebook">
                        <i className="fab fa-facebook-f"></i>   Login via Facebook
                    </a>
                </p>
                <p className="divider-text mb-3">
                    <span className="bg-light px-2">OR</span>
                </p>

                <div className="mb-3">
                    <div className="input-container form-group">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control rounded-20"
                        />
                    </div>

                    <div className="input-container form-group">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control rounded-20"
                        />
                    </div>

                    <div className="d-grid mb-3">
                        <button onClick={handleClick} className="btn btn-dark">
                            <strong>Login</strong>
                        </button>
                    </div>
                    <button onClick={handleResetPasswordClick} className="btn btn-link mt-2 w-100">
                        Forgot Password?
                    </button>
                </div>
            </div>
        </div>
    );
};
