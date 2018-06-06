import React, { Component } from 'react';
import { Menu, Icon, Button } from "semantic-ui-react";

import logo from '../logo.svg';

class MenuBar extends Component {

    render() {
        return (
            <Menu fluid
                className="inverted borderless">
                <Menu.Item>
                    <Button className="purple" onClick={this.props.toggleVisibility}>
                        <Icon name="bars"></Icon>
                    </Button>
                </Menu.Item>

                <Menu.Item>
                    <img src={logo} className="App-logo" alt="logo" />
                </Menu.Item>

            </Menu>
        );
    }
}

export default MenuBar;