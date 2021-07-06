import React from "react";
import {ThemeProvider} from "styled-components";
import  {useDarkMode} from "./utils/useDarkMode"
import { GlobalStyles } from "./utils/Globalstyle";
import { lightTheme, darkTheme } from "./utils/Themes";
import Toggle from "./components/toggler/Toggler";
import Timer from "./components/timer/Timer";
// import CardList from "./components/CardList";

// CSS imports
import "./App.css";
import "./components/timer/timer.css";
import "./components/toggler/toggler.css";

const App= () => {

  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if(!mountedComponent) return <div/>

  return (
    <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyles/>
      <Toggle theme={theme} toggleTheme={themeToggler} />
        <div className="App">
          {
            <Timer themeMode={themeMode} />
          }
        </div>
      </>
    </ThemeProvider>
    
  );
};

export default App;
