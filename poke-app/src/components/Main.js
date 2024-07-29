import MyPokemons from "./MyPokemons"
import Battle from "./Battle"
import Locations from "./Locations"

function Main() {
    return (
        <div className='main'>
            <div className='main-background-container'>
                <img className="main-background" src="https://images-ext-1.discordapp.net/external/iSbMZhkLarMLz8uqBtoEVYXThcrkyUHCGjMo1bMoHzU/https/i.pinimg.com/originals/2b/3b/04/2b3b04771ccca26c3dd96d781b0117ca.jpg?format=webp&width=1177&height=662" />
                <img className="main-logo" src="https://media.discordapp.net/attachments/1263120726966272084/1267510123727945728/file_1.png?ex=66a90c4a&is=66a7baca&hm=477c43324fb79992b718490ab9928ff3f695273d70dd13a330cb40822a52924a&=&format=webp&quality=lossless&width=433&height=320" />
            </div>
            <div className="panel-container">
                <MyPokemons />
                <Battle />
                <Locations />
            </div>
            <div className="nar-container">
                <p className="nar">Narráció</p>
            </div>
        </div>
    )
}

export default Main