import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './app.css'
import Navbar from './components/Navbar';


function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App ">
    <Navbar/>
     {/* <Homepage/> */}


    </div>
    </Router> 
    </Provider>
  );
}

export default App;
