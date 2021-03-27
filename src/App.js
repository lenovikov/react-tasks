
import './App.css';
import Square from './Square/Ex1'
import TextStart from './Square/Ex2'
import Ex3 from './Ex3/Ex3'
import Spinner from './components/Spinner'
import Ex6 from './components/Ex6'
import Ex7 from './components/Ex7'
import ChangeLoginTimeOut from './components/ChangeLoginTimeOut'
import ListUser from './components/ListUser'
import Counter from './components/Counter'
import RandomListUSer from './components/RandomListUSer'

import CounterHook from './components/CounterHook'
import Client from './components/сlient-server'
import LoginForm from './components/LoginForm'
import WorkWithForm from './components/WorkWithForm'
import TodoList from './components/TodoList'
import ModifyState from './components/ModifyState'
import PostRequest from './components/PostRequest/form.js'


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
              <Link to="/">Square</Link>
            </li>
            <li>
              <Link to="/TextStart">TextStart</Link>
            </li>
            <li>
              <Link to="/Ex3">Ex3</Link>
            </li>
            <li>
              <Link to="/Spinner">Spinner</Link>
            </li>
            <li>
              <Link to="/Ex6">Ex6</Link>
            </li>
            <li>
              <Link to="/Ex7">Ex7</Link>
            </li>
            <li>
              <Link to="/ChangeLoginTimeOut">ChangeLoginTimeOut</Link>
            </li>
            <li>
              <Link to="/ListUser">ListUser</Link>
            </li>
            <li>
              <Link to="/Counter">Counter</Link>
            </li>
            <li>
              <Link to="/RandomListUSer">RandomListUSer</Link>
            </li>
            <li>
              <Link to="/CounterHook">CounterHook</Link>
            </li>
            <li>
              <Link to="/Client">Client</Link>
            </li>
            <li>
              <Link to="/LoginForm">LoginForm</Link>
            </li>
            <li>
              <Link to="/WorkWithForm">WorkWithForm</Link>
            </li>
            <li>
              <Link to="/TodoList">TodoList</Link>
            </li>
            <li>
              <Link to="/ModifyState">ModifyState</Link>
            </li>
            <li>
              <Link to="/PostRequest">PostRequest</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/TextStart">
            <TextStart />
          </Route>
          <Route path="/Ex3">
            <Ex3 />
          </Route>
          <Route path="/Spinner">
            <Spinner />
          </Route>
          <Route path="/Ex6">
            <Ex6 />
          </Route>
          <Route path="/Ex7">
            <Ex7 />
          </Route>
          <Route path="/ChangeLoginTimeOut">
            <ChangeLoginTimeOut />
          </Route>
          <Route path="/ListUser">
            <ListUser />
          </Route>
          <Route path="/Counter">
            <Counter />
          </Route>
          <Route path="/RandomListUSer">
            <RandomListUSer />
          </Route>
          <Route path="/CounterHook">
            <CounterHook />
          </Route>
          <Route path="/LoginForm">
            <LoginForm />
          </Route>
          <Route path="/Client">
            <Client />
          </Route>
          <Route path="/WorkWithForm">
            <WorkWithForm />
          </Route>
          <Route path="/TodoList">
            <TodoList />
          </Route>
          <Route path="/PostRequest">
            <PostRequest />
          </Route>
          <Route path="/ModifyState">
            <ModifyState />
          </Route>
          <Route path="/">
            <Square />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



