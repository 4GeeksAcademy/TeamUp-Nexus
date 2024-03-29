import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../img/Logo.png";
import "../../styles/navbar.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = () => {
    actions.logout();
    navigate("/logout");
  };

  return (
    <nav className="navbar-expand-md navbar" style={{ color: "#ffcc66", backgroundColor: "transparent", borderColor: "#ffcc66" }}>
      <Link to="/">
        <span className="navbar-brand mb-0 h1" style={{ color: "#fff" }}><img src={Logo} height={120} width={225} /></span>
      </Link>
      {store.token && (
        
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li>
            <Link to="/private">
            <button className="btnnavbar1" style={{ color: "#ffcc66", backgroundColor: "transparent", borderColor: "#ffcc66" }}>Games</button>
               </Link>
          </li>
          <li>
            <Link to="/profile">
            <button className="btnnavbar1" style={{ color: "#ffcc66", backgroundColor: "transparent", borderColor: "#ffcc66" }}>Profile</button>
            </Link>
          </li>
          <li>
            <Link to="/messages">
            <button className="btnnavbar1" style={{ color: "#ffcc66", backgroundColor: "transparent", borderColor: "#ffcc66" }}>Messages</button>
            </Link>
          </li>
          <li>
            <Link to="/playerfav">
            <button className="btnnavbar1" style={{ color: "#ffcc66", backgroundColor: "transparent", borderColor: "#ffcc66" }}>Favorites</button>
            </Link>
          </li>
          {/* <li>
            <Link to="/settings" className="btnnavbar1" style={{ color: "#ffcc66", backgroundColor: "transparent", borderColor: "#ffcc66" }}>Settings</Link>
          </li> */}
        </ul>
        // </div>
      )}
      {!store.token ? (
        <div>
          <Link to="/signup">
            <button className="btnnavbar" style={{ color: "#ffcc66", backgroundColor: "transparent", borderColor: "#ffcc66" }}>Sign up</button>
          </Link>
          <Link to="/login">
            <button className="btnnavbar" style={{ color: "#ffcc66", backgroundColor: "transparent", borderColor: "#ffcc66" }}>Log in</button>
          </Link>
        </div>
      ) : (
        <button onClick={handleLogout} className="btnnavbar1" style={{ color: "#ffcc66", backgroundColor: "transparent", borderColor: "#ffcc66" }}>Logout</button>
      )}
    </nav>
  );
};