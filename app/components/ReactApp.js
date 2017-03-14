var React = require('react');
var Jumbotron = require('react-bootstrap').Jumbotron;

var ReactApp = React.createClass({
  render: function () {
    return (
      <Jumbotron>
        <h1>Hello World</h1>
        <p>This is a sample app.</p>
      </Jumbotron>
    )
  }
});

module.exports = ReactApp;
