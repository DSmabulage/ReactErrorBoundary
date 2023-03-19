import React, { useState } from 'react';
import { Wrapper } from './Styles';

function Counter() {
  const [count, setCount] = useState(0);
  if (count > 2) {
    throw Error('Something went wrong');
  }
  return (
    <div>
      <Wrapper
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increment
      </Wrapper>
    </div>
  );
}

export default Counter;
