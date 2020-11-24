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
    };
    this.getPosts = this.getPosts.bind(this);

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

 
  }

  getPosts() {
    const { posts } = this.state;
    return posts;
  }
 

  render() {
    const { isAuth, isLoading, error } = this.state;
    const { getPosts} = this;
    const value = {
      getPosts,
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