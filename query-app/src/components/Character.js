import React from 'react'

export  function Character({character}) {
  return (
    <div className="card">
        <img src={character.image} />
        <div className="text-container">
            <h3>
                {character.name}
            </h3>
            <p>
                {character.status} - {character.species}
            </p>
            <p className="title">
                Last Seen on 
            </p>
            <p>
                {character.location.name}
            </p>

        </div>
    </div>
  )
}
