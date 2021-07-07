import React, { Component } from "react";
import styled from "styled-components";
import TimerService from "../../services/timer.service";
import { ITheme } from "../../utils/Themes";
import { FaPlay, FaStop } from "react-icons/fa";

export default class Timer extends Component<TimerState> {
  public state: any;
  private interval: any;
  private timerService = new TimerService();
  constructor(props: any) {
    super(props);
    this.state = {isActive: false, seconds: 0, currentTime: 0};

  }

  async componentDidMount() {
    this.setState({currentTime: await this.timerService.getTimerData()});
  }

  async tick() {
    if (this.state.isActive && !this.interval) {
      this.interval = setInterval(() => {
        this.setState({seconds: this.state.seconds + 1});
      }, 1000);
    } else if (!this.state.isActive) {
      await this.reset();
    }
  }

  timerMask(seconds: number) {
    return new Date( seconds * 1000).toISOString().substr(11, 8);
  }

  async toggle() {
    const isActive = !this.state.isActive;
    this.setState({ isActive }, this.tick);
  }

  async reset() {
    this.setState({isActive: false, seconds: 0});
    clearInterval(this.interval);
    this.interval = undefined;
    const currentTime = await this.timerService.saveTimerData(this.state.seconds);
      if (currentTime) {
        this.setState({ currentTime });
      }
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
          {this.timerMask(this.state.currentTime)}
        </div>
        <div className="row">
          <Button className={`timer-button`} onClick={this.toggle.bind(this)}>
            {
              this.state.isActive ?
              <span className="timer-icon"><FaStop /></span> : <span className="timer-icon"><FaPlay /></span>
            }
            {this.timerMask(this.state.seconds)}
          </Button>
        </div>
      </div>
    );
  }
}

type TimerState = {
  seconds?: number,
  isActive?: boolean,
  themeMode: ITheme
};
