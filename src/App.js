import React from "react";
import { BrowserRouter as Router, Route, Link }  from "react-router-dom";

function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">About me</Link>
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
      <a href="https://github.com/EmilVHermansen/exercise-weekend-react-router">Link to my github</a>
    </div>
  );
}

function AboutReact() {
  return (
    <div>
      <h2>About React</h2>
      <p>React is an library used for transferring data to a UI. It consists of class and function based components. </p>
    </div>
  );
}

function jsx() {
  return (
    <div>
      <h2>What is JSX</h2>
      <p>JSX is the syntax used in React where you can mix HTML formatting and javascript, much like JSP for Java </p>
    </div>
  );
}

function PropsAndState() {
  return (
    <div>
      <h2>Props and state</h2>
      <ul>
        <li>Props is immutable variables given throught parameters in a function </li>
        <li>State is a mutable variable set in components, and by default executes the render function, whenever state is updated </li>
      </ul>
    </div>
  );
}

function LifecycleHooks({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/componentDidMount`}>componentDidMount()</Link>
        </li>
        <li>
          <Link to={`${match.url}/render`}>render()</Link>
        </li>
        <li>
          <Link to={`${match.url}/componentWillReceiveProps`}>UNSAFE_componentWillReceiveProps(nextProps)</Link>
        </li>
        <li>
          <Link to={`${match.url}/shouldComponentUpdate`}>shouldComponentUpdate(nextProps, nextState)</Link>
        </li>
        <li>
          <Link to={`${match.url}/componentWillUpdate`}>UNSAFE_componentWillUpdate(nextProps, nextState)</Link>
        </li>
        <li>
          <Link to={`${match.url}/componentWIllUnmount`}>componentWIllUnmount()</Link>
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
  let topicText = "";
  
  switch(match.params.topicId){
    case "componentDidMount":
    {
      topicText ="componentDidMount() is invoked immediately after a component is mounted (inserted into the tree)." +
      "Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, "+
      "this is a good place to instantiate the network request."
      break;
    }
    case "render":
    {
      topicText ="The render() method is the only required method in a class component. "+
      "When called, it should examine this.props and this.state and return a react component or HTML formats"
      break;
    }
    case "componentWillReceiveProps":
    {
      topicText ="UNSAFE_componentWillReceiveProps() is invoked before a mounted component receives new props. If you need to update the state in response to prop changes (for example, to reset it), you may compare this.props and nextProps and perform state transitions using this.setState() in this method."
      break;
    }
    case "shouldComponentUpdate":
    {
      topicText ="Use shouldComponentUpdate() to let React know if a component’s output is not affected by the current change in state or props. The default behavior is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior."
      break;
    }
    case "componentWillUpdate":
    {
      topicText ="UNSAFE_componentWillUpdate() is invoked just before rendering when new props or state are being received. Use this as an opportunity to perform preparation before an update occurs. This method is not called for the initial render."
      break;
    }
    case "componentWIllUnmount":
    {
      topicText ="componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount()."
      break;
    }
    default:
    {
      topicText = "Åh nej default"
      break;
    }
  }

  return (
    <div>
      <h3>{match.params.topicId}</h3>
      <p>{topicText}</p>
    </div>
  );
}


export default BasicExample;