var React = require('react');

// var About = React.createClass({
// 	render: function() {
// 		return (
// 			<h1 className="text-center page-title">About Component</h1>
// 		)
// 	}
// });

var About = (props) => {
	return (
		<div className="about-wrapper">
			<h1 className="text-center page-title">About Component</h1>
		</div>
	)
}

module.exports = About;
