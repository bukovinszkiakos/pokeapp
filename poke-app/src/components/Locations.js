import React, { useState, useEffect } from 'react';

function Locations({ isBattle, setIsBattle, nar, setNar, capitalize, activePanel, setActivePanel, locations, setLocations, setIsGameWon, isGameWon }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setActivePanel("location")
        const fetchLocations = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/location/');
            const data = await response.json();

            let allLocations = data.results
            allLocations = allLocations.map(l => {
                return { ...l, visited: false }
            })

            setLocations(allLocations);
        }
        fetchLocations();
    }, [])

    if (loading) { }



    const handleLocationClick = (e) => {
        if (isBattle) return
        const target = e.target

        const enemyChance = Math.floor(Math.random() * 100)
        if (enemyChance < 20) {
            const clickedLocation = target.textContent
            let updatedLocations = [...locations]
            updatedLocations.find(l => l.name === clickedLocation).visited = true
            setNar(`There is no pokemon to find in ${capitalize(target.textContent)}`)
            setLocations(updatedLocations)
 
            if (locations.filter(l => l.visited).length === locations.length) {
                setIsGameWon(true)
            }
        } else {

            const clickedLocation = target.textContent
            let updatedLocations = [...locations]
            updatedLocations.find(l => l.name === clickedLocation).visited = true
            setLocations(updatedLocations)
            setActivePanel("mypokemons")
            setIsBattle(true)
        }
    }


    return (
        <div className={`${activePanel === "location" ? "active" : null} location-container`}>
            <h1 className="location-title">Locations</h1>
            <ul className="locations">
                {locations.map((location) => (
                    <li key={location.name} className="location">
                        <button disabled={location.visited} onClick={(e) => { handleLocationClick(e) }} className="location-button" type="button">{location.name}</button></li>
                ))}
            </ul>
        </div>
    )
}

export default Locations