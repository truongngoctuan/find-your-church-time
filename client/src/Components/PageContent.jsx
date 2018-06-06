import React, { Component } from 'react';
import { Button, Accordion, Icon, Transition } from 'semantic-ui-react'
import ProvinceItem from './Contents/ProvinceItem';

import provinces from './Data/provinces'

class PageContent extends Component {
    state = {
        provinces: provinces,
        activeIndex: 0,
    };

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex, provinces } = this.state

        return (
            <Accordion styled fluid>
                {provinces.map((obj, idx) => <ProvinceItem index={idx} title={obj.title} content={obj.content}
                    active={idx == activeIndex} onClick={this.handleClick}>
                </ProvinceItem>)}
            </Accordion>
        );
    }
}

export default PageContent;