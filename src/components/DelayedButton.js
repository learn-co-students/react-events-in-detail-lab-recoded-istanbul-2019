// Code DelayedButton Component Here
import React from "react";

export default function DelayedButton({ onDelayedClick, delay }) {
  const handleClick = (event) => {
    event.persist();
    setTimeout(() => {
      onDelayedClick(event);
    }, delay);
  };

  return <button onClick={handleClick}>hello</button>;
}
