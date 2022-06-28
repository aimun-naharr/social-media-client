import React, { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal/ProfileModal";
const InfoCard = () => {
  const [openModal, setOpenModal]=useState(false)
  return (
    <div className="infoCard">
      <div className="infoHead">
        <h3>Your info</h3>
        <UilPen  onClick={()=>{setOpenModal(true)}}/>
        <ProfileModal openModal={openModal} setOpenModal={setOpenModal}/>
      </div>
      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>In a relationship</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Chittagong</span>
      </div>
      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>Google</span>
      </div>
      <button className="button l-button">Log out</button>
    </div>
  );
};

export default InfoCard;
