/**
state = [{title: String, ingredients: Array}]
 */

import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import RecipeBook from './components/containers/RecipeBook.jsx';
import simon from './reducers';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  simon,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <RecipeBook />
    </Provider>,
    document.getElementById('root'),
  );
};

render();
