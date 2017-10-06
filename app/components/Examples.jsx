var React = require('react');

var Examples = React.createClass({

    getInitialState: function () {
      return {
        animate: {},
        speed: 0,
        distance: 0,
        time: 0
      }
    },

    scroll: function(e) {
      const target = e.target;
      const containerLength = target.offsetWidth*target.parentElement.childElementCount - 50;
      if (target.offsetWidth < containerLength) {
        this.setState({
          distance: containerLength - target.parentElement.offsetWidth + 150, speed: '18s'});
      }
    },

    leave: function() {
      this.setState({
        distance: 0,
        speed: '6s'
      });
    },

  render: function() {
    const distance = this.state.distance;
    const speed = this.state.speed;
    const exampleStyle = {marginLeft: -distance, transition: speed, transitionTimingFunction: 'linear'};
    return (
          <div className="row examples-wrapper">
              <section className="card"
              onMouseOver={this.scroll} 
              onMouseLeave={this.leave} 
               >
                <div className="card-content" style={exampleStyle}></div>
                <div className="card-content"></div>
                <div className="card-content"></div>
                <div className="card-content"></div>
                <div className="card-content"></div>
                <div className="card-content"></div>
                <div className="card-content"></div>
                <div className="card-content"></div>
                <div className="card-content"></div>
                <div className="card-content"></div>
              </section>
          </div>
    );
  }

}); 

module.exports = Examples;
