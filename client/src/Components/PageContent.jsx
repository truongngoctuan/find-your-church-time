import React, { Component } from 'react';
import { Button, Accordion, Icon } from 'semantic-ui-react'

class PageContent extends Component {
    state = {
        response: [],
        activeIndex: 0,
    };

    render() {
        const { activeIndex, visible } = this.state

        return (
            <div>
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

export default PageContent;