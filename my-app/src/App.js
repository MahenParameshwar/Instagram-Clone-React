import { Component } from 'react';
import './App.css';
import { DataContext } from './Components/Context/DataContextProvider';
import { Header } from './Components/Layout';
import { Routes } from './Components/Routes';


class App extends Component {

  render(){
    let {isAuth} = this.context;

    return (
      <div className="App">
        
        { isAuth &&  <Header />}
          <Routes/>
          

        
        
  
      </div>
    );

  }
 
}


App.contextType = DataContext;

export default App;
