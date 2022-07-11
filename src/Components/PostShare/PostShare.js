import React, { useEffect } from "react";
import "./PostShare.css";
import ProfileImg from "../../img/profileImg.jpg";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage, uploadPost } from "../../Actions/uploadImage.js";
import * as UserApi from '../../Api/UserRequest.js'

const PostShare = () => {
  const loading=useSelector((state)=>state.postReducer.uploading)
  const user=useSelector((state)=>state.authReducer.authData)
  
  const [profileUser, setProfileUser]=useState({})
  useEffect(()=>{
    const fetchProfileUser=async()=>{
      
        const profileUser=await UserApi.getUser(user.user._id)
        setProfileUser(profileUser.data)
        
    }
    fetchProfileUser()
  },[profileUser])
  const serverPublic=process.env.REACT_APP_PUBLIC_FOLDER
  const dispatch=useDispatch()
  const [image, setImage] = useState(null);
  const imageRef = useRef()
  const desc=useRef()
  const onImageChange = (e) => {
    
    if(e.target.files && e.target.files[0]){
      const img = e.target.files[0] 
      setImage(img)
    }
  };

  const reset=()=>{
    setImage(null)
    desc.current.value=""
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    
    const newPost={
      desc: desc.current.value,
      userId: user.user._id
    }
    if(image){
     const data= new FormData()
     const fileName=Date.now()+ image.name
     data.append("name", fileName)
     data.append("file", image)
     newPost.image=fileName
     try {
      dispatch(uploadImage(data))
     } catch (error) {
      console.log(error)
     }
     dispatch(uploadPost(newPost))
     
    }reset()
  }
  return (
    <div className="postShare">
      <img src={profileUser.profilePicture? serverPublic + profileUser.profilePicture: serverPublic+ "defaultProfile.jpg"} alt="profileImg" />
      <div>
        <input ref={desc} required type="text" placeholder="What's on your mind?" />
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: "var(--shedule)" }}>
            <UilSchedule />
            Schedule
          </div>
          <button onClick={handleSubmit} className="button ps-button" disabled={loading}>{loading? 'uploading': 'Share'}</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
         {
            image && (<div className="previewImg"><UilTimes onClick={()=>setImage(null)}/>
            <img src={URL.createObjectURL(image)} alt='previewImg'/></div>)
         }
      </div>
    </div>
  );
};

export default PostShare;
