var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({

	componentDidMount: function() {
		var message = this.props.message;
		var modalMarkup = (
			<div id="error-modal" className="reveal small text-center" data-reveal>
				<h1>Error</h1>
				 <p>{message}</p>
				 <button className="close-button button hollow" data-close="" aria-label="Close modal" type="button">Close</button>
			</div>
		);

		var $modal = $(ReactDOMServer.renderToString(modalMarkup));
		$(ReactDOM.findDOMNode(this)).html($modal);


		var modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	},
	render: function() {
		return (
		 	<div></div>
		);
	}
});

module.exports = ErrorModal;