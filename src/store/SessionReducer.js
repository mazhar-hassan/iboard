import React from 'react';

const sessionDefaultState = {
    id: 0,
    name: 'Guest',
    expiry:0
  };

const SessionReducer = ( session = sessionDefaultState, action ) => {
/*    
    console.log("-----------------Session reducer ---------------------------")
    console.log(session);
    console.log(action); */
    switch(action.type) {
        case 'CREATE':
            return {...action.session};
        case 'UPDATE':
            return {...session,...action.updates};
        case 'DELETE':
            return sessionDefaultState;
        default:
            return session;
    }
};

export default SessionReducer;