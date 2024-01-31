import React, { useEffect, useState } from "react";
import "../../styles/CallofDutybtn.css";
import gamesmx1 from "../../img/gamesm1.png";
import gamesmx2 from "../../img/gamesm2.png";
import gamesmx3 from "../../img/gamesm3.png";
import gamesmx4 from "../../img/gamesm4.png";

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
    // <>

      <div class="row">
         {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Player stat starts  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
         <div class="container">
        <h1><i class="fa-solid fa-shield-halved"></i>Player Stats</h1>
        <br/>
            <div class="Playerstats">
             
              <label>
                Filter by Level Range:
              
                <select
                  value={filterLevelRange}
                  onChange={(e) => setFilterLevelRange(e.target.value)}
                className="select-classic">
                  <option value="">All</option>
                  <td/>
                  {levelRanges.map((range, index) => (
                    <option key={index} value={range}>
                      {range}
                    </option>
 
 


                  ))}

                   
                </select>
              </label>
              <label >
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
           
            <hr class="gradient"></hr>

{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Player stat starts  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>< */}
        <div class="col-sm-10">
        



            <div className="card-container " style={{ display: "flex", flexWrap: "wrap" }}>
            
              {filterEntries().map((entry, index) => (
         <div key={index} className="card" style={{ flex: "0 0 23%", marginRight: "1%", marginBottom: "20px" }}>
           <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
           <div class="topcard">
	<span class="pro">PRO</span>
             <img
               className="card-img-top"
               src={`https://robohash.org/${entry.username}.png?size=200x200`}
               alt={`Card ${index}`}
               style={{ width: "20%", height: "50" }}
             />
           </div>
           </div>
           <div className="card-body justify-content-evenly">
             <p className="card-title"><i class="fa-solid fa-circle-user"></i><strong>Username: </strong>{`${entry.username || 'N/A'}`}</p>
             <p className="card-text"><i class="fa-solid fa-percent"></i><strong>K/D Ratio:</strong>{`${entry.values.kdRatio || 'N/A'}`}</p>
             <p className="card-text">
             <i class="fa-brands fa-connectdevelop"></i><strong>Level:</strong> {`${entry.values.level || 'N/A'}`}
             </p>
             <p className="card-text"><i class="fa-solid fa-trophy"> </i><strong>Wins: </strong>{`${entry.values.wins || 'N/A'}`}</p>
             {/* <div style={{ display: "flex", justifyContent: "space-between" }}> */}
             </div>
             <div class="d-flex justify-content-evenly bottom">
             <button className="btn btn-outline-success btn-rounded btn-sm">Send Message</button>
               <button className="btn btn-info btn-rounded btn-sm">Learn More!</button>
         </div>

        
         
   
       
              </div>


              ))}
           
         
           
              </div>
   
              </div>
                         {/* <div class="col-sm-2">
                         <div className="top-downloaded">
                    <div className="heading-section">




                        <h4 className="Heading text-center">
                            Top Downloaded
                        </h4>
                    </div>




                    <br />




                    <ul className="holder">

                        <li className="Callofduty">
                            <img src={gamesmx1} alt Class="templatemo-item" />
                            <h4>Call of Duty </h4>
                            <h6>Sandbox
                            </h6>
                            <span>
                                <i class="fa-solid fa-star"></i>




                                4.9
                            </span>
                            <span><i class="fa fa-download"> </i></span>
                            "2.2M"

                        </li>



                        <li className="Callofduty">
                            <img src={gamesmx2} alt Class="templatemo-item" />
                            <h4>Call of Duty </h4>
                            <h6>Sandbox
                            </h6>
                            <span>
                                <i class="fa-solid fa-star"></i>




                                4.9
                            </span>
                            <span><i class="fa fa-download"> </i></span>
                            "2.2M"




                        </li>


                        <li className="Callofduty">
                            <img src={gamesmx3} alt Class="templatemo-item" />
                            <h4>Call of Duty </h4>
                            <h6>Sandbox
                            </h6>
                            <span>
                                <i class="fa-solid fa-star"></i>




                                4.9
                            </span>
                            <span><i class="fa fa-download"> </i></span>
                            "2.2M"

                        </li>



                        <li className="Callofduty">
                            <img src={gamesmx4} alt Class="templatemo-item" />
                            <h4>Call of Duty </h4>
                            <h6>Sandbox
                            </h6>
                            <span>
                                <i class="fa-solid fa-star"></i>




                                4.9
                            </span>
                            <span><i class="fa fa-download"> </i></span>
                            "2.2M"
                        </li>



                    </ul>

                </div> */}

            </div>
        // </div>


           
          // </>
          );
};

          export default Cod;
