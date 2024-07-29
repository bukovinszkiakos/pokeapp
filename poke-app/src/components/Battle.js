import React from 'react'

function Battle() {
    return (

        <div className="battle-container">
            <div className="current-player-poke-container">
                <img className="current-player-poke-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png" />
                <div className="hp">
                    <div className="hp-percent">52/60</div>
                    <div className="hp-left"></div>
                    <div className="hp-damage"></div>
                </div>
            </div>
            <div className="enemy-poke-container">
                <img className="enemy-poke-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png" />
                <div className="enemy-hp">
                    <div className="enemy-hp-percent">22/41</div>
                    <div className="enemy-hp-left"></div>
                    <div className="enemy-hp-damage"></div>
                </div>
            </div>
            <div className="button-container">
                <button className="attack-button" type="button">Attack</button>
            </div>
        </div>

    )
}

export default Battle