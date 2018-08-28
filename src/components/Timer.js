import React, { Component } from 'react';
import '../css/Timer.css';

class Timer extends Component {
  time = () => {
    const minutes = Math.floor(this.props.timeRemaining / 60);
    const showMinutes = minutes.toString();
    const seconds = this.props.timeRemaining % 60;
    const showSeconds = seconds < 10 ? '0' + seconds : seconds.toString();
    const displayTime = showMinutes + ":" + showSeconds;
    return displayTime;
  }

  displayCycleType = () => {
    const workCyle = this.props.cycleType === 'work';
    const breakCycle = this.props.cycleType === 'break';
    const restCycle = this.props.cycleType === 'rest';

    if (workCyle) {
      return `You are currently in pomodoro ${this.props.numberOfSprints - this.props.sprintsRemaining} of ${this.props.numberOfSprints}. Keep at it!`
    }
    else if (breakCycle) {
      return `You're on break! You have ${this.props.sprintsRemaining} more ${this.props.sprintsRemaining === 1 ? "pomodoro" : "pomodoros"} to go.`
    }
    else if (restCycle) {
      return `Enjoy your long break - you deserve it! You completed ${this.props.numberOfSprints} ${this.props.numberOfSprints === 1 ? "pomodoro" : "pomodoros"}.`
    }
    else {
      return `Press start to begin! You can customize your pomodoros using the fields below.`
    }
  }

  render() {
    return(
      <div>
      <h1 className="timer__title">Pomodoro Timer!</h1>
      <h3>{this.displayCycleType()}</h3>
      <h3 className="timer__clock">{this.time()}</h3>
      </div>
    );
  }
}

export default Timer
