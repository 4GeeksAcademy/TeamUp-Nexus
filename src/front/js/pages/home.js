import React, { useContext } from "react";
import { Context } from "../store/appContext";
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

						{/* <h1> Forge Friendships,<h2>Conquer Challenges, and Level Up Together!</h2></h1> */}

						<p className="mainTitle">
						   Where Gamers Unite: Forge Friendships
							<span>
							Conquer Challenges
							</span>
							and Level Up Together!
						</p>
						{<img src={rigoImageUrl} />}
						<div>
						{<img src={lbullets} height={320} width= {900} className="lbullets"/>}
						{<img src={rbullets} height={320} width= {900} className="rside" />}
						{<img src={rsoldier} height={500} width= {395} className="soldier1" />}
						{<img src={lsodier} height={571} width= {431} className="soldier2" />}
						</div>
						

						
						
						<br/>
						{<img src={ready} height={410} width= {487} className="soldier3" />}
						<div>
						<h1>Available on the following platforms</h1>
							<br/>
						</div>
						<div class="d-flex justify-content-center">
							
						{<img src={apple}  height={80} width= {225}/>}
						{<img src={google}  height={80} width= {225} />}


						</div>
						<br/>
						<hr class="rounded"></hr>
						<br/>


						{/* <!-- do section --> */}
  {/* <section class="do_section layout_padding">
    <div class="container">
      <div class="custom_heading-container">
      
      </div>
      <div class="row">
        <div class="col-md-3 col-sm-6">
          <div class="content-box bg-red">
            <div class="img-box">
			{<img src={idea} />}
            </div>
            <div class="detail-box">
              <h6>
                Original Ideas
              </h6>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="content-box bg-green">
            <div class="img-box">
			{<img src={rocket} />}
            </div>
            <div class="detail-box">
              <h6>
                Great apps
              </h6>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="content-box bg-red">
            <div class="img-box">
			{<img src={monitor} />}
            </div>
            <div class="detail-box">
              <h6>
                High Resolution
              </h6>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="content-box bg-green">
            <div class="img-box">
			{<img src={controller} />}
            </div>
            <div class="detail-box">
              <h6>
                Fast Loading
              </h6>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}


	

  {/* <!-- end do section --> */}
  <br/><br/><br/>

  <div class="tdownloaded2">
		<span data-text="Top Downloaded" class="spantext"></span>
		<span data-text="Games" class="spantext"></span>
	</div>





						<br/>
						<br/>
						<br/>
						<br/>


						<div class="col-lg-4 col-md-4 col-sm-4 container justify-content-center">
							{/* <div class="row "> */}
							<div class="col-10">
								<div class="card custom-card-class">

									{<img src={rigoImageUrl3}  />} 
								</div>
							</div>
							<div class="col-10">
								<div class="card custom-card-class">

									{<img src={rigoImageUrl2} />}
								</div>
							</div>
							<div class="col">
								<div class="card custom-card-class">

									{<img src={rigoImageUrl4} />}

									

									</div>

								</div>

							</div>

							<br/>


							<div class="col-lg-4 col-md-4 col-sm-4 container justify-content-center">
							{/* <div class="row "> */}
							<div class="col-10">
								<div class="card custom-card-class">

									{<img src={twoset1}  />} 
								</div>
							</div>
							<div class="col-10">
								<div class="card custom-card-class">

									{<img src={twoset2} />}
								</div>
							</div>
							<div class="col">
								<div class="card custom-card-class">

									{<img src={twoset3} />}

									

									</div>

								</div>


							</div>

						</div>
						<br />
						<br />
						
					</div>
				</div>
				
			</div>
			
		</div>
		
	

);
};
