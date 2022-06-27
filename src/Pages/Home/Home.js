import React from "react";
import PostSide from "../../Components/PostSide/PostSide";
import Profileside from "../../Components/ProfileSide/Profileside";
import './Home.css'
const Home = () => {
  return (
    <div className="home">
      <Profileside/>
      <PostSide/>
      <div className="rightside">Right</div>
    </div>
  );
};

export default Home;
