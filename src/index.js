import React from 'react';
import ReactDOM from 'react-dom';

import Appwm from './Appwm'
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import productsReducer from './reducers/products-reducer';
import userReducer from './reducers/user-reducer';

const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer
})

const allStoreEnhancers = compose(
    applyMiddleware(thunk),   // must be first!
    // window.devToolsExtension && window.devToolsExtension()
)

const store = createStore(
    allReducers,
    {
        products: [{name: 'iPhone'}],
        user: 'Michael'
    },
    allStoreEnhancers
)

// console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <Appwm appwmProp="extra prop in Appwm component" />
    </Provider>, document.getElementById('root')
)