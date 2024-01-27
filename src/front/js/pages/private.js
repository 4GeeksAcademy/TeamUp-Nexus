import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext"
import "../../styles/private.css";
import cardimage1 from "../../img/Card1.png";
import cardimage2 from "../../img/Card2.png";
import cardimage3 from "../../img/Card3.png";
import cardimage4 from "../../img/Card4.png";

export const Private = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleGame = () => {
    actions.game();
    navigate("/callofduty");
  };

  return (
    // <div classNameNameName="text-center mt-5">
    //   <button onClick={handleGame}> Call of duty</button>
    //   <button>Game 2</button>
    //   <button>Game 3</button>
    // </div>
    
    <div class="row">
      <div class="wrapper2">
  <div class="bg"> Welcome </div>
  <div class="fg"> Welcome </div>
</div>
      <div class="column">
        <div className="box">
          <div className="box2">
            <div className="banner-image"> {<img src={cardimage2} />} </div>
            <h1 className="bigtitle"> </h1>
            <p className="smalltitle"><br />
              </p>
          </div>
          <div className="button-wrapper">
            <button className="btn outline">DETAILS</button>
            <button className="btn fill">ACCESS NOW</button>
          </div>

        </div>
      </div>
      <div class="column">
        <div className="box">
          <div className="box2">
            <div className="banner-image"> {<img src={cardimage1} />} </div>
            <h1 className="bigtitle"> </h1>
            <p className="smalltitle"> <br />
              </p>
          </div>
          <div className="button-wrapper">
            <button className="btn outline">DETAILS</button>
            <button className="btn fill">ACCESS NOW</button>
          </div>

        </div>
      </div>
      <div class="column">
        <div className="box">
          <div className="box2">
            <div className="banner-image"> {<img src={cardimage4} />} </div>
            <h1 className="bigtitle"> </h1>
            <p className="smalltitle"><br />
              </p>
          </div>
          <div className="button-wrapper">
            <button className="btn outline">DETAILS</button>
            <button className="btn fill">ACCESS NOW</button>
          </div>

        </div>
      </div>
      <div class="column">
        <div className="box">
          <div className="box2">
            <div className="banner-image"> {<img src={cardimage3} />} </div>
            <h1 className="bigtitle"> </h1>
            <p className="smalltitle"> <br />
              </p>
          </div>
          <div className="button-wrapper">
            <button className="btn outline">DETAILS</button>
            <button className="btn fill">ACCESS NOW</button>
          </div>

        </div>
      </div>




    </div>




  );
};