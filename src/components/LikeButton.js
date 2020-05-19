import React, { useState } from 'react';


export default function LikeButton() {
  const [like, setLike] = useState(false)
  
  const status = like === true ? 'You liked this. Please click to unlike' : 'Like This';
  console.log(status);

  return <>
  <h1>Like Button</h1>
  <button onClick={() => setLike(status)}>Like This</button>
   </>
}