import React from 'react';
import {render} from 'react-dom';
import {Router, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from './store/store.js';
import DevTools from './DevTools.js';
import routes from './routes.js';


render (
    <Provider store={store}>
        <div>
            <Router history={hashHistory} routes={routes}/>
            <DevTools/>
        </div>
    </Provider>,
    document.getElementById('root')
);
