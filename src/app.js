import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import AppContainer from './components/App';
import store from './store';

render((
  <Provider store={store}>
    <AppContainer />
  </Provider>
), document.getElementById('root'));
