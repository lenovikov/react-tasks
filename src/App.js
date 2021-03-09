
import './App.css';
import Ex1 from './hw1902/Ex1'
import Ex2 from './hw1902/Ex2'
import Ex3 from './practical1902/Ex3'
import Ex5 from './components/Ex5'
import Ex6 from './components/Ex6'
import Ex7 from './components/Ex7'
import HW12602 from './components/HW12602'
import HW22602 from './components/HW22602'
import HW32602 from './components/HW32602'
import HW42602 from './components/HW42602'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">HW12602</Link>
            </li>
            <li>
              <Link to="/HW22602">HW22602</Link>
            </li>
            <li>
              <Link to="/HW32602">HW32602</Link>
            </li>
            <li>
              <Link to="/HW42602">HW42602</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/HW32602">
            <HW32602 />
          </Route>
          <Route path="/HW22602">
            <HW22602 />
          </Route>
          <Route path="/HW42602">
            <HW42602 />
          </Route>
          <Route path="/">
            <HW12602 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



