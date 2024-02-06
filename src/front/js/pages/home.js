import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import rigoImageUrl from "../../img/logomain2.png";
import rigoImageUrl2 from "../../img/TeamupnexusCallofduty.png";
import rigoImageUrl3 from "../../img/TeamUpNexusDeadspace.png";
import rigoImageUrl4 from "../../img/TeamUpNexusFortnite.png";
import twoset1 from "../../img/apexl1.png";
import twoset2 from "../../img/bbf1.png";
import twoset3 from "../../img/eft1.png";
import apple from "../../img/appstorew.png";
import google from "../../img/googlew.png";
import idea from "../../img/idea.png";
import rocket from "../../img/rocket-ship.png";
import controller from "../../img/controller.png";
import monitor from "../../img/monitor.png";
import lbullets from "../../img/Leftullets.png";
import rbullets from "../../img/leftside.png";
import rsoldier from "../../img/ontheright.png";
import lsodier from "../../img/ontheleft.png";
import ready from "../../img/ready.png";

import "../../styles/home.css";
import "../../styles/style.scss";

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
        <div className="container">
            <div className="row justify-content-start">
                <div className="background-container">
                    <div className="hero-image">
                        <div className="hero-text">
                            <p className="mainTitle">
                                Where Gamers Unite: Forge Friendships
                                <span>Conquer Challenges</span>
                                and Level Up Together!
                            </p>
                            <img src={rigoImageUrl} />
                            <div>
                                <img src={lbullets} height={320} width={900} className="lbullets" />
                                <img src={rbullets} height={320} width={900} className="rside" />
                                <img src={rsoldier} height={500} width={395} className="soldier1" />
                                <img src={lsodier} height={571} width={431} className="soldier2" />
                            </div>
                            <br />
                            <img src={ready} height={410} width={487} className="soldier3" />
                            <div>
                                <h1>Available on the following platforms</h1>
                                <br />
                            </div>
                            <div className="d-flex justify-content-center">
                                <img src={apple} height={80} width={225} />
                                <img src={google} height={80} width={225} />
                            </div>
                            <br />
                            <hr className="rounded" />
                            <br />
                            <br />
                            <br />
                            <div className="tdownloaded2">
                                <span data-text="Top Downloaded" className="spantext"></span>
                                <span data-text="Games" className="spantext"></span>
                            </div>
                            <br />
                            <br />
                            <br />
                            <br />
                            <div className="col-lg-4 col-md-4 col-sm-4 container justify-content-center">
                                <div className="col-10">
                                    <div className="card custom-card-class">
                                        <img src={rigoImageUrl3} style={{ borderRadius: '15px' }} />
                                    </div>
                                </div>
                                <div className="col-10">
                                    <div className="card custom-card-class">
                                        <img src={rigoImageUrl2} style={{ borderRadius: '15px' }} />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card custom-card-class">
                                        <img src={rigoImageUrl4} style={{ borderRadius: '15px' }} />
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="col-lg-4 col-md-4 col-sm-4 container justify-content-center">
                                <div className="col-10">
                                    <div className="card custom-card-class">
                                        <img src={twoset1} style={{ borderRadius: '15px' }} />
                                    </div>
                                </div>
                                <div className="col-10">
                                    <div className="card custom-card-class">
                                        <img src={twoset2} style={{ borderRadius: '15px' }} />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card custom-card-class">
                                        <img src={twoset3} style={{ borderRadius: '15px' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
