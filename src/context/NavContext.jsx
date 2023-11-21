import React, { createContext, useCallback, useContext, useState } from 'react'
import navValues from '../utils/navValues';

const NavContext = createContext(navValues.contents);

export const useNavContext = () => {
    return useContext(NavContext);
}

export const NavigationContextProvider = ({children}) => {
    const navigate = useCallback(
        (navTo) => setNav({ current: navTo, navigate }),
        []
    );

    const [nav, setNav] = useState({ current: navValues.contents, navigate });
    return (
        <NavContext.Provider value={{ nav }}>
          {children}
        </NavContext.Provider>
      );
}