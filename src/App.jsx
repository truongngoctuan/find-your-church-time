import React, { Component } from 'react';
import './App.css';
import { Sidebar, Menu } from 'semantic-ui-react'
import MenuBar from "./Components/MenuBar";
import SideMenu from "./Components/SideMenu";
import PageContent from './Components/PageContent';
import Swipeable from "react-swipeable";

class App extends Component {
  state = {
    response: [],
    activeIndex: 2,

    //side-menu-visible
    visible: false,
    cancelNextToggleVisibility: false
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

  toggleVisibility = (cancelNextToggleVisibility) => this.setState({ visible: !this.state.visible, cancelNextToggleVisibility: cancelNextToggleVisibility })

  handleSwipeRight = () => this.toggleVisibility(true)

  /**
   * whenever swipeable trying to do its thing, an click event also be triggered, seem to be a bug of react-swipeable
   *
   * @memberof App
   */
  handleClickToggleVisibility = () => {
    if (this.state.visible && !this.state.cancelNextToggleVisibility) {
      this.toggleVisibility(false)
    }
    else {
      this.setState({ cancelNextToggleVisibility: false })
    }

  }

  render() {
    const { activeIndex, visible } = this.state

    return (
      <Swipeable className="App"
        trackMouse
        preventDefaultTouchmoveEvent
        stopPropagation
        onSwipedRight={this.handleSwipeRight}
      >

        <Sidebar.Pushable
        >
          <Sidebar as={Menu}
            animation='overlay'
            width='wide'
            icon='labeled'
            vertical
            inverted
            visible={visible}
          >
            <SideMenu></SideMenu>
          </Sidebar>
          <Sidebar.Pusher
            onClick={this.handleClickToggleVisibility}
            dimmed={visible}
          >
            <MenuBar toggleVisibility={() => this.toggleVisibility(false)}></MenuBar>
            <PageContent activeIndex={activeIndex}></PageContent>

          </Sidebar.Pusher>

        </Sidebar.Pushable>


      </Swipeable>
    );
  }
}

export default App;
