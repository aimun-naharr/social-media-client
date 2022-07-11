import * as PostApi from '../Api/PostRequest.js'

export const getTimelinePosts=(id)=>async(dispatch)=>{
    dispatch({types: "RETREIVING_START"})
    console.log(id)
        try {
            const {data}=await PostApi.getTimelinePosts(id)
            console.log(data)
            dispatch({type: "RETREIVING_SUCCESS", data:data})
        } catch (error) {
            dispatch({types: "RETREIVING_FAIL"})
            console.log(error)
        }
}