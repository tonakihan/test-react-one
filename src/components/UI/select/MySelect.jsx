import React from "react";

function MySelect({defaultName, options, value, onChange, ...props}) {
  return (
    <select 
      value={value} 
      onChange={event => onChange(event.target.value)} 
      {...props}
    >
      <option disabled value='default'>{defaultName}</option>
      {options.map((option) => 
        <option key={option.value} value={option.value}>{option.name}</option>
      )}
    </select>
  )
}

export default MySelect;