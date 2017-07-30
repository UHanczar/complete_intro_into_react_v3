// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';

import preload from './../data.json';

import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import FourOhFour from './PageNotFound';

const App = () => (
  <BrowserRouter>
    <div className='app'>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/search' component={props => <Search shows={preload.shows} {...props}/>} />
        <Route path='/details/:id' component={(props: { match: Match }) => {
          const selectedShow = preload.shows.find(show => props.match.params.id === show.imdbID);
          return <Details show={selectedShow} {...props} />;
        }} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
