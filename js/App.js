// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import { Provider } from 'react-redux';

import preload from './../data.json';

import store from './store/store';
import AsyncRoute from './components/AsyncRoute';
// import Landing from './components/Landing';
// import Search from './components/Search';
// import Details from './components/Details';
import FourOhFour from './components/PageNotFound';

const App = () => (
  <Provider store={store}>
    <div className='app'>
      <Switch>
        <Route exact path="/" component={props => <AsyncRoute props={props} loadingPromise={import('./components/Landing')} />} />
        <Route
          path="/search"
          component={props => (
            <AsyncRoute loadingPromise={import('./components/Search')} props={Object.assign({ shows: preload.shows }, props)} />
          )}
        />
        <Route
          path="/details/:id"
          component={(props: { match: Match }) => {
            const selectedShow = preload.shows.find((show: Show) => props.match.params.id === show.imdbID);
            return (
              <AsyncRoute
                loadingPromise={import('./components/Details')}
                props={Object.assign({ show: selectedShow, match: {} }, props)}
              />
            );
          }}
        />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </Provider>
);

export default App;
