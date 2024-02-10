import React, { useState } from "react";
import "../../styles/Profile.css";

export const Profile = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [bio, setBio] = useState("");

    const handleSaveChanges = () => {
        
        console.log("Changes saved:", { firstName, lastName, email, phoneNumber, streetAddress, city, state, zipCode, bio });
    };

    return (


        
        <div class="row">
            <div class="col-4"> <aside>
  <p></p>
  <a href="javascript:void(0)">
  <i class="fa-regular fa-user" aria-hidden="true"></i>
    Profile
  </a>
  <a href="javascript:void(0)">
    <i class="fa fa-laptop" aria-hidden="true"></i>
   Security
  </a>
  <a href="javascript:void(0)">
    <i class="fa fa-clone" aria-hidden="true"></i>
   Avatar
  </a>
  <a href="javascript:void(0)">
  <i class="fa-solid fa-message" aria-hidden="true"></i>
    Message Settings
  </a>
  <a href="javascript:void(0)">
  <i class="fa-solid fa-gamepad" aria-hidden="true"></i>
    Game settings
  </a>
</aside>

<div class="social">

</div></div>




        <div class="col-8"> <div className="centered-form">

<div class="form2">
<div class="title"> <i class="fa-regular fa-user"></i> Your Profile</div>

<div class="input-container2 ic1">


    
    <input
        id="firstname"
        class="input2" 
        type="text"
        placeholder=" "
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
    />
       <div class="cut"></div>
       <label for="firstname" class="placeholder1">First name</label>
     
  

</div>


<div class="input-container2 ic2">

    <input
        type="text"
        id="lastname"
        class="input2" 
        placeholder=" "
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
    />

       <div class="cut"></div>
       <label for="Lastname" class="placeholder1">Last Name</label>
</div>




<div class="input-container2 ic2">

    
    <input
        type="email"
        id="email"
        class="input2" 
        placeholder=" "
        value={email}
        onChange={(e) => setEmail(e.target.value)}
    />


       <div class="cut"></div>
       <label for="email" class="placeholder1">Email</label>
</div>



<div class="input-container2 ic2">
   
    <input
        type="tel"
        id="phoneNumber"
        class="input2" 
        placeholder=" "
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
    />

       <div class="cut"></div>
       <label for="phoneNumber" class="placeholder1">Phone Number:</label>
</div>

<div class="input-container2 ic2">
    
    <input
        type="text"
        id="streetAddress"
        class="input2" 
        placeholder=" "
        value={streetAddress}
        onChange={(e) => setStreetAddress(e.target.value)}
    />

       <div class="cut"></div>
       <label for="streetAddress" class="placeholder1">Street Address:</label>

</div>


<div class="input-container2 ic2">
    
    <input
        type="text"
        id="city"
        class="input2" 
        placeholder=" "
        value={city}
        onChange={(e) => setCity(e.target.value)}
    />

       <div class="cut"></div>
       <label for="city" class="placeholder1">City:</label>
</div>

<div class="input-container2 ic2">
   
    <input
        type="text"
        id="state"
        class="input2" 
        placeholder=" "
        value={state}
        onChange={(e) => setState(e.target.value)}
    />

       <div class="cut"></div>
       <label for="state" class="placeholder1">State:</label>
</div>





<div class="input-container2 ic2">
    
    <input
        type="text"
        id="zipCode"
        class="input2" 
        placeholder=" "
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
    />

       <div class="cut"></div>
       <label for="zipCode" class="placeholder1">Zip Code:</label>
</div>






<div class="input-container2 ic2">
    
    <textarea
        id="bio"
        class="input2" 
        placeholder=" "
        value={bio}
        onChange={(e) => setBio(e.target.value)}
    />

       <div class="cut"></div>
       <label for="bio" class="placeholder1">Bio:</label>
</div>




<button onClick={handleSaveChanges}  type="text" class="save">Save Changes</button>
</div>
</div></div>
        
      

       

        </div>



    );
};
