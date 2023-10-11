import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [userData, setUserData] = useState([]);
    const [query, setQuery] = useState([]);
    const [values, setValues] = useState({
        name: "",
        email: "",
        age: 0
    })

    const value = {
        userData,
        setUserData,
        values,
        setValues,
        query,
        setQuery
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}