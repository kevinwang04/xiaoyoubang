'use strict';

var React = require('react');
var AMR = require('amazeui-react');

var Index = React.createClass({
  render: function() {
    return (
      <div className="ask-banner">
        <AMR.Container>
          <h1>Hello All!</h1>
          <h2>欢迎来到 校友邦！</h2>
        </AMR.Container>
      </div>
    );
  }
});

module.exports = Index;
