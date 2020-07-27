import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './containers/LoginPage/Login';
import Dashboard from './containers/DashboardPage/Dashboard';
import './App.css';

const App = function() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default App;
