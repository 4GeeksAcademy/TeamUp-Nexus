import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext"
import "../../styles/private.css";

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
      <div class="column">
        <div className="box">
          <div className="box2">
            <div className="banner-image"> </div>
            <h1 className="bigtitle"> </h1>
            <p className="smalltitle"><br />
              </p>
          </div>
          <div className="button-wrapper">
            <button className="btn outline">DETAILS</button>
            <button className="btn fill">BUY NOW</button>
          </div>

        </div>
      </div>
      <div class="column">
        <div className="box">
          <div className="box2">
            <div className="banner-image"> </div>
            <h1 className="bigtitle"> </h1>
            <p className="smalltitle"> <br />
              </p>
          </div>
          <div className="button-wrapper">
            <button className="btn outline">DETAILS</button>
            <button className="btn fill">BUY NOW</button>
          </div>

        </div>
      </div>
      <div class="column">
        <div className="box">
          <div className="box2">
            <div className="banner-image"> </div>
            <h1 className="bigtitle"> </h1>
            <p className="smalltitle"><br />
              </p>
          </div>
          <div className="button-wrapper">
            <button className="btn outline">DETAILS</button>
            <button className="btn fill">BUY NOW</button>
          </div>

        </div>
      </div>
      <div class="column">
        <div className="box">
          <div className="box2">
            <div className="banner-image"> </div>
            <h1 className="bigtitle"> </h1>
            <p className="smalltitle"> <br />
              </p>
          </div>
          <div className="button-wrapper">
            <button className="btn outline">DETAILS</button>
            <button className="btn fill">BUY NOW</button>
          </div>

        </div>
      </div>




    </div>




  );
};