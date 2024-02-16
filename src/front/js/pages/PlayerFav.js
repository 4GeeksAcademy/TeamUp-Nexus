import React, { useEffect } from "react";
import "../../styles/Favorites.css";

export const PlayerFav = () => {
  useEffect(() => {

    const statsContainer = document.createElement('div');
    statsContainer.style.fontFamily = 'Arial, sans-serif';
    statsContainer.style.color = 'white';
    statsContainer.style.backgroundColor = '#333';
    statsContainer.style.padding = '20px';
    statsContainer.style.width = '80%';
    statsContainer.style.margin = '0 auto';
    statsContainer.style.display = 'flex';
    statsContainer.style.flexDirection = 'column'; 

    
    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center'; 
    header.style.marginBottom = '10px';

 
    const playerHeader = document.createElement('div');
    playerHeader.style.fontWeight = 'bold';
    playerHeader.style.color = '#eee';
    playerHeader.textContent = 'Player';
    playerHeader.style.width = '150px'; 

    const winsHeader = document.createElement('div');
    winsHeader.style.fontWeight = 'bold';
    winsHeader.style.color = '#eee';
    winsHeader.textContent = 'Wins';
    winsHeader.style.textAlign = 'right'; 
    winsHeader.style.flexGrow = '1'; 

    const matchesPlayedHeader = document.createElement('div');
    matchesPlayedHeader.style.fontWeight = 'bold';
    matchesPlayedHeader.style.color = '#eee';
    matchesPlayedHeader.textContent = 'Matches Played';
    matchesPlayedHeader.style.textAlign = 'right'; 
    matchesPlayedHeader.style.flexGrow = '1';


    header.appendChild(playerHeader);
    header.appendChild(winsHeader);
    header.appendChild(matchesPlayedHeader);

   
    statsContainer.appendChild(header);

    
    const usernames = [
      "CoolGa",
      "Ninja123",
      "ProGamer",
      "GamerGirl",
      "Xtreme",
      "Speedy",
      "Shadow",
      "Blaze",
      "Swift",
      "Sonic",
      "Cyber",
      "Techie",
      "Laser",
      "Raptor",
      "Pixel",
      "Ace",
      "Ghost",
      "Zap",
      "Mystic",
      "Storm"
    ];

    for (let i = 0; i < usernames.length; i++) {
      const playerBar = document.createElement('div');
      playerBar.style.display = 'flex';
      playerBar.style.alignItems = 'center';
      playerBar.style.justifyContent = 'space-between'; 
      playerBar.style.background = i % 2 === 0 ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.1)';
      playerBar.style.marginBottom = '5px';
      playerBar.style.padding = '10px';
      playerBar.style.borderRadius = '5px';


      const playerName = document.createElement('div');
      playerName.style.display = 'flex'; 
      playerName.style.alignItems = 'center'; 
      playerName.style.width = '150px'; 

      const avatar = document.createElement('span');
      avatar.textContent = '🤖'; 
      // 🤖
      // 👾
      avatar.style.marginRight = '5px';

      playerName.appendChild(avatar);  

      const playerNameText = document.createElement('div');
      playerNameText.textContent = usernames[i];
      playerName.appendChild(playerNameText);  

      const wins = document.createElement('div');
      wins.style.textAlign = 'right'; 
      wins.textContent = Math.floor(Math.random() * 500);
      wins.style.flexGrow = '1'; 
      wins.style.textAlign = 'right';  

      const matchesPlayed = document.createElement('div');
      matchesPlayed.style.textAlign = 'right'; 
      matchesPlayed.textContent = Math.floor(Math.random() * 5000);
      matchesPlayed.style.flexGrow = '1'; 

      playerBar.appendChild(playerName);
      playerBar.appendChild(wins);
      playerBar.appendChild(matchesPlayed);

      statsContainer.appendChild(playerBar);
    }

  
    const playerFavContainer = document.getElementById('player-fav-container');
    playerFavContainer.appendChild(statsContainer);
  }, []);

  return (

    <div className="row">
      <div className="wrapper3">
        {/* <div className="bg1"> Your Team </div> */}
        <div className="fg1"> Your Team </div>
      </div>
 
    <div id="player-fav-container">
    </div>
    </div>
  );
};
export default PlayerFav;

