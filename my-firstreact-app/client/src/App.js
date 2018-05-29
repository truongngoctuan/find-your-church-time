import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Dropdown, Button, Header, Image, Modal } from 'semantic-ui-react'

// import { stateOptions } from './common.js'

class App extends Component {
  state = {
    response: []
  };

  componentDidMount() {
    this.callApi()
      .then(res => {console.log(res); this.setState({ response: res }
      );}
    )
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Dropdown placeholder='State' search selection options={this.state.response} />
        
      </div>
    );
  }
}

export default App;
