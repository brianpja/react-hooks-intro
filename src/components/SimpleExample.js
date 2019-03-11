import React, { useState } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);
  /* useState is called with an initial value of 0.
  count is the value 0 and setCount is the function that changes count.
  setCount can be named anything, but this is the typical convention.
  Developer can also create multiple pieces of state one at a time.
  Hooks always start with 'use'. */
  // example:
  const [fruit, setFruit] = useState('banana');
  const [drinks, setDrinks] = useState({ wellVodka: 'Monarch', premiumVodka: 'Grey Goose' });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)} >
        Click me
      </button>
    </div>
  )
}

export default Example;