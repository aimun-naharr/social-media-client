import React from "react";
import "./FollowerCard.css";
import Followers from "../../Data/Followers";
const FollowerCard = () => {
  return (
    <div className="followerCard">
      <h3>People you may know</h3>
      {Followers.map((follower, id) => {
        return (
          <div className="follower">
            <div>
              <img
                src={follower.img}
                alt='followerImage'
                className="followerImage"
              />
              <div className="name">
                <span>{follower.name}</span>
                <span>@{follower.userName}</span>
              </div>
            </div>
            <button className="button fc-button">Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowerCard;
