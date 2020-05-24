import React from 'react';

const HooksBasedTimer = (props) => {
  const [isTimerRunning, setIsTimerRunning] = React.useState(false);

  React.useEffect(() => {
    setIsTimerRunning(!isTimerRunning);
    return () => {};
  }, [props.shouldUpdate]);

  return (
    <div>
      <h1>Hooks Based Timer: {isTimerRunning ? 'On' : 'Off'} </h1>
      <h1>{props.shouldUpdate ? 'Update' : 'Dont Update'}</h1>
    </div>
  );
};

export default HooksBasedTimer;
