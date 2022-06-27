import React from 'react';
import './Posts.css'
import PostsData from '../../Data/PostsData'
import Post from '../Post/Post';
const Posts = () => {
    return (
        <div className='posts'>
            {
                PostsData.map((post, id)=>{return <Post post={post} id={id}/>})
            }
            
        </div>
    );
};

export default Posts;