import React from 'react'

const Card = ({ name, birth_year }) => {
  return (
    <div className='bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${name}?size=200x200`} alt='robots'/>
      <div>
        <h2>{name}</h2>
        <p>born: {birth_year}</p>
      </div>
    </div>
  )
}

export default Card
