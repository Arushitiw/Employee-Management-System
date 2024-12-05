import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Header = () => {
//   const[username,setusername]=useState('')
//   if(!data){
//     setusername('admin')
//   }
//   else{
//     setusername(data.firstName)
//   }

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br /> <span className="text-3xl font-semibold">username👋</span>
      </h1>
      <button
        onClick={logout}
        className="bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-sm"
      >
        Log out
      </button>
    </div>
  );
};

export default Header;
