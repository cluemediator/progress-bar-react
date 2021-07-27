import React, { useEffect, useState } from 'react';

let progressInterval = null;

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    progressInterval = setInterval(() => {
      setProgress(prev => prev + 1);
    }, 100);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      clearInterval(progressInterval);
    }
  }, [progress]);

  return (
    <div className="m-5">
      <h5 className="mb-3">Progress Bar in React - <a href="https://cluemediator.com" target="_blank">Clue Mediator</a></h5>
      <div className="progress w-50" style={{ height: 30 }}>
        <div className="progress-bar" role="progressbar" style={{ width: `${progress}%` }}>{progress}%</div>
      </div>
    </div>
  );
}

export default App;
