import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import App from './App';
import Configuration from './configuration';

const root = document.getElementById('root');
const load = () => render(
  (
    <AppContainer>
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
              <App />
            </Route>
          </Switch>
        </div>
      </Router>
    </AppContainer>
  ),
  root,
);

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept('./App', load);
}

load();
