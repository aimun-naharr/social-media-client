import React from 'react';
import ProfileCard from '../../profileCard/ProfileCard';
import FollowerCard from '../FollowerCard/FollowerCard';
import LogoSearch from '../LogoSearch/LogoSearch';
import './profileside.css'
const Profileside = () => {
    return (
        <div className='profileside'>
            <LogoSearch></LogoSearch>
            <ProfileCard location='homepage'></ProfileCard>
            <FollowerCard/>
        </div>
    );
};

export default Profileside;