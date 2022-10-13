import React, { useState } from "react";


export default function ItemCount({ stock, initial }) {
  const [count, setCount] = useState(initial);

  function handleSubstract() {
    if (count > 1) setCount(count - 1);
  }

  function handleAdd() {
    if (count < stock) setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleSubstract}>-</button>
      <strong>{count}</strong>
      <button onClick={handleAdd}>+</button>

    </div>
  );
}