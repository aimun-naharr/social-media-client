import React from 'react';
import PostSide from '../../Components/PostSide/PostSide';
import ProfileLeft from '../../Components/ProfileLeft/ProfileLeft';
import RightSide from '../../Components/RightSide/RightSide';
import ProfileCard from '../../profileCard/ProfileCard';
import './profile.css'
const Profile = () => {
    return (
        <div className='profile'>
            <ProfileLeft/>
            <div className='profileCenter'>
               
                <ProfileCard location='profilePage'/>
               <PostSide/>
            </div>
            <RightSide/>
        </div>
    );
};

export default Profile;