import "./ChurchItem.css"
import React, { Component } from 'react';
import { Label, Segment } from 'semantic-ui-react';
import * as moment from "moment";

class ChurchItem extends Component {

    formatTime(timeInString) {
        return moment(timeInString, "HH:mm").format("HH:mm A")
    }

    render() {
        const { name, weekDays, sunday } = this.props
        return (
            <Segment className="ui grid church-item">
                <p>{name}</p>
                <div className="row">Weekdays: {weekDays.map((obj, idx) => <Label color="teal" key={idx}>{this.formatTime(obj)}</Label>)}</div>
                <div className="row">Sunday: {sunday.map((obj, idx) => <Label color="blue" key={idx}>{this.formatTime(obj)}</Label>)}</div>
            </Segment>
        );
    }
}

export default ChurchItem;