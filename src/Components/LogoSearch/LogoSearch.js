import React from 'react';
import './Logosearch.css'
import logo from '../../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'
const LogoSearch = () => {
    return (
        <div className='logosearch'>
           <img src={logo} alt='logo'/>
           <div className='search'>
            <input type='text' placeholder='#explore'/>
            <div className='searchIcon'>
                <UilSearch/>

            </div>

           </div>
        </div>
    );
};

export default LogoSearch;