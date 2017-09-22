var React = require('react');
var Navigation = require('Navigation');

// var Main = React.createClass({
// 	render: function() {
// 		return(
// 			<div>
// 				<Navigation />
// 				<h2>Main Component</h2>
// 				{this.props.children}
// 			</div>
// 		);
// 	}
// });

var Main = (props) => {
	return (
		<div>
			<Navigation />
			<div className="row main-content">
				<div className="columns large-8 small-10 small-centered">
					{props.children}
				</div>
			</div>
		</div>
	);
}

module.exports = Main;
