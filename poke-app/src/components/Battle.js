import React, { useEffect, useState } from 'react'
import Locations from './Locations'

function Battle({ isGameWon, setIsGameWon, locations, setLocations, setIsMenu, isBattle, setIsBattle, isPlayerChoosen, setIsPlayerChoosen, nar, setNar, choosenPokemon, setChoosenPokemon, activePanel, setActivePanel, playerPokemons, setPlayerPokemons }) {
    const [enemy, setEnemy] = useState()
    const [enemyDmg, setEnemyDmg] = useState(0)
    const [enemyCurHp, setEnemyCurHp] = useState(0)
    const [playerDmg, setPlayerDmg] = useState(0)
    const [playerCurHp, setPlayerCurHp] = useState(0)
    const [isAttackDisabled, setIsAttackDisabled] = useState(false)
    const [isPlayerTurn, setIsPlayerTurn] = useState(true)
    const [isGameOver, setIsGameOver] = useState(false)
    //  const [defendModif, setDefendModif] = useState(0)


    useEffect(() => {
        if (choosenPokemon) {
            setPlayerCurHp(choosenPokemon.hp)
        }
    }, [isPlayerChoosen])

    useEffect(() => {
        if (isBattle) {
            const enemyAppear = async () => {
                const fetchRandomPokemon = async (number) => {
                    try {
                        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
                        const data = await response.json();
                        const pokeData = {
                            name: data.species.name,
                            picFront: data.sprites.front_default,
                            picBack: data.sprites.back_default,
                            hp: data.stats[0].base_stat,
                            attack: data.stats[1].base_stat,
                            defense: data.stats[2].base_stat,
                            special: data.stats[3].base_stat,
                        }
                        setEnemy(pokeData);
                        setEnemyCurHp(pokeData.hp)
                        setNar(`A wild ${pokeData.name} appeared!
                            Choose your pokemon!`)
                    } catch (error) {
                        console.error('Error fetching Pokémon:', error);
                    };
                }

                const randomNumber = Math.ceil(Math.random() * 1025)
                await fetchRandomPokemon(randomNumber)
                /*
                const timeoutId = setTimeout(() => {
                    setNar("Choose your fighter!")
                }, 3000)
*/
            }
            enemyAppear()
        }
    }, [isBattle])


    useEffect(() => {
        if (enemy && !isPlayerTurn) {
            const updatedCurHp = enemyCurHp - enemyDmg

            if (updatedCurHp <= 0) {
                if (locations.filter(l => l.visited).length === locations.length) {
                    setIsGameWon(true)
                }
            }

            let greenPercent = (updatedCurHp / enemy.hp) * 100
            if (greenPercent < 0) greenPercent = 0
            const redPercent = 100 - greenPercent
            document.querySelector(".enemy-hp-left").style.width = `${greenPercent}%`
            document.querySelector(".enemy-hp-damage").style.width = `${redPercent}%`

            const { hp, attack, special } = enemy

            let defense = choosenPokemon.defense
            // if (defendModif) defense += defendModif


            const Z = 217 + Math.floor(Math.random() * 38)
            let dmg = 0
            let nar = ""
            const hitChance = Math.ceil(Math.random() * 100)
            if (hitChance > 80) {
                dmg = ((((2 / 5 + 2) * attack * 60 / defense) / 50) + 2) * Z / 255
                dmg = dmg * 2
                dmg = Math.round(dmg)
                nar = `Critical hit! ${dmg} dmg`
            } else if (hitChance < 20) {
                dmg = 0
                nar = "Miss!"
            } else {
                dmg = ((((2 / 5 + 2) * attack * 60 / defense) / 50) + 2) * Z / 255
                dmg = Math.round(dmg)
                nar = `Normal hit ${dmg} dmg`
            }


            setEnemyCurHp(updatedCurHp)

            if (updatedCurHp <= 0) {
                nar = `${enemy.name} has been defeated`
            }


            setTimeout(() => {
                if (updatedCurHp > 0) {
                    setPlayerDmg(dmg)
                }
                setNar(nar)
                setIsAttackDisabled(false)
                setIsPlayerTurn(true)
            }, 1500)
        }
    }, [isPlayerTurn])

    useEffect(() => {
        if (isPlayerChoosen) {
            console.log(playerDmg, playerCurHp)
            const updatedCurHp = playerCurHp - playerDmg
            let greenPercent = (updatedCurHp / choosenPokemon.hp) * 100
            if (greenPercent < 0) greenPercent = 0
            const redPercent = 100 - greenPercent
            document.querySelector(".hp-left").style.width = `${greenPercent}%`
            document.querySelector(".hp-damage").style.width = `${redPercent}%`

            setPlayerCurHp(updatedCurHp)
        }

    }, [playerDmg])


    const handleAttack = (e) => {
        const { hp, attack, defense, special } = choosenPokemon
        const Z = 217 + Math.floor(Math.random() * 38)
        let dmg = 0
        let nar = ""
        const hitChance = Math.ceil(Math.random() * 100)
        if (hitChance > 80) {
            dmg = ((((2 / 5 + 2) * attack * 60 / enemy.defense) / 50) + 2) * Z / 255
            dmg = dmg * 2
            dmg = Math.round(dmg)
            nar = `Critical hit! ${dmg} dmg`
        } else if (hitChance < 20) {
            dmg = 0
            nar = "Miss!"
        } else {
            dmg = ((((2 / 5 + 2) * attack * 60 / enemy.defense) / 50) + 2) * Z / 255
            dmg = Math.round(dmg)
            nar = `Normal hit ${dmg} dmg`
        }

        setIsAttackDisabled(true)
        setIsPlayerTurn(false)
        setNar(nar)
        setEnemyDmg(dmg)
    }

    const handleHeavyAttack = () => {
        const { hp, attack, defense, special } = choosenPokemon
        const Z = 217 + Math.floor(Math.random() * 38)
        let dmg = 0
        let nar = ""
        const hitChance = Math.ceil(Math.random() * 100)
        if (hitChance > 60) {
            dmg = ((((2 / 5 + 2) * attack * 60 / enemy.defense) / 50) + 2) * Z / 255
            dmg = dmg * 2
            dmg = Math.round(dmg)
            nar = `Critical hit! ${dmg} dmg`
        } else if (hitChance < 40) {
            dmg = 0
            nar = "Miss!"
        } else {
            dmg = ((((2 / 5 + 2) * attack * 60 / enemy.defense) / 50) + 2) * Z / 255
            dmg = Math.round(dmg)
            nar = `Heavy hit ${dmg} dmg`
        }
        setIsAttackDisabled(true)
        setIsPlayerTurn(false)
        setNar(nar)
        setEnemyDmg(dmg)
    }

    const handlePrecisionAttack = () => {
        const { hp, attack, defense, special } = choosenPokemon
        const Z = 217 + Math.floor(Math.random() * 38)
        let dmg = 0
        let nar = ""
        const hitChance = Math.ceil(Math.random() * 100)
        if (hitChance > 95) {
            dmg = ((((2 / 5 + 2) * attack * 60 / enemy.defense) / 50) + 2) * Z / 255
            dmg = dmg * 2
            dmg = Math.round(dmg)
            nar = `Critical hit! ${dmg} dmg`
        } else if (hitChance < 5) {
            dmg = 0
            nar = "Miss!"
        } else {
            dmg = ((((2 / 5 + 2) * attack * 60 / enemy.defense) / 50) + 2) * Z / 255
            dmg = Math.round(dmg)
            nar = `Precision hit ${dmg} dmg`
        }

        setIsAttackDisabled(true)
        setIsPlayerTurn(false)
        setNar(nar)
        setEnemyDmg(dmg)
    }

    const handleSpecialAttack = () => {
        const { hp, attack, defense, special } = choosenPokemon
        const Z = 217 + Math.floor(Math.random() * 38)
        let dmg = 0
        let nar = ""
        const hitChance = Math.ceil(Math.random() * 100)
        if (hitChance > 80) {
            dmg = ((((2 / 5 + 2) * special * 60 / enemy.defense) / 50) + 2) * Z / 255
            dmg = dmg * 2
            dmg = Math.round(dmg)
            nar = `Critical hit! ${dmg} dmg`
        } else if (hitChance < 5) {
            dmg = 0
            nar = "Miss!"
        } else {
            dmg = ((((2 / 5 + 2) * special * 60 / enemy.defense) / 50) + 2) * Z / 255
            dmg = Math.round(dmg)
            nar = `Special hit ${dmg} dmg`
        }

        setIsAttackDisabled(true)
        setIsPlayerTurn(false)
        setNar(nar)
        setEnemyDmg(dmg)
    }


    const handleDefend = () => {
    /*
            const defense = choosenPokemon.defense
            let defMod = defense
            let dmg = 0
    
            setDefendModif(defMod)
            setIsAttackDisabled(true)
            setIsPlayerTurn(false)
            setNar(nar)
            setEnemyDmg(dmg)
    */
    }

    const handleRest = () => {

    }




    useEffect(() => {
        if (isPlayerChoosen) {
            if (playerCurHp <= 0) {
                let updatedPlayerPokemons = [...playerPokemons]
                const chosenName = choosenPokemon.name
                updatedPlayerPokemons.find(p => p.name === chosenName).dead = true

                if (updatedPlayerPokemons.filter(p => p.dead).length === updatedPlayerPokemons.length) {
                    setIsGameOver(true)
                } else {
                    setPlayerPokemons(updatedPlayerPokemons)
                    setNar(`${choosenPokemon.name} has fallen
                        Choose another pokemon!`)
                    setIsPlayerChoosen(false)
                }
            }
        }
    }, [playerCurHp])


    const handleCatch = () => {
        let nar = ""
        const catchChance = Math.floor(Math.random() * 100)

        if (catchChance > 49) {
            nar = `You catched ${enemy.name}! You can use him in your next fights!
            Choose another location!`
            let updatedPlayerPokemons = [...playerPokemons]
            let catchedEnemy = {
                ...enemy,
                choosen: false,
                dead: false,
            }
            updatedPlayerPokemons.push(catchedEnemy)
            console.log(updatedPlayerPokemons)

            setPlayerPokemons(updatedPlayerPokemons)
            setIsPlayerChoosen(false)
            setIsBattle(false)
            setEnemy("")
            setNar(nar)
            setActivePanel("location")

        } else {
            nar = `${enemy.name} has slipped away..
            Choose another location!`
            setIsPlayerChoosen(false)
            setIsBattle(false)
            setEnemy("")
            setNar(nar)
            setActivePanel("location")
        }

    }


    const handleLeave = () => {
        let nar = `You set ${enemy.name} free.
        Choose another location!`
        setNar(nar)
        setIsPlayerChoosen(false)
        setIsBattle(false)
        setEnemy("")
        setActivePanel("location")
    }

    const handleRestart = () => {
        setIsMenu(true)
        setPlayerPokemons("")
        setIsBattle("false")
        setNar("")
        setIsPlayerChoosen(false)
        setChoosenPokemon({})
        setActivePanel("")
        setEnemy("")
        setEnemyDmg(0)
        setEnemyCurHp(0)
        setPlayerDmg(0)
        setPlayerCurHp(0)
        setIsAttackDisabled(false)
        setIsPlayerTurn(true)
        setIsGameOver(false)
    }


    return (
        <div className={`${activePanel === "battle" ? "active" : null} battle-container`}>
            {isGameOver ? (
                <>
                    <div className='game-over'>Game over</div>
                    <button onClick={handleRestart} className='restart' type='button'>Restart</button>
                    <img className='game-over-pic' src='https://media.discordapp.net/attachments/1263120726966272084/1267833588959805574/file_2.png?ex=66aa398a&is=66a8e80a&hm=85b88ee31f0a18501ad1cdb646929204abfbc0f5a8af208fa1c139077ffeec79&=&format=webp&quality=lossless&width=800&height=450' />
                </>
            ) : (
                <>
                    {isGameWon ? (
                        <>
                            <div className='game-won'>You catched them all!</div>
                            <button onClick={handleRestart} className='restart' type='button'>Restart</button>
                            <img className='game-won-pic' src='https://media.discordapp.net/attachments/1263120726966272084/1267860952372477972/file_3.png?ex=66aa5306&is=66a90186&hm=b0b6f7fd2418dcc920d780fe88b40136fabf29e51ce29ff3966f52334f2000a4&=&format=webp&quality=lossless&width=687&height=386' />
                        </>) : (
                        <>
                            {isPlayerChoosen ? (
                                <>
                                    <div className="current-player-poke-container">
                                        <img className="current-player-poke-img" src={choosenPokemon.picBack} />
                                        <div className="hp">
                                            <div className="hp-percent">{playerCurHp}/{choosenPokemon.hp}</div>
                                            <div className="hp-left"></div>
                                            <div className="hp-damage"></div>
                                        </div>
                                    </div>
                                    {enemyCurHp <= 0 ? (null) : (
                                        <div className="button-container">
                                            <button disabled={isAttackDisabled} onClick={(e) => handleAttack(e)} className="attack-button" type="button">Attack</button>
                                            <button disabled={isAttackDisabled} onClick={(e) => handleHeavyAttack(e)} className="attack-button" type="button">Heavy Attack</button>
                                            <button disabled={isAttackDisabled} onClick={(e) => handlePrecisionAttack(e)} className="attack-button" type="button">Precision Attack</button>
                                            <button disabled={isAttackDisabled} onClick={(e) => handleSpecialAttack(e)} className="attack-button" type="button">Special Attack</button>
                                            <button disabled={isAttackDisabled} onClick={(e) => handleDefend(e)} className="attack-button" type="button">Defend</button>
                                            <button disabled={isAttackDisabled} onClick={(e) => handleRest(e)} className="attack-button" type="button">Rest</button>
                                        </div>
                                    )}

                                </>
                            ) : (
                                null
                            )}
                            {enemy ? (
                                <>
                                    <div className="enemy-poke-container">
                                        <img className="enemy-poke-img" src={enemy.picFront} />
                                        <div className="enemy-hp">
                                            <div className="enemy-hp-percent">{enemyCurHp}/{enemy.hp}</div>
                                            <>
                                                <div className="enemy-hp-left"></div>
                                                <div className="enemy-hp-damage"></div>
                                            </>
                                        </div>
                                    </div>
                                    {enemyCurHp <= 0 ? (
                                        <div className='catch-pokemon'>
                                            <button onClick={handleCatch} className='catch' type='button'>Catch it</button>
                                            <button onClick={handleLeave} className='leave' type='button'>Leave it</button>
                                        </div>) : (
                                        null
                                    )}
                                </>

                            ) : (
                                null
                            )}
                        </>
                    )}



                </>
            )}




        </div>
    )
}

export default Battle