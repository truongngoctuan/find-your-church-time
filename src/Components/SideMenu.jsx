import React, { Component } from 'react';
import { Menu, Icon } from "semantic-ui-react";

import logo from '../logo.svg';

class SideMenu extends Component {

    render() {
        return (
            <div>
                <Menu.Item name='logo'>
                    <img src={logo} className="App-logo" alt="logo" />
                    Find your church
                </Menu.Item>
                <Menu.Item name='contact-us'>
                    <Icon name='bullhorn' />
                    Contact us
                </Menu.Item>
            </div>
        );
    }
}

export default SideMenu;