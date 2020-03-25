import React from 'react'

export default function Button({ text, btn, type }) {
  return (
    <button className={`btn ${btn}`} type={type}>{text}</button>
  )
}
