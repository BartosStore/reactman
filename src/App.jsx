import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Profile from './Profile';
import Configuration from './configuration';
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navigation">
          <ul>
            {/* eslint-disable */}
              <li>
                <Link to="/">Profile</Link>
              </li>
              <li>
                <Link to="/config">Configuration</Link>
              </li>
              {/* eslint-enable */}
          </ul>
        </nav>
        <Switch>
          <Route path="/config">
            <Configuration />
          </Route>
          <Route path="/">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
