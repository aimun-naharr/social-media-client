import React, { useEffect, useState } from "react";
import "./ProfileCard.css";

import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import * as UserApi from '../Api/UserRequest'
const ProfileCard = ({location}) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [profileUser, setProfileUser]=useState({})
  
  useEffect(()=>{
    const fetchProfileUser=async()=>{
      
        const updatedUser=await UserApi.getUser(user._id)
        setProfileUser(updatedUser.data)
       
    }
    fetchProfileUser()
  },[profileUser])
  const posts=useSelector((state)=>state.postReducer.posts)
  const serverPublic=process.env.REACT_APP_PUBLIC_FOLDER
  
  return (
    <div className="profileCard">
      <div className="profileImages">
        <img style={{ height: '10rem'}} src={profileUser.coverPicture? serverPublic + profileUser.coverPicture: serverPublic+ "defaultCover.jpg"} alt="" />
        <img src={profileUser.profilePicture? serverPublic +profileUser.profilePicture: serverPublic+ "defaultProfile.jpg"} alt="" />
      </div>
      <div className="profileName">
        <span>{user.firstName} {user.lastName}</span>
        <span>{user.worksAt? user.worksAt: ""}</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{user.following.length}</span>
            <span>Followings</span>
          </div>
          {
            location==='profilePage' && <>
 <div className="vl"></div>
          <div className="follow">
            <span>{posts.filter((post)=>post.userId===user._id).length}</span>
            <span>Posts</span>
          </div>
            </>
          }
        </div>
        <hr/>
      </div>
      {
        location==='profilePage'? '':  <span>
        <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/profile/${user._id}`}>My Profile</Link>
      </span>
      }
     
    </div>
  );
};

export default ProfileCard;
