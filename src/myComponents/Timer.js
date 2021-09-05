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










// import React, {Component, useState} from "react";
// import './App.css';

// class App extends Component {
//     constructor() {
//       super();
//       this.state = { time: new Date() };
//     }
//     currentTime() {
//       this.setState({ time: new Date() });
//     }
//     componentDidMount() {
//       this.interval = setInterval(() => this.currentTime(), 1000);
//     }
//     componentWillUnmount() {
//       clearInterval(this.interval);
//     }
//     render() {
//       return (
//         <>
//          <h1 className="heading">Digital Clock</h1>
//           <div className="Clock">
//             <h1 id="time">{this.state.time.toLocaleTimeString()}</h1>
//           </div>
//         </>
//       );
//     }
//   }
  
//   export default App;
