import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';

import theme from './theme';
import HeaderBar from './HeaderBar';
import FooterBar from './FooterBar';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <HeaderBar />
        <main style={{ paddingTop: '100px', paddingBottom: '40px', flex: 1 }}>
          <Home />
        </main>
        <FooterBar />
      </MuiThemeProvider>
    );
  }
}

export default App;
