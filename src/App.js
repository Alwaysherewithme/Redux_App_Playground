import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
import logo from './logo.svg';
import './App.css';
import Postform from './components/Postform';
import Posts from './components/Posts';
import store from './store';

// const store = createStore(() => [], {}, applyMiddleware());

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          {/* <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p> */}
          <div>
            <Postform />
            <hr />
            <Posts />
          </div>
        </div>
      </Provider>
    );
  }
}