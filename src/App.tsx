import React from 'react';
import styled from 'styled-components/macro';
import GlobalStyle from 'styles/GlobalStyle';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from 'routes/Home';
import Games from 'routes/Games';

const Application = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
`;

const App: React.FC = () => {
  return (
    <Application>
      <GlobalStyle />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/games" component={Games} />
        </Switch>
      </Router>
    </Application>
  );
};

export default App;
