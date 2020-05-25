import React, {useEffect} from 'react';
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
import {isPC} from 'lib/isPc'
import { message } from 'antd';

export default function App() {
  useEffect(() => {
    if(!isPC()) {
      message.warn({content:'建议使用手机或手机模拟器观看'})
    }
    // window.addEventListener('resize', () => {
    //   // alert('x')
    //   alert(document.body.clientHeight)
    //   document.body.style.height=document.body.clientHeight + 'px'
    // })
  },[])
  return (
    <Router>
        <Switch>
          <Route path='/tags/:id' exact>
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


