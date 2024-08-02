import React from 'react'

function Abilitymodal({ choosenPokemon, setIsAbilityModalOpen }) {

    const atk = choosenPokemon.attack
    const spc = choosenPokemon.special

    const attackDetails = `🗡️: ${atk} 🏹: 80% 💥:20% ⏳:0 `
    const heavyDetails = `🗡️: ${atk} 🏹: 60% 💥:40% ⏳:0 `
    const precisionDetails = `🗡️: ${atk} 🏹: 95% 💥:5% ⏳:0 `
    const specialDetails = `🗡️: ${spc} 🏹: 95% 💥:20% ⏳:2 `
    const defendDetails = `🗡️:0 🏹: 100% 💥:0% 🛡️:x3 ⏳:0 🕒:3`
    const mendDetails = `🗡️:0 🏹: 100% 💥:0% ❤️:15 ⏳:4 `
    const hpPotDetails = `🗡️:0 🏹: 100% 💥:0% ❤️:30% ⏳:0 `
    const boostPotDetails = `🗡️:0 🏹: 100% 💥:0% ⚔️:x1.5 ⏳:0 🕒:3 `


    return (
        <div className='ability-modal'>
            <button onClick={() => setIsAbilityModalOpen(false)} type='button' className='close-ability-modal'>Close</button>
            <div className='ability-list'>
                <div className='ability-list-title'>Ability details</div>
                <div className='ability-row'>
                    <div className='ability-name'>Attack</div>
                    <div className='ability-detail'>{attackDetails}</div>
                </div>
                <div className='ability-row'>
                    <div className='ability-name'>Heavy Attack</div>
                    <div className='ability-detail'>{heavyDetails}</div>
                </div>
                <div className='ability-row'>
                    <div className='ability-name'>Precision Attack</div>
                    <div className='ability-detail'>{precisionDetails}</div>
                </div>
                <div className='ability-row'>
                    <div className='ability-name'>Special Attack</div>
                    <div className='ability-detail'>{specialDetails}</div>
                </div>
                <div className='ability-row'>
                    <div className='ability-name'>Defend</div>
                    <div className='ability-detail'>{defendDetails}</div>
                </div>
                <div className='ability-row'>
                    <div className='ability-name'>Mend</div>
                    <div className='ability-detail'>{mendDetails}</div>
                </div>
                <div className='ability-row'>
                    <div className='ability-name'>Health Potion</div>
                    <div className='ability-detail'>{hpPotDetails}</div>
                </div>
                <div className='ability-row'>
                    <div className='ability-name'>Boost Potion</div>
                    <div className='ability-detail'>{boostPotDetails}</div>
                </div>
            </div>
            
            <div className='ability-symbols'>
                <div className='symbol-row'>
                    <div className='symbol'>🗡️</div>
                    <div className='symbol-detail'>Attack power</div>
                </div>
                <div className='symbol-row'>
                    <div className='symbol'>🏹</div>
                    <div className='symbol-detail'>Hit chance</div>
                </div>
                <div className='symbol-row'>
                    <div className='symbol'>💥</div>
                    <div className='symbol-detail'>Crit chance</div>
                </div>
                <div className='symbol-row'>
                    <div className='symbol'>⏳</div>
                    <div className='symbol-detail'>Cooldown</div>
                </div>
                <div className='symbol-row'>
                    <div className='symbol'>🛡️</div>
                    <div className='symbol-detail'>Defense modifier</div>
                </div>
                <div className='symbol-row'>
                    <div className='symbol'>🕒</div>
                    <div className='symbol-detail'>Duration</div>
                </div>
                <div className='symbol-row'>
                    <div className='symbol'>❤️</div>
                    <div className='symbol-detail'>Health gain</div>
                </div>
                <div className='symbol-row'>
                    <div className='symbol'>⚔️</div>
                    <div className='symbol-detail'>Damage modifier</div>
                </div>
            </div>
        </div>
    )
}

export default Abilitymodal