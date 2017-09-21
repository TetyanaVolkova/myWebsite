var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Resume = require('Resume');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={Main}>
  		<Route path="weather" component={Weather} />
      	<Route path="about" component={About} />
      	<Route path="examples" component={Examples} />
  	<IndexRoute component={Resume} />
  	</Route>
  </Router>,
  document.getElementById('app')
);
