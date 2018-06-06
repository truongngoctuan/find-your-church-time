import React, { Component } from 'react';
import './App.css';
import { Menu, Button, Accordion, Icon } from 'semantic-ui-react'
import MenuBar from "./Components/MenuBar";

// import { stateOptions } from './common.js'

class App extends Component {
  state = {
    response: [],
    activeIndex: 0
  };
  
  componentDidMount() {
    // this.callApi()
    //   .then(res => {
    //     console.log(res); this.setState({ response: res }
    //     );
    //   }
    //   )
    //   .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <div className="App">
        <MenuBar></MenuBar>
 
        <Accordion styled>
          <Accordion.Title
           active={activeIndex === 0} index={0} onClick={this.handleClick}>
            <Icon name="dropdown"></Icon>
            hello world accordion!!!
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <p>asdf asdf adsf asdf asdf adsf.</p>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
            <Icon name="dropdown"></Icon>
            hello world accordionasd fasdf adf adsf 
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <p>asdf asdf adsf asdf asdf adsf.</p>
          </Accordion.Content>
        </Accordion>

      </div>
    );
  }
}

export default App;
