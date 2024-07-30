import ChooseStarter from "./ChooseStarter"

function Menu({ setIsMenu, playerPokemons, setPlayerPokemons }) {

    return (
        <div className="menu">
            <div className='background-container'>
                <img className="background" src="https://media.discordapp.net/attachments/1263120726966272084/1267474940538650774/pokemon-bulbasaur-landscape-desktop-wallpaper-preview.jpg?ex=66a8eb86&is=66a79a06&hm=5445cb11005d56a77061c2ec9ab2f6a3615b1b748ad9eb4b88a868419488f283&=&format=webp&width=1177&height=662" />
                <img className="logo" src="https://media.discordapp.net/attachments/1263120726966272084/1267479607263625227/Pokemon-Logo.png?ex=66a8efdf&is=66a79e5f&hm=dedf9d94a8a090561dace93689023b2b081e855f9d7d67eab1e6a3fdcf862bfb&=&format=webp&quality=lossless&width=687&height=430" />
            </div>
            <div className='description-container'>
                <ul className='description'>
                    <li className="description-li">Choose 3 starting pokemon & press Start!</li>
                    <li className="description-li">Select a location to travel</li>
                    <li className="description-li">Defeat the enemy if you find one</li>
                    <li className="description-li">Catch them all!</li>
                </ul>
            </div>
            <div className='start-container'>
                <button onClick={() => setIsMenu(false)} className="start-button" type='button'>{playerPokemons.length === 3 ? "Start Game!" : "" }</button>
            </div>
            <ChooseStarter playerPokemons={playerPokemons} setPlayerPokemons={setPlayerPokemons} />
        </div>
    )
}

export default Menu