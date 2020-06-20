// Code CoordinatesButton Component Here
import React from "react";

export default function CoordinatesButton({ onReceiveCoordinates }) {
  const createArray = (event) => {
    onReceiveCoordinates([event.clientX, event.clientY]);
  };

  return <button onClick={createArray}>hello</button>;
}
