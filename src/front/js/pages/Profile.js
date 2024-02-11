import React, { useState, useEffect } from "react";
import "../../styles/Profile.css";
import { Modal } from "react-bootstrap";

export const Profile = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    bio: "",
    playStyle: "",
  };

  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem("formData");
    return storedData ? JSON.parse(storedData) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    console.log("Changes saved:", formData);
    
    setShowPopup(true);
  };

  const [showPopup, setShowPopup] = useState(false);
  const handlePopupClose = () => setShowPopup(false);

 
  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className="centered-form">
      <div className="form2">
        <div className="title">
          <i className="fa-solid ">🪖🎖️</i> Your Profile
        </div>

        {Object.keys(formData).map((key) => (
          <div key={key} className="input-container2 ic2">
            {key !== "bio" && key !== "playStyle" ? (
              <input
                type="text"
                id={key}
                className="input2"
                placeholder=" "
                value={formData[key]}
                onChange={handleChange}
                name={key}
              />
            ) : key === "bio" ? (
              <textarea
                id={key}
                className="input2"
                placeholder=" "
                value={formData[key]}
                onChange={handleChange}
                name={key}
              />
            ) : (
              <select
                id={key}
                className="input2"
                value={formData[key]}
                onChange={handleChange}
                name={key}
              >
                <option value=""></option>
                <option value="Tactical">Tactical</option>
                <option value="Defensive">Defensive</option>
                <option value="Aggressive">Aggressive</option>
                <option value="Stealthy">Stealthy</option>
              </select>
            )}
            <div className="cut"></div>
            <label htmlFor={key} className="placeholder1">
              {capitalizeFirstLetter(key.replace(/([a-z])([A-Z])/g, "$1 $2"))}
            </label>
          </div>
        ))}

        <Modal show={showPopup} onHide={handlePopupClose} className="custom-modal">
          <Modal.Header closeButton>
            <Modal.Title>Your profile has been successfully updated!</Modal.Title>
          </Modal.Header>
        </Modal>

        <button
          onClick={handleSaveChanges}
          type="button"
          className="save"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};
 