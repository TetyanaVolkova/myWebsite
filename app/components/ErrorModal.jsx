var React = require('react');

var ErrorModal = React.createClass({

	componentDidMount: function() {
		var modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	},
	render: function() {
		return (
			<div id="error-modal" className="reveal tiny text-center" data-reveal>
				<h1>Awesome. I Have It.</h1>
				 <p class="lead">Your couch. It is mine.</p>
				 <p>I'm a cool paragraph that lives inside of an even cooler modal. Wins!</p>
				 <button class="close-button" data-close aria-label="Close modal" type="button">
				 	<span aria-hidden="true">&times;</span>
				 </button>
			</div>
		);
	}
});

module.exports = ErrorModal;