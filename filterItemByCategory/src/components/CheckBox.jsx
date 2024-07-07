import React from 'react'

const CheckBox = ({label,name,handleChange}) => {
  return (
    <div>
        {label}:
        <input 
            type='checkbox' 
            id={label}
            name={name}
            value={label}
            onChange={handleChange}
        />
    </div>
  )
}

export default CheckBox