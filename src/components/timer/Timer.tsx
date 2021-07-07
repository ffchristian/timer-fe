import React, { Component } from 'react';
import styled from 'styled-components';
import TimerService from '../../services/timer.service';
import { ITheme } from '../../utils/Themes';

export default class Timer extends Component<TimerState> {
  public state: any;
  private interval: any;
  private timerService = new TimerService();
  constructor(props: any) {
    super(props);
    this.state = {isActive: false, seconds: 0};
    
  }

  async componentDidMount() {
    console.log('This is your data', await this.timerService.getTimerData());
  }

  async tick() {
    if (this.state.isActive) {
      this.interval = setInterval(() => {
        this.setState({seconds: this.state.seconds + 1});
      }, 1000);
    } else if (!this.state.isActive && this.state.seconds !== 0) {
      clearInterval(this.interval);
      console.log('This is your data', await this.timerService.getTimerData());
    }
  }

  timerMask() {
    return new Date(this.state.seconds  * 1000).toISOString().substr(11, 8);
  }

  toggle() {
    this.setState({isActive: !this.state.isActive}, this.tick);
  }

  reset() {
    this.setState({isActive: false, seconds: 0});
    clearInterval(this.interval);
  }

  render() {
    const Button = styled.button`
      background-color: ${({ theme }) => theme.buttonColor};
      color: ${({ theme }) => theme.body};
      padding: .6rem 1.5rem;
      margin: .4rem;
      border-radius: 3px;
      text-transform: uppercase;
      font-weight: 600;
      font-size: .8rem;
      border-style: none;

    `;
    return (
      <div className="timer-app">
        <div className="time">
          {this.timerMask()}
        </div>
        <div className="row">
          <Button className={`timer-button`} onClick={this.toggle.bind(this)}>
            {this.state.isActive ? 'Pause' : 'Start'}
          </Button>
          <button className="timer-button" onClick={this.reset.bind(this)}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

type TimerState = {
  seconds?: number,
  isActive?: boolean,
  themeMode: ITheme
}
