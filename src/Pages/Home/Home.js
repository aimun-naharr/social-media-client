import React from "react";
import Profileside from "../../Components/ProfileSide/Profileside";
import './Home.css'
const Home = () => {
  return (
    <div className="home">
      <Profileside/>
      <div className="postside">Post</div>
      <div className="rightside">Right</div>
    </div>
  );
};

export default Home;
