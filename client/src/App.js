import React from 'react';
import './App.css';

import SignUp from './containers/SignUp/SignUp'
import SignIn from './containers/SignIn/SignIn'

import { BrowserRouter, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' exact><SignUp/></Route>
        <Route path='/sign-in' exact><SignIn/></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
