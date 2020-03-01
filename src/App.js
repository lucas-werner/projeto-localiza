import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CarDetails from './pages/CarDetails';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products/:id" component={CarDetails} />         
          <Route path='*' component={NotFound} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
