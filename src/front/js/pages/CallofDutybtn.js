import React, { useEffect, useState } from "react";

export const Cod = () => {
  const [playerStats, setPlayerStats] = useState(null);
  const [filterLevelRange, setFilterLevelRange] = useState("");
  const [filterKDRatioRange, setFilterKDRatioRange] = useState("");
  const [pageNumber, setPageNumber] = useState(1000);

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
    <>
      <h1>Player Stats</h1>
      <div>
        <label>
          Filter by Level Range:
          <select
            value={filterLevelRange}
            onChange={(e) => setFilterLevelRange(e.target.value)}
          >
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
      <div className="card-container" style={{ display: "flex", flexWrap: "wrap" }}>
        {filterEntries().map((entry, index) => (
          <div key={index} className="card" style={{ flex: "0 0 23%", marginRight: "1%", marginBottom: "20px" }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img
                className="card-img-top"
                src={`https://robohash.org/${entry.username}.png?size=200x200`}
                alt={`Card ${index}`}
                style={{ width: "20%", height: "50" }}
              />
            </div>
            <div className="card-body">
              <p className="card-title"><strong>Username: </strong>{`${entry.username || 'N/A'}`}</p>
              <p className="card-text"><strong>K/D Ratio:</strong>{`${entry.values.kdRatio || 'N/A'}`}</p>
              <p className="card-text">
                <strong>Level:</strong> {`${entry.values.level || 'N/A'}`}
              </p>
              <p className="card-text"><strong>Wins: </strong>{`${entry.values.wins || 'N/A'}`}</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button className="btn btn-primary">Send Message</button>
                <button className="btn btn-primary">Learn More!</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cod;
