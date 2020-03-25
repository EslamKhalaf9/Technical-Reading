import React from 'react'

export default function Input({ type, placeholder, icon, value, setValue }) {
  return (
    <div className="input-text">
      {icon}
      <input type={type} placeholder={placeholder} value={value} onChange={setValue} />
    </div>
  )
}
