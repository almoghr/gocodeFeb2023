import React from 'react'

export const SortOrFilter = ({label, optionsArray, onChange}) => {
  return (
    <div>
    <div className="collection-sort">
        <label>{label}</label>
        <select onChange={onChange}>
          {optionsArray.map((opt) => <option value={opt}>{opt}</option>)}
        </select>
      </div>
    </div>
  )
}
