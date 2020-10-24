import React from 'react';

const Trigger = ({ name, val, text, checked, onChange }) => (
  <label className='common-radio' tabIndex='0'>
    <input
      type='radio'
      name={name}
      value={val}
      required
      checked={checked}
      onChange={onChange}
      tabIndex='0'
    />
    <span>{text}</span>
  </label>
);

export default Trigger;
