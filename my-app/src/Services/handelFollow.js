import axios from 'axios'

async function handelFollow(following_users,userId){
    
    const data = axios.patch(`https://instagram-mock-server.herokuapp.com/users/${userId}`,{
                    following_users
                    }).then((res)=>{return res.data}).catch(err=>console.log(err.message))
    return data;
}

export {handelFollow}