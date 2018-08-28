import React, { Component } from 'react';
import Timer from './Timer'
import TimerForm from './TimerForm'
import StartButton from './StartButton'
import PauseButton from './PauseButton'
import StopButton from './StopButton'
import InfoBlock from './InfoBlock'
import '../css/App.css';
import '../css/Button.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfSprints: 4,
      sprintLength: 25,
      breakLength: 5,
      restLength: 15,
      timeRemaining: 0,
      sprintsRemaining: 4,
      cycleType: 'idle',
      intervalId: null,
      isRunning: false,
      isPaused: false
    }

    this.customizeNumberOfSprints = this.customizeNumberOfSprints.bind(this);
    this.customizeSprintLength = this.customizeSprintLength.bind(this);
    this.customizeBreakLength = this.customizeBreakLength.bind(this);
    this.customizeRestLength = this.customizeRestLength.bind(this);

    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
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

  customizeNumberOfSprints(customNumberOfSprints) {
    this.setState({
      numberOfSprints: customNumberOfSprints,
      sprintsRemaining: customNumberOfSprints,
    })
  }

  customizeSprintLength(customSprintLength) {
    this.setState({
      sprintLength: customSprintLength
    })
  }

  customizeBreakLength(customBreakLength) {
    this.setState({
      breakLength: customBreakLength,
    })
  }

  customizeRestLength(customRestLength) {
    this.setState({
      restLength: customRestLength
    })
  }

  timerInterval = () => {
    if (this.state.timeRemaining === 0) {
      this.switchCycle();
    } else {
      // count down timer
      this.setState(prevState => (
        {timeRemaining: prevState.timeRemaining - 1}
      ));
    }
  }

  startTimer() {
    const timerJustStarted = this.state.cycleType === "idle"
    if (timerJustStarted) {
      this.switchToWork();
    }
    this.setState({
      intervalId: window.setInterval(this.timerInterval, 1000),
      isRunning: true,
      isPaused: false
    });
  }

  pauseTimer() {
    clearInterval(this.state.intervalId);
    this.setState({
      isRunning: false,
      isPaused: true
    })
  }

  stopTimer() {
    clearInterval(this.state.intervalId);
    this.setState({
      timeRemaining: 0,
      sprintsRemaining: this.state.numberOfSprints,
      cycleType: 'idle',
      intervalId: null,
      isRunning: false,
      isPaused: false
    })
  }

  renderControls() {
    if (this.state.isRunning) {
      return (
        <div className="app__controls">
          <PauseButton pauseTimer={this.pauseTimer} />
          <StopButton stopTimer={this.stopTimer} />
        </div>
      );
    }
    else if (this.state.isPaused) {
      return (
        <div className="app__controls">
          <StartButton startTimer={this.startTimer} />
          <StopButton stopTimer={this.stopTimer} />
        </div>
      );
    }
    else {
      return (
        <div className="app__controls">
          <TimerForm
            customizeNumberOfSprints={this.customizeNumberOfSprints}
            customizeSprintLength={this.customizeSprintLength}
            customizeBreakLength={this.customizeBreakLength}
            customizeRestLength={this.customizeRestLength}
          />
          <StartButton startTimer={this.startTimer} />
        </div>
      );
    }
  }

  render() {
    return (
      <div className={this.state.isPaused ? "app app--paused" : "app app--" + this.state.cycleType}>
        <Timer timeRemaining={this.state.timeRemaining}
          cycleType={this.state.cycleType}
          numberOfSprints={this.state.numberOfSprints}
          sprintsRemaining={this.state.sprintsRemaining}
        />

        {this.renderControls()}
        <InfoBlock />
      </div>
    );
  }
}

export default App;
