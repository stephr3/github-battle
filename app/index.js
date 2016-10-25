var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');

var sentryKey = '7e1e04d245cd48aead31351dccac6dc1';
var sentryApp = '109266';
var sentryURL = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp

var _APP_INFO = {
  name: 'Github Battle',
  branch: 'video4',
  version: '1.0'
}

Raven.config(sentryURL, {
  release: _APP_INFO.version,
  tags: {
    branch: _APP_INFO.branch,
  }
}).install()

ReactDOM.render(
  routes,
  document.getElementById('app')
);
