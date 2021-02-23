import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './assets/css/animate.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'alertifyjs/build/css/alertify.min.css';
import './assets/css/custom/custom.css';
import "./i18n";
import history from './const/history';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(<Provider store={store}><Router history={history}><App /></Router></Provider>, document.querySelector("#root"));
