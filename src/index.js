import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import {store} from './store/store';
import { Provider } from 'react-redux';
import Admin from './admin/Admin';
import Navbar from './navbar/Navbar';

  
ReactDOM.render(
  <Provider store={store}>
    
    <BrowserRouter>
    <Navbar/>

      <Routes>
        <Route exact path="/" element={<App/>}/>
        <Route exact path="/dashboard" element={<Admin/>}/>

     
      </Routes>
      
    </BrowserRouter>
 
  </Provider>
,
  document.getElementById('root')
);
