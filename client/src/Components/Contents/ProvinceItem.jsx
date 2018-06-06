import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react'

class ProvinceItem extends Component {
    render() {
        const { active, index, title, content, onClick } = this.props

        return (
            <div>
                <Accordion.Title
                    active={active} index={index} onClick={onClick}>
                    <Icon name="dropdown"></Icon>
                    {title}
                </Accordion.Title>
                <Accordion.Content active={active}>
                    <p>{content}</p>
                </Accordion.Content>
            </div>
        );
    }
}

export default ProvinceItem;