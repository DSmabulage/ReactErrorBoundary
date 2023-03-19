import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  if (count > 2) {
    throw Error('Something went wrong');
  }
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increment
      </button>
    </div>
  );
}

export default Counter;
