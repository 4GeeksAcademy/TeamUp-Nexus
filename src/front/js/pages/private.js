import React, { useContext } from "react";
import {  useNavigate } from "react-router-dom";
import { Context } from "../store/appContext"

export const Private = () => {
  const { store ,actions } = useContext(Context);
  const navigate = useNavigate();

  const handleGame = () => {
    actions.game();
    navigate("/callofduty");
  };

  return (
    <div className="text-center mt-5">
      <button onClick={handleGame}> Call of duty</button>
      <button>Game 2</button>
      <button>Game 3</button>
    </div>
  );
};