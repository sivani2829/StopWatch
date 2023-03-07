// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    timeInsec: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  minutesValue = () => {
    const {timeInsec} = this.state
    const min = Math.floor(timeInsec / 60)
    if (min < 10) {
      return `0${min}`
    }
    return min
  }

  secondsValue = () => {
    const {timeInsec} = this.state
    const sec = Math.floor(timeInsec % 60)
    if (sec < 10) {
      return `0${sec}`
    }
    return sec
  }

  tick = () => {
    this.setState(prevState => {
      const {timeInsec} = prevState
      return {timeInsec: timeInsec + 1}
    })
  }

  toggleStart = () => {
    this.timerId = setInterval(this.tick, 1000)
  }

  toggleStop = () => {
    clearInterval(this.timerId)
  }

  toggleRestart = () => {
    this.setState({timeInsec: 0})
    clearInterval(this.timerId)
  }

  render() {
    const {timeInsec} = this.state
    const timeText = `${this.minutesValue()}:${this.secondsValue()}`
    return (
      <div className="app-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="time-container">
          <div className="timer-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="img-cls"
            />
            <p className="para-1">Timer</p>
          </div>
          <h1 className="para">{timeText}</h1>
          <div>
            <button
              type="button"
              className="start-btn"
              onClick={this.toggleStart}
            >
              Start
            </button>
            <button
              type="button"
              className="stop-btn"
              onClick={this.toggleStop}
            >
              Stop
            </button>
            <button
              type="button"
              className="Reset-btn"
              onClick={this.toggleRestart}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
