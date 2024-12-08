import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();
//localStorage.clear()
const AuthProvider = ({ children }) => {
  const [usedata, setusedata] = useState([]); // Initialize as empty array

  useEffect(() => {
    setLocalStorage();
    const { employees } = getLocalStorage();
    if (Array.isArray(employees)) {
      setusedata(employees); // Ensure employees is an array before setting
    } else {
      setusedata([]); // Set as empty array if not valid
    }
  }, []);

  return (
    <AuthContext.Provider value={[usedata, setusedata]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
