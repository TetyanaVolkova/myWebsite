var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
	return(
			<div>
				<p>This is the navigation</p>
				<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
				<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
				<Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
			</div>
	);
};


module.exports = Navigation;
