import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.scss';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';



ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);

