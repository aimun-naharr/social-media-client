import React from "react";
import "./PostShare.css";
import ProfileImg from "../../img/profileImg.jpg";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { useRef, useState } from "react";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className="postShare">
      <img src={ProfileImg} alt="profileImg" />
      <div>
        <input type="text" placeholder="What's on your mind?" />
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
          <button className="button ps-button">Share</button>
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
            <img src={image.image} alt='previewImg'/></div>)
         }
      </div>
    </div>
  );
};

export default PostShare;
