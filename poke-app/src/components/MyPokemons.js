function MyPokemons({ playerPokemons, setPlayerPokemons, isBattle, isPlayerChoosen, setIsPlayerChoosen, setChoosenPokemon, setNar, activePanel, setActivePanel }) {

    const handleMyPokemonClick = (e) => {
        if (isBattle && !isPlayerChoosen) {
            let updatedPlayerPokemons = [...playerPokemons]
            updatedPlayerPokemons = updatedPlayerPokemons.map(p => {
                p.choosen = false
                return p
            })
            const choosenName = e.target.getAttribute("pokename")
            console.log(updatedPlayerPokemons)
            updatedPlayerPokemons.find(p => p.name === choosenName).choosen = true
            const choosenPoke = playerPokemons.find(p => p.name === choosenName)

            if (choosenPoke.dead) return
            
            setActivePanel("battle")
            setNar(`${choosenName}, has been chosen. Attack the enemy!`)
            setPlayerPokemons(updatedPlayerPokemons)
            setChoosenPokemon(choosenPoke)
            setIsPlayerChoosen(true)
        }
    }

    return (
        <div className={`${activePanel === "mypokemons" ? "active" : null} player-poke-container`}>
            <h1 className="player-poke-title">My pokemons</h1>
            <div className="player-poke-list">
                {playerPokemons.map((pokemon) => (
                    <div key={pokemon.name} className="player-poke-wraper">
                        <h2 className="player-poke-name">{pokemon.name}</h2>
                        <img pokename={pokemon.name} onClick={(e) => handleMyPokemonClick(e)} className={`${pokemon.dead ? "dead" : null} player-poke-img`} src={pokemon.picFront} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyPokemons