var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require('react-router').browserHistory;
var ReactApp = require('./components/ReactApp');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={ReactApp} />
  </Router>,
  document.getElementById('react-main-mount')
);
