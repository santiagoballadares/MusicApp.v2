import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../../scenes/home/home';
import Artist from '../../scenes/artist/artist';
import Album from '../../scenes/album/album';
import About from '../../scenes/about/about'

class Router extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/artist/:id' component={Artist}/>
          <Route path='/album/:id' component={Album}/>
          <Route path='/about' component={About}/>
        </Switch>
      </main>
    );
  }
};

export default Router;
