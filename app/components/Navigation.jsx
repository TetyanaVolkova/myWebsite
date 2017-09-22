var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = React.createClass({

	render: function() {
		return(
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text"><img src="http://www.tetyanavolkova.com/resources/img/20160502_171708-1.jpg" />Tetyana Volkova</li>
						<li>
							<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Resume</IndexLink>
						</li>
						<li>
							<IndexLink to="weather" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Weather API</IndexLink>
						</li>
						<li>
							<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
						</li>
						<li>
							<Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	}
});


module.exports = Navigation;

// var old = 		(
// 		<div className="top-bar-right">
// 			<form onSubmit={this.onSearch}>
// 				<ul className="menu">
// 					<li>
// 						<input type="search" ref="search" placeholder="Search Weather" />
// 					</li>
// 					<li>
// 						<input type="submit" className="button" value="Get Weather" />
// 					</li>
// 				</ul>
// 			</form>
// 		</div>
// 	);
// 	onSearch: function(e) {
// 		e.preventDefault();
// 		this.refs.search.value='';
// 		alert('Not yet wired up!');
// 	}
