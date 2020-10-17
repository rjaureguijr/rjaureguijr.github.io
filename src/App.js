import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import About from './About';
import Projects from './Projects';
import { Contact } from './Contact';
import { NavBar } from './Nav';
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/about" component={About}>
            {/* <About /> */}
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/projects" component={Projects}>
            {/* <Projects /> */}
          </Route>
          <Route path="/contact" component={Contact}>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="container">
      <h1>Rudy Jauregui</h1>
      <code>Website of Front End Developer | UI Engineer rjaureguijr</code>
  </div>
  );
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div className="container">
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected 
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>*/}
    </div>
  );
}

/* function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
} */

