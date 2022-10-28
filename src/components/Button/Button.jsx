
import React from 'react'

export default function Button(props) {

  function handleClick() {
    if (props.onClick) props.onClick();
  }

  return (
    <button onClick={handleClick} className={props.class}>
      {props.children}
    </button>
  )
}

