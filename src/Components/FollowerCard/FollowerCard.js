import React, { useEffect, useState } from "react";
import "./FollowerCard.css";
import Followers from "../../Data/Followers";
import User from "../User/User";
import { useSelector } from "react-redux";
import { getAllUser } from "../../Api/UserRequest";
const FollowerCard = () => {
  const [persons, setPersons]=useState([])
  const { user } = useSelector((state) => state.authReducer.authData)
useEffect(()=>{
  const fetchPersons=async()=>{
const {data}=await getAllUser()
setPersons(data)

  }
  fetchPersons()
},[])

  return (
    <div className="followerCard">
      <h3>People you may know</h3>
      {persons.map((person, id) => {
        if(person._id !==user._id){
          return (
            <User person={person} key={id}/>
    );
        }
       
})}
</div>
);
}


export default FollowerCard;
