import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalState = ({ children }) => {
    

    const [ count, setCount ] = useState(0)
    
    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }
  return (
      <GlobalContext.Provider value={{count,increment}}>
          {children}
    </GlobalContext.Provider>
  )
}