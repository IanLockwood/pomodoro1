import React, { Component } from 'react';
import '../css/TimerForm.css';

class TimerForm extends Component {
  render() {
    return (
      <form className="timer-form">
        <div className="timer-form__question">
          <label className="timer-form__label">Number of Sprints </label>
          <input id="number_of_sprints_input"  className="timer-form__input" type="number" step="1" min="1" defaultValue="4"></input>
        </div>
        <div className="timer-form__question">
          <label className="timer-form__label">Minutes per Sprint </label>
          <input id="sprint_length_input" className="timer-form__input" type="number" step="1" min="1" defaultValue="25"></input>
        </div>
        <div className="timer-form__question">
          <label className="timer-form__label">Minutes per Break </label>
          <input id="break_length_input" className="timer-form__input" type="number" step="1" min="1" defaultValue="5"></input>
        </div>
        <div className="timer-form__question">
          <label className="timer-form__label">Minutes per Long Break </label>
          <input id="rest_length_input" className="timer-form__input" type="number" step="1" min="1" defaultValue="15"></input>
        </div>
      </form>
    );
  }
}

export default TimerForm
