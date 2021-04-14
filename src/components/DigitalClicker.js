// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timesClicked: 0
        }
    }

    clickHandler = () => {
        this.setState(previousState => {
            return {
                timesClicked: this.state.timesClicked + 1
            }
        })
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.clickHandler}>{this.state.timesClicked}</button>
            </div>
        )
    }
}
