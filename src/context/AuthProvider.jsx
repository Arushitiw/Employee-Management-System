import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [usedata, setusedata] = useState(null);

  useEffect(() => {
    setLocalStorage()
    const { employees, admin } = getLocalStorage();
    setusedata({ employees, admin });
  }, []);

  return (
    <AuthContext.Provider value={usedata}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
