import React from 'react';
import './rightside.css'
import home from '../../img/home.png'
import comment from '../../img/comment.png'
import noti from '../../img/noti.png'
import {UilSetting} from '@iconscout/react-unicons'
import TrendCard from '../TrendCard/TrendCard';
import { Link } from 'react-router-dom';
const RightSide = () => {
    return (
        <div className='rightSide'>
            <div className='navIcons'>
            <Link to='/home'><img src={home} alt=""/></Link>
            <UilSetting/>
            <img src={noti} alt=""/>
            <img src={comment} alt=""/>
            </div>
            <TrendCard/>
            
        </div>
    );
};

export default RightSide;