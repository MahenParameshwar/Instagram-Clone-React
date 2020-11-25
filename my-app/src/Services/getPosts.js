import axios from 'axios'

async function getPosts(url){
    const data = await axios.get(url)
                        .then((res)=>{
                            return res.data
                        }
                    ).catch(err=>err)
    return data;
                }

export {getPosts}