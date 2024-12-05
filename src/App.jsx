import React, { useContext, useEffect, useState } from "react";
import Login from "./component/Auth/Login";
import Empdash from "./component/dashboard/empDash";
import Admin from "./component/dashboard/adminDash";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null); // User role ('admin' or 'employee')
  const [loggedInUser, setLoggedInUser] = useState(null); // Logged-in employee data (if applicable)
  const authData = useContext(AuthContext);

  // Check localStorage on initial load
  useEffect(() => {
    const loggedInData = localStorage.getItem("loggedInUser");
    if (loggedInData) {
      // Remove this line if you want to auto-login users
      localStorage.removeItem("loggedInUser"); // Clear any previous session
    }
  }, []);

  // Handle login
  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      console.log("Admin Login Success");
    } else if (authData?.employees) {
      const employee = authData.employees.find(
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
        alert("Invalid Credentials");
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? (
        // Render Login Page
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        // Render Admin Dashboard
        <Admin />
      ) : user === "employee" ? (
        // Render Employee Dashboard
        <Empdash data={loggedInUser} />
      ) : null}
    </>
  );
};

export default App;
