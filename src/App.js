import React from 'react';
//import <Header />;
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/header.component';

function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route exact path='/' component={Homepage}/>
        </Switch>
    </div>
  );
}

export default App;
