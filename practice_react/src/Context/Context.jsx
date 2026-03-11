import { Children, createContext } from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const fullName = "Abdullah Al Mamun"
    const name = "Mamun"
    return (
        <UserContext.Provider value={{fullName,name}}>
            {children}
        </UserContext.Provider>
    )
}