import React, { Component } from 'react';

class PauseButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.pauseTimer();
  }

  render() {
    return (
      <button onClick={this.handleClick} className="button button--pause">Pause</button>
    );
  }
}

export default PauseButton
