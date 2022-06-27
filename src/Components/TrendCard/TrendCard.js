import React from 'react';
import trendData from '../../Data/TrendData';
import './trendCard.css'
const TrendCard = () => {
    return (
        <div className='trendCard'>
            <h3>Trends for you</h3>
            {
                trendData.map((trend, id)=>{
                    return(
                        <div className='trend'>
                            <span>#{trend.name}</span>
                            <span>{trend.share}k shares</span>
                        </div>
                )
                })
            }
            <button className='button r-button'>Share</button>
        </div>
    );
};

export default TrendCard;