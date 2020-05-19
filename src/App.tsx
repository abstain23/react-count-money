import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Tags from 'pages/Tags'
import Money from 'pages/Money'
import Statistics from 'pages/Statistics'
import NoMatch from 'pages/NoMatch'
import TagEdit from 'pages/TagEdit';


export default function App() {
  return (
    <Router>
        <Switch>
          <Route path='/tagEdit/:id'>
            <TagEdit/>
          </Route>
          <Route path="/tags" exact>
            <Tags />
          </Route>
          <Route path="/money">
            <Money />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Redirect from='/' exact to='/money'/>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
    </Router>
  );
}


