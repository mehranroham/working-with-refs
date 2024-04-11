import { useRef, useState } from 'react';

export default function Player() {
  const [entredName, setEnteredName] = useState();

  const playerName = useRef();

  const handleClick = () => {
    setEnteredName(playerName.current.value);
    playerName.current.value = '';
  };

  return (
    <section id='player'>
      <h2>Welcome {entredName ?? 'unknown entity'}</h2>
      <p>
        <input type='text' ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
