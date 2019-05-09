import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './scss/main.scss';


import Navbar from './components/Navbar';
import Homepage from './components/Homepage';

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App ">
    <Navbar/>
     <Homepage/>


    </div>
    </Router> 
    </Provider>
  );
}

export default App;
