var React = require('react');

var ErrorModal = React.createClass({

	componentDidMount: function() {
		var modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	},
	render: function() {
	var message = this.props.message;
		return (
			<div id="error-modal" className="reveal small text-center" data-reveal>
				<h1>Error</h1>
				 <p>{message}</p>
				 <button class="close-button" data-close="" aria-label="Close modal" type="button">
				 	<span aria-hidden="true">&times;</span>
				 </button>
			</div>
		);
	}
});

module.exports = ErrorModal;