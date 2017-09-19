var React = require('react');

// var WeatherMessage = React.createClass({
// 	render: function() {
// 		return (
// 			<div>
//         <h3>It's {this.props.temp} in {this.props.location}.</h3>
//       </div>
// 		)
// 	}
// });

var WeatherMessage = ({temp, location}) => {
	return (
		<div>
	        <h3>It's {temp} in {location}</h3>
      	</div>
	)
};

module.exports = WeatherMessage;
