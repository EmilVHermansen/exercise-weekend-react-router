import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/about-react">About React</Link>
          </li>
          <li>
            <Link to="/jsx">JSX</Link>
          </li>
          <li>
            <Link to="/props-and-state">Props & state</Link>
          </li>
          <li>
            <Link to="/lifecycle-hooks">Lifecycle hooks</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={AboutMe} />
        <Route path="/about-react" component={AboutReact} />
        <Route path="/JSX" component={jsx} />
        <Route path="/props-and-state" component={PropsAndState} />
        <Route path="/lifecycle-hooks" component={LifecycleHooks} />
      </div>
    </Router>
  );
}

function AboutMe() {
  return (
    <div>
      <h2>About me</h2>
      <h3>Emil Valbak Hermansen</h3>
      <p></p>
    </div>
  );
}

function AboutReact() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function jsx() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function PropsAndState() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function LifecycleHooks({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

export default BasicExample;