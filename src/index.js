import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from './Context';
import General from './components/general/General';
import Withdrawn from './components/Withdrawn';
import Summary from './components/Summary';


ReactDOM.render(
    <Provider>
        <BrowserRouter>
            <App>
                <Route exact path='/general' component={General} />
                <Route exact path='/withdrawn' component={Withdrawn} />
                <Route exact path='/summary' component={Summary} />
            </App>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
