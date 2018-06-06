import React, { Component } from 'react';
import { Menu, Icon } from "semantic-ui-react";

import logo from '../logo.svg';

class MenuBar extends Component {
    render() {
        return (
            <Menu>
            <Menu.Item>
              <Icon name="bars"></Icon>
            </Menu.Item>
            <Menu.Item>
            <img src={logo} className="App-logo" alt="logo" />
            </Menu.Item>
          </Menu>
        );
    }
}

export default MenuBar;