import React, { Component } from 'react';
import Timer from './Timer'
import TimerForm from './TimerForm'
import StartButton from './StartButton'
import PauseButton from './PauseButton'
import StopButton from './StopButton'
import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfSprints: 4,
      sprintLength: 1,
      breakLength: 1,
      restLength: 1,
      timeRemaining: 0,
      sprintsRemaining: 4,
      cycleType: ''
    }

    this.startTimer = this.startTimer.bind(this);
  }

  switchToWork() {
    this.setState(prevState => (
      {timeRemaining: prevState.sprintLength * 60,
      cycleType: 'work',
      sprintsRemaining: prevState.sprintsRemaining - 1}
    ));
  }

  switchToBreak() {
    this.setState({
      timeRemaining: this.state.breakLength * 60,
      cycleType: 'break'
    });
  }

  switchToRest() {
    this.setState({
      timeRemaining: this.state.restLength * 60,
      cycleType: 'rest',
      sprintsRemaining: this.state.numberOfSprints
    })
  }
  switchCycle() {
    const sprintDidFinish = this.state.sprintsRemaining === 0;
    const workIsOver = this.state.cycleType === 'work';

    if (sprintDidFinish) {
      this.switchToRest();
    }
    else if (workIsOver) {
      this.switchToBreak();
    }
    else {
      this.switchToWork();
    }
  }

  timerInterval = () => {
    setInterval(
      () => {
        if (this.state.timeRemaining === 0) {
          this.switchCycle();
        } else {
          // count down timer
          this.setState(prevState => (
            {timeRemaining: prevState.timeRemaining - 1}
          ));
        }
      }, 1000);
  }

  startTimer() {
    const timerJustStarted = this.state.numberOfSprints === this.state.sprintsRemaining
    if (timerJustStarted) {
      this.switchToWork();
      console.log(timerJustStarted);
    }
    this.timerInterval();
    console.log(timerJustStarted);
  }

  pauseTimer() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className={"app app--" + this.state.cycleType}>
        <Timer timeRemaining={this.state.timeRemaining} cycleType={this.state.cycleType} numberOfSprints={this.state.numberOfSprints} sprintsRemaining={this.state.sprintsRemaining} />
        <StartButton startTimer={this.startTimer} />
        <PauseButton pauseTimer={this.pauseTimer} />
        <StopButton />
      </div>
    );
  }
}

export default App;
