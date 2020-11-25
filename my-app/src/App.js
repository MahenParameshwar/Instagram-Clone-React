<<<<<<< HEAD
import { Route } from 'react-router-dom';
import './App.css';
import { Header } from './Components/Layout';
import { Routes } from './Components/Routes';

function App() {
  return (
    <div className="App">
      <Routes/>
    </div>
  );
=======
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
 
>>>>>>> 05154421ca7c50e7ec11c5c4c2b6f3d07127df44
}


App.contextType = DataContext;

export default App;
