import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/private.css";
import cardimage1 from "../../img/Card1.png";
import cardimage2 from "../../img/Card2.png";
import cardimage3 from "../../img/Card3.png";
import cardimage4 from "../../img/Card4.png";
import PopOver from "../component/popOver";

export const Private = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleGame = (route) => {
    actions.game();
    navigate(route);
  };

  const cardDetails = [
    {
      id: 1,
      content: 'This is a great game with great players. The game have absloutely no toxicity or racism or anything like that, we are cool around here 😘',
      placement: 'top',
      image: cardimage1,
      showAccessButton: true,
      accessRoute: '/callofduty', 
    },
    {
      id: 2,
      content: 'Details for Card 2',
      placement: 'top',
      image: cardimage2,
      showAccessButton: false,
      accessRoute: '/custom-route-for-card-2', 
    },
    {
      id: 3,
      content: 'Details for Card 3',
      placement: 'top',
      image: cardimage3,
      showAccessButton: false,
      accessRoute: '/custom-route-for-card-2'
    },
    {
      id: 4,
      content: 'Details for Card 4',
      placement: 'top',
      image: cardimage4,
      showAccessButton: false,
      accessRoute: '/custom-route-for-card-2'
    },
  ];

  return (
    <div className="row">
      <div className="wrapper2">
        <div className="bg"> Welcome </div>
        <div className="fg"> Welcome </div>
      </div>

      {cardDetails.map((card) => (
        <div key={card.id} className="column">
          <div className="box">
            <div className="box2">
              <div className="banner-image">
                <img src={card.image} alt={`Card ${card.id}`} />
              </div>
              <h1 className="bigtitle"> </h1>
              <p className="smalltitle"><br /></p>
            </div>
            <div className="button-wrapper">
              <PopOver
                placement={card.placement}
                title={card.title}
                content={card.content}
              />
              {card.showAccessButton && (
                <button
                  onClick={() => handleGame(card.accessRoute)}
                  className="btn1 fill"
                >
                  ACCESS NOW
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};