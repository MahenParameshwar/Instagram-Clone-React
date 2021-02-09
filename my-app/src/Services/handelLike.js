import axios from 'axios'

async function handelLike(liked_posts,userId){
    
    const data = axios.patch(`https://instagram-mock-server.herokuapp.com/users/${userId}`,{
                    liked_posts
                    }).then((res)=>{return res.data}).catch(err=>console.log(err.message))
    return data;
}

export {handelLike}