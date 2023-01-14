import React,{ useState, useEffect, useContext } from "react";
const url = "https://swapi.dev/api/people/"




const CharacterContext = React.createContext();

const CharacterProvider = ({ children }) => {
    const [person, setPerson] = useState([])
    const [isLoading, setIsLoading]=useState(false)
    
    const fetchPeople = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(url)
            const data = await response.json()
            const { results } = data
            if (results) {
                const newPerson = results.map((item) => {
                    const {name,height,mass,gender} = item;
                    return {id: name,name,height,mass,gender}
                })
                setPerson(newPerson)
                setIsLoading(false)
            } else {
                setPerson([])
            }
        } catch (error) {
            
        }
    }
   
    useEffect(() => {
        fetchPeople()
    }, [])
    
    return <CharacterContext.Provider value={{
        person,
        isLoading
    }}>
        {children}
    </CharacterContext.Provider>
}

export const useCharacterContext = () => {
    return useContext(CharacterContext)
}

export {CharacterContext, CharacterProvider}
