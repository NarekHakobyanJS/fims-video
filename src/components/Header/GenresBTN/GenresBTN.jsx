import React from 'react'
import './GenresBTN.css'

const GenresBTN = ({genre}) => {
  return (
    <button className='GenresBTN'>{genre.name}</button>
  )
}

export default GenresBTN