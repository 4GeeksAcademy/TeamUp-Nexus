// PlayerFav.js

import React, { useEffect, useState } from 'react';

const PlayerFav = () => {
  // Use state to store the player favorites data
  const [playerFav, setPlayerFav] = useState([]);

  // Use useEffect to fetch player favorites from the backend
  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/PlayerFav", options) // Replace with your actual backend endpoint
      .then(response => response.json())
      .then(data => {
        setPlayerFav(data);
      })
      .catch(error => {
        console.error('Error fetching player favorites:', error);
      });
  }, []);

  return (
    <div>
      <h1>Player Favorites</h1>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Level</th>
            <th>Wins</th>
            <th>K/D Ratio</th>
          </tr>
        </thead>
        <tbody>
          {playerFav.map(player => (
            <tr key={player.id}>
              <td>{player.username}</td>
              <td>{player.level}</td>
              <td>{player.wins}</td>
              <td>{player.kd_ratio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerFav;
