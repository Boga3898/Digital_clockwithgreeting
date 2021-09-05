import React, { Component, useState} from 'react'

class Timer extends Component {
    constructor() {
              super();
              this.state = { time: new Date() };
            }
            currentTime() {
              this.setState({ time: new Date() });
            }
            componentDidMount() {
              this.interval = setInterval(() => this.currentTime(), 1000);
            }
            componentWillUnmount() {
              clearInterval(this.interval);
            }
    render() {
        return (
            <>
            <div className="greeting">         
            <h1 id="time">{this.state.time.toLocaleTimeString()}</h1>
        </div> 
            </>
        )
    }
}

export default Timer;
