import React from 'react';
import { Provider } from 'react-redux'
import store from './store';

import Routes from '../src/routes';

function App() {
  return (
    <Provider store={store}>
      <Routes></Routes>
    </Provider>
  );
}

export default App;