import React, { useState } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { Home } from './home/Home';
import { Board } from './board/Board';
import { Notes } from './notes/Notes';
import { ToolboxHeader } from './home/ToolboxHeader';
import { AppTheme } from './app.models';

import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <div className={`app ${theme === 'light' ? 'light-theme' : ''}`}>
      <ToolboxHeader theme={theme as AppTheme} setTheme={setTheme} />

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/boards">
            <Board />
          </Route>

          <Route path="/notes">
            <Notes />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
