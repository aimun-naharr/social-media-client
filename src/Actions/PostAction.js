import * as PostApi from '../Api/PostRequest'

export const getTimelinePosts=(id)=>async(dispatch)=>{
    dispatch({types: "RETREIVING_START"})
        try {
            const {data}=await PostApi.getTimelinePosts(id)
            dispatch({type: "RETREIVING_SUCCESS", data:data})
        } catch (error) {
            dispatch({types: "RETREIVING_FAIL"})
            console.log(error)
        }
}