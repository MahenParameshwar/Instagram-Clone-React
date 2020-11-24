import React, { Component } from "react";
import axios from "axios";

const DataContext = React.createContext();

class DataContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
      isLoading: false,
      error: false,
      posts: [],
      users:[]
    };
    this.getPosts = this.getPosts.bind(this);
    this.getUsers = this.getUsers.bind(this)


  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get(`http://localhost:3004/posts`)
      .then((res) => {
        this.setState({
          posts: [...res.data],
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

  getPosts() {
    const { posts } = this.state;
    return posts;
  }
  getUsers(){
      const {users} =this.state;
      return users
  }


  render() {
    const { isAuth, isLoading, error ,usersData } = this.state;
    console.log(usersData)
    const { getPosts,getUsers} = this;
    const value = {
      getPosts,
      getUsers,
      isAuth,
      isLoading,
      error,
    };
    return (
      <DataContext.Provider value={value}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export { DataContext, DataContextProvider };