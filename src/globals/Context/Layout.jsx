import { createContext, useContext, useState } from "react";

const LayoutData = createContext();
export const Layout = ({ children }) => {
    const [navbarData, setNavbarData] = useState([]);
    const [contactData, setContactData] = useState([]);
    const [getId, setId] = useState();

    return (
        <LayoutData.Provider value={{ navbarData, setNavbarData, contactData, setContactData, getId, setId }}>
            {children}
        </LayoutData.Provider>
    )
}
export const useLayoutData = () => useContext(LayoutData);