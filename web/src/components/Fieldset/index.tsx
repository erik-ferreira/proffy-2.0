import React from 'react'

import './style.css'

interface PropsFieldset {
  legend: string;
  showButtonNewTime?: boolean;
}

const Fieldset: React.FC<PropsFieldset> = ({ legend, showButtonNewTime, children }) => {
  return (
    <fieldset>
      <legend>
        {legend}
        { showButtonNewTime && (
          <button type="button" onClick={() => {}}> 
            + Novo horário
          </button>
        )}
      </legend>

      {children}
    </fieldset>
  )
}

export default Fieldset