import React, { useState } from 'react';
import './Post.css'
import comment from '../../img/comment.png'
import Share from '../../img/share.png'
import like from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import { useSelector } from 'react-redux';

const Post = ({post}) => {
    const {user}=useSelector((state)=>state.authReducer.authData)
    const [likes, setLikes]=useState(post.likes.length)
    const [liked, setLiked]=useState(post.likes.includes(user._id))
    const {image, name, desc}=post
    
    return (
        <div className='post'>
            <img src={image? process.env.REACT_APP_PUBLIC_FOLDER + image: ""} alt=""/>
            <div className='postReact'>
<img src={liked? like: NotLike} alt="" style={{cursor:'pointer'}}/>
<img src={comment} alt=""/>
<img src={Share} alt=""/>
            </div>
            <span>{likes}Likes</span>
            <div className='detail'>
                <span><b>{name}</b></span>
                <span>{desc}</span>
            </div>
        </div>
    );
};

export default Post;