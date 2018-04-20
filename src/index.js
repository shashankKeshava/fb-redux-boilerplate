import React from 'react';
import {render} from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import App from './container/App';
import Reducer from './reducer'
import registerServiceWorker from './registerServiceWorker';
import './index.scss';


const logger = createLogger({ timestamp: true });

let store = createStore(
    Reducer,
    {},
    applyMiddleware(thunk, logger),
    /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
        document.getElementById('root')
);
registerServiceWorker();
