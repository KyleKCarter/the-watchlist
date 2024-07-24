import React, {Component} from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';
// import { connect } from 'react-redux';


class App extends Component {
  state = {

  }

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          {routes}
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
