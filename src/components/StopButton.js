import React, { Component } from 'react';

class StopButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.stopTimer();
  }

  render() {
    return (
      <button onClick={this.handleClick}>Stop</button>
    );
  }
}

export default StopButton
