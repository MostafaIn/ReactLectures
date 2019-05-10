import React from 'react'

const InputField = ({ type, name, value, label, placeholder, onChange, onBlur, error, checked }) => {
  return (
    <div className="inputField">
      {label && <label htmlFor={name}>{label}: </label>}
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        checked={checked}
      />
      <br/>
      {error && <small className='error'>{error}</small>}
    </div>
  )
}

export default InputField
