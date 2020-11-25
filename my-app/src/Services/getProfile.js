import axios from 'axios'

async function getProfile(url){
    const data = await axios.get(url)
                        .then((res)=>{
                            return res.data
                        }
                    ).catch(err=>err)
    return data;
                }

export {getProfile}