import React from 'react';
import { Reset } from 'styled-reset'
import { ThemeProvider } from "styled-components";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routing';
import { DateContextProvider } from './context/date';
import theme from './theme';
import GlobalStyle from './theme/globalStyle';

function App() {

  return (
    <div className="app">
      <Reset />
      <GlobalStyle />
      <DateContextProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              {routes.map(route => {
                return <Route {...route} />;
              })}
            </Switch>
          </Router>
        </ThemeProvider>
      </DateContextProvider>
    </div>
  );
}

export default App;
