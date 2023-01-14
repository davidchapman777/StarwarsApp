import React, { useState, useContext, useEffect } from "react";

const ShipsContext = React.createContext()

const url = 'https://swapi.dev/api/starships/'


const ShipsProvider = ({ children }) => {

    const [ship, setShip] = useState([])
        const [isLoading, setIsLoading]=useState(false)


    const fetchShips = async () => {
        setIsLoading(true)
        try {
        const response = await fetch(url)
        const data = await response.json()
        const { results } = data
        console.log(results)
        if (results) {
            const newShip = results.map((item) => {
            const { name, model, starship_class, passengers } = item
            return{ id:name, model, starship_class,passengers}
            })
            setShip(newShip)
            setIsLoading(false)
        }
        } catch (error) {
        
        }
    }
        useEffect(() => {
        fetchShips()
        }, [])

    return <ShipsContext.Provider value={{
        ship,
        isLoading
    }}>{ children}</ShipsContext.Provider>
}
export const useShipsContext = () => {
    return useContext(ShipsContext)
}
export {ShipsContext, ShipsProvider}