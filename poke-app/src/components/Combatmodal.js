import React from 'react'

function Combatmodal({ setCombatLog, combatLog, setIsCombatModalOpen, enemy, choosenPokemon }) {

    return (
        <div className='combat-modal'>
            <div className='combat-log-title'>Combat log</div>
            <button onClick={() => setIsCombatModalOpen(false)} type='button' className='close-combat-modal'>Close</button>
            <button onClick={() => setCombatLog([])} type='button' className='clear-combat-modal'>Clear</button>
            <div className='combat-log-list'>
                {combatLog.map(l => (
                    <div className={l.pokemon ? `log-row` : `log-location`}>
                        <div className="log-poke" >{l.pokemon}</div>
                        <div className='log-text'>{l.text}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Combatmodal