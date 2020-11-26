import axios from 'axios'

async function handelBookmark(saved_posts,userId){
    
    const data = axios.patch(`http://localhost:3004/users/${userId}`,{
                    saved_posts
                    }).then((res)=>{return res.data}).catch(err=>console.log(err.message))
    return data;
}

export {handelBookmark}