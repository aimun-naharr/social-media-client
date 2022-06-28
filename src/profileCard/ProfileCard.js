import React from "react";
import "./ProfileCard.css";
import profile from "../../src/img/profileImg.jpg";
import cover from "../../src/img/cover.jpg";
const ProfileCard = () => {
  const profilePage=true
  return (
    <div className="profileCard">
      <div className="profileImages">
        <img src={cover} alt="" />
        <img src={profile} alt="" />
      </div>
      <div className="profileName">
        <span>Emily Richard</span>
        <span>UI/UX Designer</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>1005</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Followings</span>
          </div>
          {
            profilePage && <>
 <div className="vl"></div>
          <div className="follow">
            <span>3</span>
            <span>Posts</span>
          </div>
            </>
          }
        </div>
        <hr/>
      </div>
      {
        profilePage? '':  <span>
        My Profile
      </span>
      }
     
    </div>
  );
};

export default ProfileCard;
