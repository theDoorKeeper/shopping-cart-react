/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-filename-extension */
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import React from 'react';
/* import './App.css'; */
import SignUp from './components/SignUp';
import { AuthProvider } from './components/AuthProvider';
import Shop from './components/Shop';

function App() {

  return (
  
     <Router> 
      <AuthProvider>

      <Switch >
        <Route exact path="/signUp" component={SignUp}/>
        <Route exact path="/" component={Shop}/>
      </Switch> 
     </AuthProvider>
  
     </Router> 
 
  );
}

export default App;
