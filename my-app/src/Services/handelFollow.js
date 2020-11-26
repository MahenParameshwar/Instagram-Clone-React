import axios from 'axios'

async function handelFollow(following_users,userId){
    
    const data = axios.patch(`http://localhost:3004/users/${userId}`,{
                    following_users
                    }).then((res)=>{return res.data}).catch(err=>console.log(err.message))
    return data;
}

export {handelFollow}