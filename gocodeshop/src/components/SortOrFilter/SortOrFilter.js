import React from 'react'
import { useContext } from 'react';
import { MyContext } from '../../MyContext';

export const SortOrFilter = ({label, optionsArray, onChange}) => {
  const { setIsAdmin } = useContext(MyContext);

  return (
    <div>
    <div className="collection-sort">
        <label>{label}</label>
        <select onChange={onChange}>
          {optionsArray.map((opt) => <option value={opt}>{opt}</option>)}
        </select>
        <button onClick={() => setIsAdmin(prev => !prev)}>click me</button>
      </div>
    </div>
  )
}


// const obj = {a:1, b:2, c:3}



// const {a,b} = obj