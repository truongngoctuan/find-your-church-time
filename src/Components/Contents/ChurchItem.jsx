import "./ChurchItem.css"
import React, { Component } from 'react';
import { Label, Segment } from 'semantic-ui-react';

class ChurchItem extends Component {
    render() {
        const { id, name, weekDays, sunday } = this.props
        return (
            <Segment className="ui grid church-item">
                <p>{name}</p>
                <div className="row">Weekdays: {weekDays.map((obj, idx) => <Label color="teal" key={idx}>{obj}h - {obj + 1}h</Label>)}</div>
                <div className="row">Sunday: {sunday.map((obj, idx) => <Label color="blue" key={idx}>{obj}h - {obj + 1}h</Label>)}</div>
            </Segment>
        );
    }
}

export default ChurchItem;