import axios from 'axios'

const API=axios.create({baseURL: "https://squid-media.herokuapp.com"})

export const getTimelinePosts=(id)=>API.get(`post/${id}/timeline`)

export const getPosts=()=>API.get('/post')
export const likePost=(id, userId)=>API.put(`post/${id}/like`, {userId: userId})