import React from 'react'
import "./GenresSort.css"
import { genres } from '../../constants/genres'

export default function GenresSort({onChange}) {
  return (
    <div className="sort">
      <div>Genre: </div>
      <select onChange={(e)=>onChange(e.target.value)}>
        <option value="0">All</option>
        {genres.map((item) => {
          return (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
