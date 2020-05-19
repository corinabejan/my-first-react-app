import React, { useState } from 'react';


export default function AwesomeAnimals() {
  return <>
  <h1>Animals</h1>
    <div>
      {["Chicken", "Sloth", "Porcupine", "Killer whale", "Velociraptor"].map(
        (animal, levelNumber) => {
          return (
            <li key={levelNumber}>
              Awsomenes level {levelNumber + 1}: {animal}{" "}
            </li>
          );
        }
      )}
    </div>
  </>;
}