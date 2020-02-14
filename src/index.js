import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Widget from "./widget";

ReactDOM.render(<Widget />, document.getElementById('root'));
serviceWorker.unregister();
