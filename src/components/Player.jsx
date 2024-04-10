import { useState } from 'react';

export default function Player() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setSubmitted(false);
    setName(event.target.value);
  };

  const handleClick = () => {
    setSubmitted(true);
  };

  return (
    <section id='player'>
      <h2>Welcome {submitted ? name : 'unknown entity'}</h2>
      <p>
        <input type='text' value={name} onChange={handleChange} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
