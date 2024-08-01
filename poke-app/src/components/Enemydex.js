import React from 'react'

function Enemydexmodal({ enemy, setIsEnemydexModalOpen }) {

    const dblFrom = enemy.dmgRel["double_damage_from"]
    const dblTo = enemy.dmgRel["double_damage_to"]
    const halfFrom = enemy.dmgRel["half_damage_from"]
    const halfTo = enemy.dmgRel["half_damage_to"]


    return (
        <div className='pokedex-modal'>
            <div className='pokedex-title'>{enemy.name}</div>
            <img src={enemy.picFront} className={`${enemy.dead ? "dead" : null} pokedex-img`} />
            <button onClick={() => setIsEnemydexModalOpen(false)} type='button' className='close-ability-modal'>Close</button>

            <div className='pokedex-info'>
                <div className='symbol-row'>
                    <div className='symbol'>🗡️:</div>
                    <div className='symbol-detail'> {enemy.attack}</div>
                </div>
                <div className='symbol-row'>
                    <div className='symbol'>⚔️:</div>
                    <div className='symbol-detail'> {enemy.special}</div>
                </div>
                <div className='symbol-row'>
                    <div className='symbol'>🛡️:</div>
                    <div className='symbol-detail'> {enemy.defense}</div>
                </div>
                <div className='symbol-row'>
                    <div className='symbol'>❤️:</div>
                    <div className='symbol-detail'> {enemy.hp}</div>
                </div>
                <div className='symbol-row'>
                    <div className='symbol'>🌀:</div>
                    <div className='symbol-detail'> {enemy.type}</div>
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

export default Enemydexmodal