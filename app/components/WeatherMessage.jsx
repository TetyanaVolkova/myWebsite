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

var WeatherMessage = ({temp, location, icon}) => {
	return (
		<div>
	        <h4 className="text-center">It's {temp}<span>&#8457;</span> in {location.toUpperCase()}</h4>
      	</div>
	)
};

module.exports = WeatherMessage;
