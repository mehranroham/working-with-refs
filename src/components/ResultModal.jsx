import { forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime, setTimerStarted },
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

  const handleClose = () => {
    setTimerStarted(false);
  };

  return (
    <dialog ref={dialog} className='result-modal'>
      <h2>You {result}</h2>
      <p>
        the target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        you stopped the timer with <strong>X seconds left</strong>
      </p>
      <form method='dialog'>
        <button onClick={handleClose}>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
