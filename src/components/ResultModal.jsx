import { forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModal = forwardRef(function ResultModal(
  { targetTime, timerRemaining, handleClose },
  ref
) {
  const dialog = useRef();
  // define properties and methods that can acces in this component from other components
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  let result;

  if (timerRemaining <= 0) {
    result = 'lost';
  } else {
    result = 'won';
  }

  return (
    <dialog ref={dialog} className='result-modal'>
      <h2>You {result}</h2>
      {result === 'won' && (
        <p>
          You're score is:{' '}
          <strong>
            {Math.round((1 - timerRemaining / (targetTime * 1000)) * 100)}
          </strong>{' '}
        </p>
      )}
      <p>
        the target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        you stopped the timer with{' '}
        <strong>{(timerRemaining / 1000).toFixed(2)} seconds left</strong>
      </p>
      <form method='dialog'>
        <button onClick={handleClose}>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
