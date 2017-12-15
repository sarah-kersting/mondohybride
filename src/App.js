import React, { Component, Fragment } from 'react';
import Route from 'react-router-dom/Route';
import Router from 'react-router-dom/BrowserRouter';

import RouteLoader from './RouteLoader';
import NavBar from './NavBar';
import FooterBar from './FooterBar';

const HundKatzenSchweinereiModule = props => (
  <RouteLoader load={() => import('./pages/HundKatzenSchweinerei')}>
    {Component => <Component {...props} />}
  </RouteLoader>
);

const HomeModule = props => (
  <RouteLoader load={() => import('./pages/Home')}>
    {Component => <Component {...props} />}
  </RouteLoader>
);

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <NavBar />
          <main style={{ paddingTop: '60px', paddingBottom: '40px', flex: 1 }}>
            <Route exact path="/" component={HomeModule} />
            <Route exact path="/hundkatzenschweinerei" component={HundKatzenSchweinereiModule} />
          </main>
          <FooterBar />
        </Fragment>
      </Router>
    );
  }
}

export default App;
