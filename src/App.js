import React from 'react';
import './App.css'; 
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/rooms/' component={Rooms} />
    <Route exact path='/rooms/:beds' component={SingleRoom} />
    <Route component={Error} />
    </Switch>
    </>
  );
}

export default App;


//React-router-dom reactraining.com can be done in index.js to avoid cluttering app.js

//exact infront of path means only the page specified is shown by the route.  This means only the specified page will be rendered.

///rooms/:beds this is a url parameter setup and it allows navigating and rendering of individual rooms. 

//The switch renders the first child that matches