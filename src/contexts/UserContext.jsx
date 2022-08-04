import { createContext, useState } from "react";

const UserContext = createContext()

export function UserProvider({ children }) {
    const [user, setUser] = useState()
    const userLocal = localStorage.getItem('user')

    if(userLocal !== null) {
        setUser(JSON.parse(userLocal))
    } 

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext