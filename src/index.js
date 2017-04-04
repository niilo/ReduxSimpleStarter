import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import reducers from './reducers';
import routes from './routes'
import promise from 'redux-promise'

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={history} >
      {routes}
    </Router>
  </Provider>
  , document.querySelector('.container'));
