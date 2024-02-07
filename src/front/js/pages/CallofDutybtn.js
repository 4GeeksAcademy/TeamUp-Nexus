import React, { useEffect, useState } from 'react';
import Learnmore from '/workspaces/TeamUp-Nexus/src/front/js/component/Learnmore.js';
import Message from '/workspaces/TeamUp-Nexus/src/front/js/component/SendAmessage.js';
import '../../styles/CallofDutybtn.css';
import { Overlay, Popover, Button, Form, Alert } from 'react-bootstrap';

export const Cod = () => {
  const [playerStats, setPlayerStats] = useState(null);
  const [filterLevelRange, setFilterLevelRange] = useState('');
  const [filterKDRatioRange, setFilterKDRatioRange] = useState('');
  const [pageNumber, setPageNumber] = useState(1000);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [showMessageModal, setShowMessageModal] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      const url = `https://www.callofduty.com/api/papi-client/leaderboards/v2/title/mw/platform/psn/time/alltime/type/core/mode/career/page/${pageNumber}`;

      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          setPlayerStats(data);
          console.log(data);
        })
        .catch(error => {
          console.error('Error fetching player stats:', error);
        });
    };

    fetchData();
  }, [pageNumber]);

  const filterEntries = () => {
    if (!playerStats || !playerStats.data || !playerStats.data.entries) {
      return [];
    }

    let filteredEntries = playerStats.data.entries;

    if (filterLevelRange !== "") {
      const [minLevel, maxLevel] = filterLevelRange.split('-').map(Number);
      filteredEntries = filteredEntries.filter(
        entry => entry.values.level >= minLevel && entry.values.level <= maxLevel
      );
    }

    if (filterKDRatioRange !== "") {
      const [minKDRatio, maxKDRatio] = filterKDRatioRange.split('-').map(Number);
      filteredEntries = filteredEntries.filter(
        entry => entry.values.kdRatio >= minKDRatio && entry.values.kdRatio <= maxKDRatio
      );
    }

    return filteredEntries;
  };

  const handleContactClick = () => {
    setShowMessageModal(true);
  };

  const levelRanges = [
    "1-50",
    "51-100",
    "101-150",
    "151-200",
    "201-250",
    "251-300",
    "301-350",
    "351-400",
    "401-450",
    "451-500",
  ];

  const kdRatioRanges = [
    "0-1",
    "1-2",
    "2-3",
  ];

  return (
    <div className="row">
      <div class="d-flex align-content-center flex-wrap">
        <h1 class="Playerstats1"><i className="fa-solid fa-shield-halved"></i>Player Stats</h1>
        
        <br />
        <div className="Playerstats2">
          <label>
            Filter by Level Range:
            <select
              value={filterLevelRange}
              onChange={(e) => setFilterLevelRange(e.target.value)}
              className="select-classic">
              <option value="">All</option>
              {levelRanges.map((range, index) => (
                <option key={index} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </label>
          <label>
            Filter by K/D Ratio Range:
            <select
              value={filterKDRatioRange}
              onChange={(e) => setFilterKDRatioRange(e.target.value)}
            >
              <option value="">All</option>
              {kdRatioRanges.map((range, index) => (
                <option key={index} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </label>
          <label>
            Page Number:
            <input
              type="number"
              value={pageNumber}
              onChange={(e) => setPageNumber(e.target.value)}
            />
          </label>
        </div>
        </div>
      
      <hr className="gradient"></hr>

      <div className="col-sm-10 mx-auto">
        <div className="card-container " style={{ display: 'flex', flexWrap: 'wrap' }}>
          {filterEntries().map((entry, index) => (
            <div key={index} className="card" style={{ flex: '0 0 23%', marginRight: '1%', marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="topcard">
                  <span className="pro">PRO</span>
                  <img
                    className="card-img-top"
                    src={`https://robohash.org/${entry.username}.png?size=200x200`}
                    alt={`Card ${index}`}
                    style={{ width: "20%", height: "50" }}
                  />
                </div>
              </div>
              <div className="card-body justify-content-evenly">
                <p className="card-title"><i className="fa-solid fa-circle-user"></i><strong>Username: </strong>{`${entry.username || 'N/A'}`}</p>
                <p className="card-text"><i className="fa-solid fa-percent"></i><strong>K/D Ratio:</strong>{`${entry.values.kdRatio || 'N/A'}`}</p>
                <p className="card-text">
                  <i className="fa-brands fa-connectdevelop"></i><strong>Level:</strong> {`${entry.values.level || 'N/A'}`}
                </p>
                <p className="card-text"><i className="fa-solid fa-trophy"> </i><strong>Wins: </strong>{`${entry.values.wins || 'N/A'}`}</p>
              </div>
              <div className="d-flex justify-content-evenly bottom">
                <button className="btn btn-outline-success btn-rounded btn-sm" onClick={handleContactClick}>
                  Send Message
                </button>
                <button className= " btn btn-outline-primary">
                  Favorite
                </button>
                <Learnmore
                  placement="top"
                  title={`${entry.username}'s Details`}
                  content={{
                    killstreak: entry.values.killstreak,
                    accuracy: entry.values.accuracy,
                    losses: entry.values.losses,
                    timePlayed: entry.values.timePlayed,
                    headshots: entry.values.headshots,
                    gamesPlayed: entry.values.gamesPlayed,
                    scorePerMinute: entry.values.scorePerMinute,
                  }}
                  onContactClick={handleContactClick}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {showMessageModal && <Message show={showMessageModal} handleClose={() => setShowMessageModal(false)} />}
    </div>
  );
};


// ... (Favorite Player Profile)

// ... (above code)

const savePlayerProfile = (username, kdRatio, level, wins) => {
  fetch('/api/playerFav', { // Replace with your actual backend endpoint
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      kd_ratio: kdRatio,
      level: level,
      wins: wins,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log('Player profile saved successfully:', data);
    })
    .catch((error) => {
      console.error('Error saving player profile:', error);
    });
};

// ... (remaining code)


const fetchPlayerProfiles = () => {
  fetch('/player-profiles')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log('Player profiles:', data);
    })
    .catch((error) => {
      console.error('Error fetching player profiles:', error);
    });
};

// ... (remaining code)

export default Cod;
