import React, { useEffect } from 'react';
import './Posts.css'
import Post from '../Post/Post';
import {useDispatch, useSelector} from "react-redux"
import { getTimelinePosts } from '../../Actions/PostAction';
const Posts = () => {
    const dispatch=useDispatch()
    const user=useSelector((state)=>state.authReducer.authData)
    const {posts, loading}= useSelector((state)=>state.postReducer)
    useEffect(()=>{
        dispatch(getTimelinePosts, user._id)
    },[])
    return (
        <div className='posts'>
            {loading? 'fetching posts...':
                posts.map((post, id)=>{return <Post post={post} id={id}/>})
            }
            
        </div>
    );
};

export default Posts;