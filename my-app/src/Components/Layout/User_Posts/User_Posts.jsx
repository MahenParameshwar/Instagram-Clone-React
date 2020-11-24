import React, { Component } from "react";
import { DataContext } from "../../Context/DataContextProvider";
import axios from "axios"

class User_Posts extends Component {
  constructor(props){
    super(props)
    this.state={
    users:[]
  }
}


 componentDidMount(){
    axios
    .get(`http://localhost:3004/users`)
    .then((res) => {
      this.setState({
        users: [...res.data],
        isLoading: false,
        error: false,
      });
    })
    .catch((err) => {
      this.setState({
        error: true,
        isLoading: false,
      });
    });
  }
  render(){
    const {item} = this.props
    const {users} = this.state
    
    const userData = users?.find(user=>user.user_id===item.user_id)
    const {username,avatar_img} = {...userData}
    console.log(username,avatar_img)
    return (
      <div style={{ border: "1px solid black" ,width:"65%",padding:5,margin:10}}>
        <div style={{display:"flex"}}>
          <div><img width="30px" src={avatar_img} style={{borderRadius:"50%"}}/></div>
          <div style={{display:"flex"}}>
            <div>{username}</div>
            <div>...</div>
          </div>
          </div>
        <div>
          <img style={{objectFit:"contain",width:"100%"}} src={item.post_img} alt="" />
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
  


}

User_Posts.contextType = DataContext
export { User_Posts };