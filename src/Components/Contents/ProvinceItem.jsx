import React, { Component } from 'react';
import { Accordion, Icon, SegmentGroup } from 'semantic-ui-react'
import ChurchItem from './ChurchItem';

class ProvinceItem extends Component {
    render() {
        const { active, index, title, churches, onClick } = this.props

        return (
            <div>
                <Accordion.Title
                    active={active} index={index} onClick={onClick}>
                    <Icon name="dropdown"></Icon>
                    {title}
                </Accordion.Title>
                <Accordion.Content active={active}>
                    <SegmentGroup>
                        {churches.map((obj, idx) => <ChurchItem key={idx} name={obj.name} weekDays={obj.weekDays} sunday={obj.sunday}></ChurchItem>)}
                    </SegmentGroup>
                </Accordion.Content>
            </div>
        );
    }
}

export default ProvinceItem;