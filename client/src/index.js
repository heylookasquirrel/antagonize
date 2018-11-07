import React from 'react';
import ReactDOM from 'react-dom';
import history from './history';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Router, Route, Link, IndexRoute, hashHistory, BrowserRouter, Switch } from 'react-router-dom'
import './styles/style.css';

import { Home } from "./components/home"
import { Read } from "./components/read"
import { AllActivities } from "./components/allActivities"

window.React = React

class App extends React.Component{
  render(){
    return (
      <Router history={history}>
        <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={10}
            transitionEnter={true}
            transitionLeave={true}>
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path='/read' component={Read} />
                <Route exact path='/activity' component={AllActivities} />
                <Route path='*' component={NotFound} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}/>

      </Router>
    )

  }
}

const NotFound = () => <h1>404 not found</h1>

ReactDOM.render(
  <App/>
  ,
  document.getElementById('root'));
