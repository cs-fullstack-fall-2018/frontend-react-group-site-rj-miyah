import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import FaceBookMain from "./FaceBookMain";
import YouTube from "./YouTube";

ReactDOM.render(<FaceBookMain/>, document.getElementById('root'));
// ReactDOM.render(<YouTube/>, document.getElementById('root'));
registerServiceWorker();
