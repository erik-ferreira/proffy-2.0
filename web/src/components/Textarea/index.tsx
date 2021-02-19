import React from 'react'

import './style.css'

function Textarea() {
  return (
    <div className="textarea-block">
      <label htmlFor="bio">
        Biografia
        <span>(Máximo 300 caracteres)</span>
      </label>
      <textarea id="bio" />
    </div>
  )
}

export default Textarea