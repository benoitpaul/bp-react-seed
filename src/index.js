import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import App from "./components/App.jsx";
import { About, Topics } from "./components/Components.jsx";
import reducers from './reducers/reducers.js';

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(ReduxPromise, ReduxThunk),
    /**
     * Conditionally add the Redux DevTools extension enhancer
     * if it is installed.
     */
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

var destination = document.querySelector("#root");
ReactDOM.render(
    <Provider store={store}>
        <Router>
			<div>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/topics">Topics</Link></li>
				</ul>

				<hr/>
				
				<Route exact path="/" component={App} />
				<Route path="/about" component={About}/>
				<Route path="/topics" component={Topics}/>
			</div>
        </Router>
    </Provider>
    , destination);