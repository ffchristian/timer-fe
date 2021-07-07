// Library imports
import React from "react";
import { ThemeProvider } from "styled-components";

// Util imports
import  { useDarkMode } from "./utils/useDarkMode";
import { GlobalStyles } from "./utils/Globalstyle";
import { lightTheme, darkTheme } from "./utils/Themes";

// Component imports
import Toggle from "./components/toggler/Toggler";
import Timer from "./components/timer/Timer";

// CSS imports
import "./App.css";
import "./components/timer/timer.css";
import "./components/toggler/toggler.css";

const App = () => {

  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mountedComponent) return <div/>;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles/>
      <Toggle theme={theme} toggleTheme={themeToggler} />
        <div className="App">
          <Timer themeMode={themeMode} />
        </div>
    </ThemeProvider>
  );
};

export default App;
