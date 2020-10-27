import React from 'react';

const Trigger = ({ name, val, text, checked, onChange }) => (
  <label className='options__radio'>
    <input
      type='radio'
      name={name}
      value={val}
      required
      checked={checked}
      onChange={onChange}
      className='options__radio-input'
    />
    <span className='options__radio-value'>{text}</span>
  </label>
);

export default Trigger;
