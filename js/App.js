// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import { Provider } from 'react-redux';

import preload from './../data.json';

import store from './store/store';
import Landing from './components/Landing';
import Search from './components/Search';
import Details from './components/Details';
import FourOhFour from './components/PageNotFound';

const App = () => (
  <Provider store={store}>
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
  </Provider>
);

export default App;
