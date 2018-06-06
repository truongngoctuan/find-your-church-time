import React, { Component } from 'react';
import './App.css';
import { Button, Accordion, Icon, Sidebar, Segment, Menu } from 'semantic-ui-react'
import MenuBar from "./Components/MenuBar";
import SideMenu from "./Components/SideMenu";
import PageContent from './Components/PageContent';

class App extends Component {
  state = {
    response: [],
    activeIndex: 0,
    visible: false,
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

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { activeIndex, visible } = this.state

    return (
      <div className="App">
        <Sidebar.Pushable as={Segment}
        >
          <Sidebar as={Menu}
            animation='overlay'
            width='thin'
            icon='labeled'
            vertical
            inverted
            visible={visible}
          >
            <SideMenu></SideMenu>
          </Sidebar>
          <Sidebar.Pusher
            onClick={visible ? this.toggleVisibility : null}
            dimmed={visible}
          >
            <MenuBar toggleVisibility={this.toggleVisibility}></MenuBar>
            <PageContent activeIndex="activeIndex"></PageContent>
          </Sidebar.Pusher>
        </Sidebar.Pushable>

      </div>
    );
  }
}

export default App;
