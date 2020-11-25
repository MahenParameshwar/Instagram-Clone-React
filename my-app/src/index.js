<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {DataContextProvider} from "./Components/Context/DataContextProvider"

=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {DataContextProvider} from "./Components/Context/DataContextProvider"
import {BrowserRouter} from "react-router-dom"
>>>>>>> 05154421ca7c50e7ec11c5c4c2b6f3d07127df44


ReactDOM.render(
<<<<<<< HEAD
=======

>>>>>>> 05154421ca7c50e7ec11c5c4c2b6f3d07127df44
  <DataContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ DataContextProvider>,
<<<<<<< HEAD
=======

>>>>>>> 05154421ca7c50e7ec11c5c4c2b6f3d07127df44
  document.getElementById('root')
);


