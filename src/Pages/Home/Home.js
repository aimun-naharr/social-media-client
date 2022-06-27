import React from "react";
import PostSide from "../../Components/PostSide/PostSide";
import Profileside from "../../Components/ProfileSide/Profileside";
import RightSide from "../../Components/RightSide/RightSide";
import './Home.css'
const Home = () => {
  return (
    <div className="home">
      <Profileside/>
      <PostSide/>
     <RightSide/>
    </div>
  );
};

export default Home;
