import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/private.css";
import cardimage1 from "../../img/Callofduty222.png";
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
      content: '☠️ Call of Duty is a highly popular video game franchise known for its intense first-person shooter gameplay set in various historical and fictional military conflicts. Developed by Activision, the series debuted in 2003 and has since become one of the best-selling and most critically acclaimed video game franchises of all time.',
      placement: 'top',
      image: cardimage1,
      showAccessButton: true,
      accessRoute: '/callofduty',
    },
    {
      id: 2,
      content: '🔫 Apex Legends is a free-to-play battle royale game developed by Respawn Entertainment and published by Electronic Arts. It features a diverse cast of "Legends," each with unique abilities, and fast-paced gameplay set in the Titanfall universe.',
      placement: 'top',
      image: cardimage2,
      showAccessButton: true,
      accessRoute: '/apexlegends',
    },
    {
      id: 3,
      content: '🥷 Escape from Tarkov is a hardcore and realistic online first-person action RPG/Simulator with MMO features and a story-driven walkthrough. It is set in the fictional Norvinsk region in Northwestern Russia, where a war is taking place between two private military companies.',
      placement: 'top',
      image: cardimage3,
      showAccessButton: true,
      accessRoute: '/escapefromtarkov'
    },
    {
      id: 4,
      content: '🚀 Battlefield 2042 is a first-person shooter video game developed by DICE and published by Electronic Arts. It is the seventeenth installment in the Battlefield series and features large-scale battles with up to 128 players, dynamic weather systems, and various multiplayer modes.',
      placement: 'top',
      image: cardimage4,
      showAccessButton: true,
      accessRoute: '/battlefield2042'
    },
  ];

  return (
    <div className="row">
      <div className="wrapper2">
        <div className="bg"> Welcome to TeamUp Nexus <br /> Select your Game </div>
        <div className="fg"> Welcome to TeamUp Nexus <br /> Select your Game </div>
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