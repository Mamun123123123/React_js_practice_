import { createContext } from "react";

export const SetContext = createContext()

export const SetContext_Provider = ({children})=>{
    const password = 123
    const arr = [10,20,30]
    return (
        <SetContext.Provider value={{password,arr}}>
            {children}
        </SetContext.Provider>
    )
}