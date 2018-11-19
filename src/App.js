import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/footer';
import Home from './Components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
            <main>        
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
            </main>
          <Footer />        
        </div>        
      </BrowserRouter>
    );
  }
}

export default App;
