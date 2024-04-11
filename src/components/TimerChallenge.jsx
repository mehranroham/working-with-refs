import { useRef, useState } from 'react';
import ResultModal from './ResultModal';

export default function TimerChallenge({ title, targetTime }) {
  const [timerRemaining, setTimerRemaining] = useState(targetTime * 1000);

  let timer = useRef();
  let dialog = useRef();

  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimerRemaining((prev) => prev - 10);
    }, 10);
  };

  const isTimerActive =
    timerRemaining > 0 && timerRemaining < targetTime * 1000;

  let result;

  if (timerRemaining <= 0) {
    dialog.current.open();
    clearInterval(timer.current);
    result = 'lost';
  } else {
    result = 'won';
  }

  const handleStop = () => {
    dialog.current.open();
    clearInterval(timer.current);
  };

  return (
    <>
      <ResultModal
        ref={dialog}
        setTimerRemaining={setTimerRemaining}
        timerRemaining={timerRemaining}
        targetTime={targetTime}
        result={result}
      />
      <section className='challenge'>
        <h2>{title}</h2>
        <p className='challenge-time'>
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={isTimerActive ? handleStop : handleStart}>
            {isTimerActive ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={isTimerActive ? 'active' : undefined}>
          {isTimerActive ? 'Time is running' : 'Time inactive'}
        </p>
      </section>
    </>
  );
}
