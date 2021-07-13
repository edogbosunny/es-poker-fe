/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import CreateRoom from '../components/create-room';
import Vote from '../components/vote';
import JoinRoom from '../components/join-room';
import NotFound from '../components/not-found';



 const routes = () => (
      <BrowserRouter>
        <div>
        
          <Switch>
          </Switch>
          <Switch>
          <Route exact path='/' component={CreateRoom} />
            <Route exact path='/vote' component={Vote} />
            <Route exact path='/join' component={JoinRoom} />
            <Route component={NotFound} />
          </Switch>
        
        </div>
      </BrowserRouter>
);

export default routes