import React from 'react';
import './App.css';

import SignUp from './containers/SignUp/SignUp'

import { BrowserRouter, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/'><SignUp/></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
