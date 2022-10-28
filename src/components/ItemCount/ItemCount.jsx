import React, { useState, useEffect } from "react";
import Button from "../Button/Button";


export default function ItemCount({ stock, initial, text, onAddToCart }) {
  const [count, setCount] = useState(initial);

  function handleSubstract() {
    if (count > 1) setCount(count - 1);
  }

  function handleAdd() {
    if (count < stock) setCount(count + 1);
  }

  function handleClick(){
    setCount(1)
  }

  return (
    <div>
      <Button onClick={handleSubstract}>-</Button>
      <strong>{count}</strong>
      <Button onClick={handleAdd}>+</Button>
      <Button
        onClick={() => {
          onAddToCart(count);
          handleClick();
        }}
        
      >
        {text}
      </Button>
    </div>
  );
}