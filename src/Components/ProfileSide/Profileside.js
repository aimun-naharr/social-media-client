import React from 'react';
import ProfileCard from '../../profileCard/ProfileCard';
import LogoSearch from '../LogoSearch/LogoSearch';
import './profileside.css'
const Profileside = () => {
    return (
        <div className='profileside'>
            <LogoSearch></LogoSearch>
            <ProfileCard></ProfileCard>
        </div>
    );
};

export default Profileside;