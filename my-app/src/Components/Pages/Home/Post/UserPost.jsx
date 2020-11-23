import React, { Component } from "react";
import { DataContext } from "../../../Context/DataContextProvider";

class UserPost extends Component {
  constructor(props){
    super(props)
    this.state={
    users:null,
  }
}
 async componentDidMount(){
   const {getUsers} = this.context
   const {item} = this.props
   const {users} = this.state

    const ur = users || await getUsers()

   const userData = ur.find(user=>user.user_id===item.user_id)
   //console.log(userData)

   this.setState({
     users:{...userData}
   })
}


  render(){
    const {item} = this.props
    const {users} = this.state
    console.log(users)
    return (
      <div key={item.post_id} style={{ border: "1px solid black" }}>
        <div>{}</div>
        <div>
          <img src={item.post_img} alt="" />
        </div>
        <div></div>
      </div>
    );
  }
  


}

UserPost.contextType = DataContext
export { UserPost };
