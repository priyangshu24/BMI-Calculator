/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from 'react'

const App = () => {

  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(75);

  function onWeightChange(e) {
    setWeight(e.target.value);
  }

  function onHeightChange(e) {
    setHeight(e.target.value);
  }

  const output = useMemo (() => {
    const calculateHeight = height / 100;
    return (weight / (calculateHeight * calculateHeight)).toFixed(2);
  },[height, weight]);

  return (
    <main>
      <h1>BMI CALCULATOR</h1>
      <div className='input-section'>
        <p className='input-label'>Weight : {weight}</p>
        <input 
          className='input-slider'
          type='range'
          step="1"
          min="25"
          max="400"
          onChange={onWeightChange}
          
          />

        <p className='slide-output'>Height : {height}</p>
        <input 
          className='input-slider'
          type='range' 
          onChange={onHeightChange}
          step="1"
          min="100"
          max="400"
          value={height}
          />


      </div>
      <div className='output-section'>
        <p className='output-label'> BMI : {output}</p>
      </div>
    </main>
  )
}

export default App
