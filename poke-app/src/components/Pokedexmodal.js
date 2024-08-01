import React, { useState } from 'react'

function Pokedexmodal({ setIsPokedexModalOpen, playerPokemons }) {

  const [shownIndex, setShownIndex] = useState(0)

  const showNextPokemon = () => {
    let nextIndex = shownIndex + 1
    if (nextIndex > (playerPokemons.length - 1)) {
      nextIndex = 0
    }
    setShownIndex(nextIndex)
  }
  const showPrevPokemon = () => {
    let prevIndex = shownIndex - 1
    if (prevIndex < 0) {
      prevIndex = playerPokemons.length - 1
    }
    setShownIndex(prevIndex)
  }

  const dblFrom = playerPokemons[shownIndex].dmgRel["double_damage_from"]
  const dblTo = playerPokemons[shownIndex].dmgRel["double_damage_to"]
  const halfFrom = playerPokemons[shownIndex].dmgRel["half_damage_from"]
  const halfTo = playerPokemons[shownIndex].dmgRel["half_damage_to"]


  return (
    <div className='pokedex-modal'>
      <div className='pokedex-title'>{playerPokemons[shownIndex].name}</div>
      <img src={playerPokemons[shownIndex].picFront} className={`${playerPokemons[shownIndex].dead ? "dead" : null} pokedex-img`} />
      <button onClick={() => setIsPokedexModalOpen(false)} type='button' className='close-ability-modal'>Close</button>
      <button onClick={showNextPokemon} type='button' className='pokedex-prev'>Prev</button>
      <button onClick={showPrevPokemon} type='button' className='pokedex-next'>Next</button>

      <div className='pokedex-info'>
        <div className='symbol-row'>
          <div className='symbol'>🗡️:</div>
          <div className='symbol-detail'> {playerPokemons[shownIndex].attack}</div>
        </div>
        <div className='symbol-row'>
          <div className='symbol'>⚔️:</div>
          <div className='symbol-detail'> {playerPokemons[shownIndex].special}</div>
        </div>
        <div className='symbol-row'>
          <div className='symbol'>🛡️:</div>
          <div className='symbol-detail'> {playerPokemons[shownIndex].defense}</div>
        </div>
        <div className='symbol-row'>
          <div className='symbol'>❤️:</div>
          <div className='symbol-detail'> {playerPokemons[shownIndex].hp}</div>
        </div>
        <div className='symbol-row'>
          <div className='symbol'>🌀:</div>
          <div className='symbol-detail'> {playerPokemons[shownIndex].type}</div>
        </div>
        <div className='symbol-row'>
          <div className='symbol'>💥➡:</div>
          <div className='symbol-detail-wraper'>
            {dblTo.map(t => (
              <div key={t.name} className='symbol-detail'>{t.name}</div>
            ))}
          </div>
        </div>
        <div className='symbol-row'>
          <div className='symbol'>💥⬅:</div>
          <div className='symbol-detail-wraper'>
            {dblFrom.map(t => (
              <div key={t.name} className='symbol-detail'>{t.name}</div>
            ))}
          </div>
        </div>
        <div className='symbol-row'>
          <div className='symbol'>🔰➡:</div>
          <div className='symbol-detail-wraper'>
            {halfTo.map(t => (
              <div key={t.name} className='symbol-detail'>{t.name}</div>
            ))}
          </div>
        </div>
        <div className='symbol-row'>
          <div className='symbol'>🔰⬅:</div>
          <div className='symbol-detail-wraper'>
            {halfFrom.map(t => (
              <div key={t.name} className='symbol-detail'>{t.name}</div>
            ))}
          </div>
        </div>

      </div>



      <div className='pokedex-symbols'>
        <div className='symbol-row'>
          <div className='symbol'>🗡️</div>
          <div className='symbol-detail'>Attack power</div>
        </div>
        <div className='symbol-row'>
          <div className='symbol'>⚔️</div>
          <div className='symbol-detail'>Special attack power</div>
        </div>
        <div className='symbol-row'>
          <div className='symbol'>🛡️</div>
          <div className='symbol-detail'>Defense</div>
        </div>
        <div className='symbol-row'>
          <div className='symbol'>❤️</div>
          <div className='symbol-detail'>Health points</div>
        </div>
        <div className='symbol-row'>
          <div className='symbol'>🌀</div>
          <div className='symbol-detail'>Type</div>
        </div>
        <div className='symbol-row'>
          <div className='symbol'>💥➡</div>
          <div className='symbol-detail'>Double damage to</div>
        </div>
        <div className='symbol-row'>
          <div className='symbol'>💥⬅</div>
          <div className='symbol-detail'>Double damage from</div>
        </div>
        <div className='symbol-row'>
          <div className='symbol'>🔰➡</div>
          <div className='symbol-detail'>Half damage to</div>
        </div>
        <div className='symbol-row'>
          <div className='symbol'>🔰⬅</div>
          <div className='symbol-detail'>Half damage from</div>
        </div>
      </div>
    </div >
  )
}

export default Pokedexmodal