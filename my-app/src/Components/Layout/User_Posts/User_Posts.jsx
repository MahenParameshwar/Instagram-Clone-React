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
    const {username} = {...userData}
    console.log(username)
    return (
      <div style={{ border: "1px solid black" }}>
        <div>{username}</div>
        <div>
          <img src={item.post_img} alt="" />
        </div>
        <div></div>
      </div>
    );
  }
  


}

User_Posts.contextType = DataContext
export { User_Posts };
