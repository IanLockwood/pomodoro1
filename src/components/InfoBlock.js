import React, { Component } from 'react';
import '../css/InfoBlock.css';

class InfoBlock extends Component {
  render() {
    return (
      <div className="info-block">
        <p>The <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">Pomodoro Technique</a> is a time management technique that promotes strict periods of focused work, interspersed with short, refreshing breaks. It allows practitioners to power through tasks efficiently, while keeping them motivated and without the risk of burnout.</p>
        <p>Traditionally, a pomodoro cycle uses consists of four work sprints of 25 minutes each, with a 5 minute break after each except for the last, which is followed by a 15-20 minute break. But feel free to customize this timer to your liking!</p>
        <p><a href="https://github.com/IanLockwood/pomodoro1">View this project on GitHub.</a></p>
      </div>
    );
  }
}

export default InfoBlock
