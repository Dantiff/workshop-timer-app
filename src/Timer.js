import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isTimerRunning: false,
    };
  }

  componentDidMount() {
    this.setState({ isTimerRunning: true });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.shouldUpdate !== prevProps.shouldUpdate) {
      this.setState({ isTimerRunning: !this.state.isTimerRunning });
    }
  }

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <h1>Class Based Timer: {this.state.isTimerRunning ? 'On' : 'Off'} </h1>
        <h1>{this.props.shouldUpdate ? 'Update' : 'Dont Update'}</h1>
      </div>
    );
  }
}

export default Timer;
