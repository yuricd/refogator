import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ChatBot from './ChatBot/ChatBot';
import './styles/default.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={ChatBot} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
