import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import './index.css';
import injectionTapEventPlugin from 'react-tap-event-plugin';
injectionTapEventPlugin();

ReactDOM.render(
    <App />, document.getElementById('root')
);
//registerServiceWorker();
