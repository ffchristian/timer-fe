import React, { Component } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

type ToggleType = {
  theme: string,
  toggleTheme: () => void
};

export default class Toggle extends Component<ToggleType> {

  render() {
    return (
      <div className="toggle-container">
        <span className="toggle-icon"><FaMoon /></span>
        {
          <label className="toggle">
            <input id="toggleswitch" type="checkbox" checked={this.props.theme === "light"} onClick={this.props.toggleTheme}/>
            <span className="roundbutton"></span>
          </label>
        }
        <span className="toggle-icon"><FaSun /></span>
      </div>
    );
  }

}
