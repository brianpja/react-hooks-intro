import React, { useState } from 'react';

const HooksExample = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>This is my new Component. Keep clicking the thing! {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click it here
      </button>
    </div>
  )
}

export default HooksExample;