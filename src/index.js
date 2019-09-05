import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from './Context';

import App from './components/app/App';
import General from './components/general/General';
import Withdrawn from './components/withdrawn/Withdrawn';
import Summary from './components/Summary';
import Details from './components/details/Details';

import './index.css';

ReactDOM.render(
    <Provider>
        <BrowserRouter>
            <App>
                <Route exact path='/general' component={General} />
                <Route exact path='/details' component={Details} />
                <Route exact path='/withdrawn' component={Withdrawn} />
                <Route exact path='/summary' component={Summary} />
            </App>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
