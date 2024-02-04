import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import Logo from "../../img/Logo.png";
import "../../styles/home.css";
import "../../styles/Passreset.css";

export const ResetPassword = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [q1, setQ1] = useState("city");
    const [q2, setQ2] = useState("pet");
    const [a1, setA1] = useState("");
    const [a2, setA2] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (store.token && store.token !== "" && store.token !== undefined) navigate("/signup")
    }, []);

    const handleResetPassword = () => {
        let securityQuestions = { q1: q1, q2: q2, a1: a1, a2: a2 };
        actions.forgotPassword(email, securityQuestions);
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-dark-purple vh-100">
            <div className="bg-secondary rounded text-dark p-4" style={{ maxWidth: "400px" }}>
                <img src={Logo} height={125} width={280} ClassName="logo22" />

                <p>
                    <a href="" className="btn btn-block btn-twitter"> <i className="fab fa-twitter"></i>   Login via Twitter</a>
                    <br />
                    <a href="" className="btn btn-block btn-facebook"> <i className="fab fa-facebook-f"></i>   Login via Facebook</a>
                </p>
                <p className="divider-text">
                    <span className="bg-light">OR</span>
                </p>

                <h2>Reset Password</h2>
                <h2>Enter Email</h2>
                <div className="d-flex justify-content-center">
                    <div className="input-container mb-3 text-start mx-1 mx-md-4 form-control-sm">
                        <input type="text" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="mx-4 mb-3 mb-lg-4">
                        <button onClick={handleResetPassword} className="btn btn-dark w-100">Reset Password</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
