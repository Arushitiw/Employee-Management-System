import React from "react";
import Header from "../other/header";
import Createtask from "../other/Createtask";
import AllTask from "../other/AllTask";

const Admin = () => {
    return (
        <div className="h-screen w-full p-10 bg-gray-900 text-gray-100">
            <Header />
            <Createtask/>
            <AllTask/>
        </div>
    );
};

export default Admin;
