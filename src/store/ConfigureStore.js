// import React from 'react';
// import { createStore, combineReducers } from 'redux';
import SessionReducer from '../store/SessionReducer';

// export default () => ( createStore(combineReducers({
//     session: SessionReducer
//     /*prefrence: PrefrenceReducer */
// })));

import React from 'react';
import { createStore, compose, combineReducers } from 'redux';

const enhancer = compose(window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_())

export default initialState => {
    return createStore(
        combineReducers({
            session: SessionReducer 
        }),
        initialState,
        enhancer
    )
}