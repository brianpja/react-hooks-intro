import React, { useState, useEffect } from 'react';

const UseEffectExample = () => {
  const [count, setCount] = useState(0);

  // Effect Hook lets you perform side effects in function components
  // gets called after render
  useEffect(() => {
    console.log('use Effect is kinda like componentDidMount');

    return () => {
      console.log('returning from use Effect is kinda like componentWillUnmount');
    }
  });

  return (
    <div>
      <p>This is my new Component. Keep clicking the thing! {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click it here
      </button>
    </div>
  )
}

export default UseEffectExample;