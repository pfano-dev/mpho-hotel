import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {withAuthenticator} from '@aws-amplify/ui-react';

import React from "react";
import "./App.css";
import Booknow from "./pages/Booknow";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

Amplify.configure(awsconfig)


import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
        <Route exact path="/booknow/:slug" component={Booknow} />
      </Switch>
    </>
  );
}

export default withAuthenticator(App);
