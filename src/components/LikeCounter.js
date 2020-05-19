import React, { useState } from 'react';


export default function LikeCounter() {
  const initial_state = 0;
  const[numState, set_state] = useState(initial_state);

  function count() {
    return set_state(numState + 1);
  }
  
  function reset() {
    return set_state(initial_state);
  }

  return(
    <div>
      <p>This has <b>{numState} likes</b></p>
      <button onClick={count}>Like</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}