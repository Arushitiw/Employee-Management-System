// App.jsx
import React, { useContext, useEffect, useState } from "react";
import Login from "./component/Auth/Login";
import Empdash from "./component/dashboard/empDash";
import Admin from "./component/dashboard/adminDash";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null); 
  const [loggedInUser, setLoggedInUser] = useState(null); 
  const [usedata, setusedata] = useContext(AuthContext);

  useEffect(() => {
    const loggedInData = localStorage.getItem("loggedInUser");
    if (loggedInData) {
      // Remove this line if you want to auto-login users
      localStorage.removeItem("loggedInUser"); // Clear any previous session
    }
  }, []);

  // App.jsx
const handleLogin = (email, password) => {
  if (email === "admin@example.com" && password === "123") {
    // Admin login
    setUser("admin");
    localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    console.log("Admin Login Success");
  } else if (usedata && Array.isArray(usedata)) {
    // Employee login
    const employee = usedata.find(
      (e) => e.email === email && e.password === password
    );
    if (employee) {
      setUser("employee");
      setLoggedInUser(employee);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employee })
      );
      console.log("Employee Login Success");
    } else {
      alert("Invalid Credentials"); // No matching employee found
    }
  } else {
    // In case `usedata` is not an array or is empty
    alert("No employees found. Please check your data.");
  }
};



  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <Admin />
      ) : user === "employee" ? (
        <Empdash data={loggedInUser} />
      ) : null}
    </>
  );
};

export default App;  // Ensure default export is present here
