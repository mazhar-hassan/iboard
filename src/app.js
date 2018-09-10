console.log("React is running....");
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import ConfigureStore from './store/ConfigureStore';
import {createSession, updateSession} from './store/SessionActions';
import './styles/styles.scss';
import BoardComponent from './components/BoardComponent';
import TopBar from './components/TopBar';

const store = ConfigureStore();
console.log("----------------------create session ");
store.dispatch(createSession(5, "Mazhar Hassan"));
console.log("---------------------- update session ");
store.dispatch(updateSession(5, {name:"Hassan Mazhar"}))


const template = (
    <Provider store={store}>
        <div>
            <TopBar />
            <BoardComponent />
        </div>
    </Provider>
);

ReactDom.render(template, document.getElementById("app"));