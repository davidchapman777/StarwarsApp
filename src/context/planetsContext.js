import React, { useContext, useState, useEffect } from "react";

const PlanetsContext = React.createContext()
const url = 'https://swapi.dev/api/planets/'


const PlanetsProvider = ({ children }) => {
    
    const [planets, setPlanets] = useState([])
        const [isLoading, setIsLoading]=useState(false)

  
    const fetchPlanets = async () => {
        setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      const { results } = data
      if (results) {
        const newPlanet = results.map((item) => {
          const { name, diameter, climate, population, terrain} = item
          return { name, diameter, climate, population, terrain}
        })
          setPlanets(newPlanet)
          setIsLoading(false)
      }
    } catch (error) {
      
    }
  }

  useEffect(() => {
  fetchPlanets()
},[])

    return <PlanetsContext.Provider value={{
        planets,
        isLoading
    }}>{children}</PlanetsContext.Provider>
}
export const usePlanetsContext = () => {
    return useContext(PlanetsContext)
}
export {PlanetsContext, PlanetsProvider}