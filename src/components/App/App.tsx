import React from 'react';
import GlobalStyle from 'styles/GlobalStyle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../Home';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
