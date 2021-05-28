/**
 * @since 2019-05-13 05:47
 * @author vivaxy
 */

import React, { useState } from 'react';

export default function UsingHooks() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>&nbsp;
      <button onClick={() => setCount(preCount => preCount + 1)}>Click me</button>
    </div>
  );
}
