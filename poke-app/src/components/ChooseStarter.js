import React from 'react'
import { useState, useEffect } from "react"

function ChooseStarter({ playerPokemons, setPlayerPokemons }) {

    const [starterPokemons, setStarterPokemons] = useState([])

    const starterUrls = [
        `https://pokeapi.co/api/v2/pokemon/charmander`,
        `https://pokeapi.co/api/v2/pokemon/bulbasaur`,
        `https://pokeapi.co/api/v2/pokemon/squirtle`,
        `https://pokeapi.co/api/v2/pokemon/pikachu`,
        `https://pokeapi.co/api/v2/pokemon/pidgey`,
        `https://pokeapi.co/api/v2/pokemon/magikarp`
    ]

    useEffect(() => {
        const fetchStarters = async (url) => {
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error("Fetching starters run into error")
                }
                const starterPokemon = await response.json()
                return starterPokemon

            } catch (error) {
                console.error(error)
            }
        }

        const getStarters = async () => {
            const starters = await Promise.all(
                starterUrls.map(u => fetchStarters(u))
            )
            const starterPokemonsData = []
            starters.map(p => {
                const pokeData = {
                    name: p.species.name,
                    picFront: p.sprites.front_default,
                    picBack: p.sprites.back_default,
                    hp: p.stats[0].base_stat,
                    attack: p.stats[1].base_stat,
                    defense: p.stats[2].base_stat,
                    special: p.stats[3].base_stat,
                    choosen: false
                }
                starterPokemonsData.push(pokeData)
            })
            return setStarterPokemons(starterPokemonsData)
        }

        getStarters()

    }, [])

    const handleChooseClick = (e) => {
        if ((starterPokemons.filter(p => p.choosen).length === 3) && (!e.target.classList.contains("choosen"))) {
            return
        }
        const clickedPoke = e.target.id
        let updatedStarters = [...starterPokemons]
        updatedStarters.find(p => p.name === clickedPoke).choosen = !updatedStarters.find(p => p.name === clickedPoke).choosen
        let playerPokes = [...updatedStarters]
        playerPokes = playerPokes.filter(p => p.choosen)
        setPlayerPokemons(playerPokes)
        setStarterPokemons(updatedStarters)
    }


    return (
        <div className='all-choosable-container'>
            {starterPokemons.map(p => (
                <div key={p.name} className='choosable-box'>
                    <img id={p.name} onClick={handleChooseClick} className={`${p.choosen ? "choosen" : null} profile-pic`} src={p.picFront} />
                    <h3 className="pokemon-name">{p.name}</h3>
                </div>
            ))}
        </div>
    )
}

export default ChooseStarter