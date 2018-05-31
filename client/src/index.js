import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Server from './Server';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Server />, document.getElementById('root'));
registerServiceWorker();
