import axios from 'axios'

async function createPost(url,postObj){
    console.log(postObj)
    
    const data = await axios.post(url,postObj)
    .then((res)=>{
                    console.log(res.data);
                }
    ).catch(err=>err)
    return data
}

export {createPost}