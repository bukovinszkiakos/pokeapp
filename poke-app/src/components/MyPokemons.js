import React from 'react'

function MyPokemons() {
  return (
    <div className="player-poke-container">
    <h1 className="player-poke-title">My pokemons</h1>
    <div className="player-poke-list">
        <div className="player-poke-wraper">
            <h2 className="player-poke-name">poke1</h2>
            <img className="player-poke-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png" />
        </div>
        <div className="player-poke-wraper">
            <h2 className="player-poke-name">poke2</h2>
            <img className="player-poke-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png" />
        </div>
        <div className="player-poke-wraper">
            <h2 className="player-poke-name">poke3</h2>
            <img className="player-poke-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png" />
        </div>
    </div>
</div>
  )
}

export default MyPokemons