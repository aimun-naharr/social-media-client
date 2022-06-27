import React from 'react';
import './Post.css'
import comment from '../../img/comment.png'
import Share from '../../img/share.png'
import like from '../../img/like.png'
import NotLike from '../../img/notlike.png'

const Post = ({post, id}) => {
    const {img, name, liked ,likes, desc}=post
    return (
        <div className='post'>
            <img src={img} alt=""/>
            <div className='postReact'>
<img src={liked? like: NotLike} alt=""/>
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