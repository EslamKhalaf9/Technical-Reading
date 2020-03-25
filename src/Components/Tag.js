import React from 'react'

export default function Tag({ name }) {
  return (
    <span className="tag">
      # <a href="/">{name}</a>
    </span>
  )
}
