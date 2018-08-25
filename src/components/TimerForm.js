import React, { Component } from 'react';
import '../css/TimerForm.css';

class TimerForm extends Component {
  constructor(props) {
    super(props);

    this.handleNumberOfSprintsChange = this.handleNumberOfSprintsChange.bind(this);
    this.handleSprintChange = this.handleSprintChange.bind(this);
    this.handleBreakChange = this.handleBreakChange.bind(this);
    this.handleRestChange = this.handleRestChange.bind(this);
  }

  handleNumberOfSprintsChange() {
    const customNumberOfSprints = document.getElementById("number_of_sprints_input").value;
    this.props.customizeNumberOfSprints(Number(customNumberOfSprints));
  }

  handleSprintChange() {
    const customSprintLength = document.getElementById("sprint_length_input").value;
    this.props.customizeSprintLength(Number(customSprintLength));
  }

  handleBreakChange() {
    const customBreakLength = document.getElementById("break_length_input").value;
    this.props.customizeBreakLength(Number(customBreakLength));
  }

  handleRestChange() {
    const customRestLength = document.getElementById("rest_length_input").value;
    this.props.customizeRestLength(Number(customRestLength));
  }

  render() {
    return (
      <form className="timer-form">
        <div className="timer-form__question">
          <label className="timer-form__label">Number of Sprints </label>
          <input
            id="number_of_sprints_input"
            className="timer-form__input"
            type="number"
            step="1"
            min="1"
            defaultValue="4"
            onChange={this.handleNumberOfSprintsChange}
          >
          </input>
        </div>

        <div className="timer-form__question">
          <label className="timer-form__label">Minutes per Sprint </label>
          <input
            id="sprint_length_input"
            className="timer-form__input"
            type="number"
            step="1"
            min="1"
            defaultValue="25"
            onChange={this.handleSprintChange}
          >
          </input>
        </div>

        <div className="timer-form__question">
          <label className="timer-form__label">Minutes per Break </label>
          <input
            id="break_length_input"
            className="timer-form__input"
            type="number"
            step="1"
            min="1"
            defaultValue="5"
            onChange={this.handleBreakChange}
          >
          </input>
        </div>

        <div className="timer-form__question">
          <label className="timer-form__label">Minutes per Long Break </label>
          <input
            id="rest_length_input"
            className="timer-form__input"
            type="number"
            step="1"
            min="1"
            defaultValue="15"
            onChange={this.handleRestChange}
          >
          </input>
        </div>
      </form>
    );
  }
}

export default TimerForm
