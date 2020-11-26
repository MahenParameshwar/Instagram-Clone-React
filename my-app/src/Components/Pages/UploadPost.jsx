import React, { Component } from 'react'
import { createPost } from '../../Services'
import {v4 as uuid} from 'uuid'
import { DataContext } from '../Context/DataContextProvider'


class UploadPost extends Component{
    constructor(props){
        super(props)

        this.state = {
            imgSrc:null,
            description:""
        }

        this.photo = React.createRef()
    }

    handelChange = (e)=>{
        const {name,value,type} = e.target;
        const val = (type==='file')?URL.createObjectURL(e.target.files[0])
                    :value;
        this.setState({
            [name]:val
        })
    }

    handelSubmit = (e)=>{
        e.preventDefault();
        const {description,imgSrc} = this.state;
        const {loggedUserData} = this.context
        const {user_id,username} = loggedUserData;
        
        createPost('http://localhost:3004/posts',{
                post_id:uuid(),
                likes:0,
                comment_count:0,
                post_description:description,
                post_img:imgSrc,
                user_id,
                username
        })
        
        
    }

    render(){
        const {description,imgSrc} = this.state;
        
        return(
            <>
            <div className="container">
            <form onSubmit={this.handelSubmit}>
                    <div>
                        <label htmlFor="">
                            Description
                        </label>
                        <input 
                            type="description" 
                            name="description"
                            onChange={this.handelChange}
                            value = {description}
                            id=""/>
                    </div>
                    <div>
                        <label htmlFor="">Photo</label>
                        <input type="file" ref={this.photo} name="imgSrc" onChange={this.handelChange}/>
                    </div>
                    <input type="submit" value="submit"/>
                </form>
                
                {
                    imgSrc && <img src={imgSrc} alt="icon" height="100px"/>
                }
            </div>
            </>
        )
    }
}

UploadPost.contextType = DataContext;
export default UploadPost