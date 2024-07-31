import './App.css';
import { useState, useEffect } from "react"
import Menu from './components/Menu';
import Main from './components/Main';


function App() {

  const [isMenu, setIsMenu] = useState(true)
  const [playerPokemons, setPlayerPokemons] = useState([])
  

  /*
isMenu 
isBattle  -> location kiválasztva
isPlayerChoosen -> player pokemon választva
currentPlayerHp
currentEnemy {name, hp, ...} -> useEffect (enemy attakc setTimeout)
playerPokemons []
locations [
{name:
visited: false}
]
currentPlayerHp, currentEnemy.Hp -> useEffect(ha egyik 1 alá if(nyertünk vesztettünk) )
isBattleWon -> useEffect(flase -> ujraválaszttani (isPlayerChoosen) true-> location választás isBattle:false mypokemonshoz currentEnemy )

*/

/*
<audio id="audio" loop autoplay> 
  <source src="%PUBLIC_URL%/themesong.mp3" type="audio/mpeg">
</audio> 
const audio: Partial<HTMLAudioElement> = document.getElementById('audio')

audio.pause()
*/


  return (
    <>
      {isMenu ? (
        <Menu
          setIsMenu={setIsMenu}
          playerPokemons={playerPokemons}
          setPlayerPokemons={setPlayerPokemons} />
      ) : (
        <Main
          setIsMenu={setIsMenu}
          playerPokemons={playerPokemons}
          setPlayerPokemons={setPlayerPokemons}
        />

      )}
    </>
  );
}

export default App;
