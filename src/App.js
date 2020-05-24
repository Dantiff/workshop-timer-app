import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
import HooksBasedTimer from './HooksBasedTimer';

function App() {
  const [shouldUpdate, setShouldUpdate] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setShouldUpdate(!shouldUpdate);
    }, 2000);
  }, [shouldUpdate]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Timer shouldUpdate={shouldUpdate} />
        <HooksBasedTimer shouldUpdate={shouldUpdate} />
      </header>
    </div>
  );
}

export default App;
