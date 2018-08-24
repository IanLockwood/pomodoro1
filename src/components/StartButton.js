import React, { Component } from 'react';

class StartButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.startTimer();
  }

  render() {
    return (
      <button onClick={this.handleClick}>Start!</button>
    );
  }
}

export default StartButton
