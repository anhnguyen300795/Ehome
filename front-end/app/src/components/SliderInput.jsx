import React from 'react';
import InputRange from 'react-input-range';

const SliderInput = ({ input: { onChange, value }, minBound, maxBound }) => {
  return (<InputRange 
  			maxValue={maxBound} 
  			minValue={minBound} 
  			value={value} 
  			onChange={onChange}/>)
}

export default SliderInput
