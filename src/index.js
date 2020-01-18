import React from 'react';
import ReactDOM from 'react-dom';
import Root from './views/Root';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.register();
