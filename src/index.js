
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import persistState from 'redux-localstorage';

import reducer from './reducers';
import { initialState } from './constants';

const enchancer = compose(persistState());
const store = createStore(
    reducer,
    initialState,
    enchancer
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/*" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
  );
};


render();
store.subscribe(render);
