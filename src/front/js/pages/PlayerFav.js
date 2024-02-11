// File: pages/PlayerFav.js
import React, { useEffect } from "react";

const PlayerFav = () => {
  useEffect(() => {
    // Create a container for the player statistics
    const statsContainer = document.createElement('div');
    statsContainer.style.fontFamily = 'Arial, sans-serif';
    statsContainer.style.color = 'white';
    statsContainer.style.backgroundColor = '#333';
    statsContainer.style.padding = '20px';
    statsContainer.style.width = '80%';
    statsContainer.style.margin = '0 auto';
    statsContainer.style.display = 'flex';
    statsContainer.style.flexDirection = 'column'; // Set flex direction to column

    // Create the header for the player statistics
    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center'; // Align items horizontally
    header.style.marginBottom = '10px';

    // Create header items
    const playerHeader = document.createElement('div');
    playerHeader.style.fontWeight = 'bold';
    playerHeader.style.color = '#eee';
    playerHeader.textContent = 'Player';

    const winsHeader = document.createElement('div');
    winsHeader.style.fontWeight = 'bold';
    winsHeader.style.color = '#eee';
    winsHeader.textContent = 'Wins';
    winsHeader.style.textAlign = 'center'; // Center align wins column

    const matchesPlayedHeader = document.createElement('div');
    matchesPlayedHeader.style.fontWeight = 'bold';
    matchesPlayedHeader.style.color = '#eee';
    matchesPlayedHeader.textContent = 'Matches Played';

    // Append header items to the header
    header.appendChild(playerHeader);
    header.appendChild(winsHeader);
    header.appendChild(matchesPlayedHeader);

    // Append the header to the stats container
    statsContainer.appendChild(header);

    // Create player statistics
    for (let i = 1; i <= 20; i++) {
      const playerBar = document.createElement('div');
      playerBar.style.display = 'flex';
      playerBar.style.alignItems = 'center';
      playerBar.style.justifyContent = 'space-between'; // Align items horizontally
      playerBar.style.background = i % 2 === 0 ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.1)';
      playerBar.style.marginBottom = '5px';
      playerBar.style.padding = '10px';
      playerBar.style.borderRadius = '5px';

      const playerName = document.createElement('div');
      playerName.textContent = `Player ${i}`;

      const wins = document.createElement('div');
      wins.style.width = '100px';
      wins.style.textAlign = 'center';
      wins.textContent = Math.floor(Math.random() * 10000);

      const matchesPlayed = document.createElement('div');
      matchesPlayed.style.width = '100px';
      matchesPlayed.style.textAlign = 'right'; // Align matches played to the right
      matchesPlayed.textContent = Math.floor(Math.random() * 20000);

      playerBar.appendChild(playerName);
      playerBar.appendChild(wins);
      playerBar.appendChild(matchesPlayed);

      statsContainer.appendChild(playerBar);
    }

    // Append the stats container to the "PlayerFav" component's DOM
    const playerFavContainer = document.getElementById('player-fav-container');
    playerFavContainer.appendChild(statsContainer);
  }, []);

  return (
    <div id="player-fav-container">
      {/* You can add any additional JSX components or elements here */}
    </div>
  );
};

export default PlayerFav;
