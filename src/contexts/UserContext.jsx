import { createContext, useState } from "react";

const UserContext = createContext()

export function UserProvider({ children }) {
    const [user, setUser] = useState({})
    const userLocal = localStorage.getItem('user')

    if(user.token !== undefined) {
        localStorage.setItem("user", JSON.stringify(user))
    } else if (userLocal !== null) {
        setUser(JSON.parse(userLocal))
    }

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext