import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [usedata]= useContext(AuthContext);

  return (
    <div className="bg-gray-800 p-6 mt-10 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4 text-gray-100">All Tasks</h2>

      {/* Scrollable Table Wrapper */}
      <div className="overflow-auto max-h-64">
        <table className="table-auto w-full text-left border-collapse">
          {/* Table Header */}
          <thead>
            <tr className="bg-red-700 text-gray-100">
              <th className="text-lg font-medium px-4 py-2 border">Employee Name</th>
              <th className="text-lg font-medium px-4 py-2 border">New Task</th>
              <th className="text-lg font-medium px-4 py-2 border">Active Task</th>
              <th className="text-lg font-medium px-4 py-2 border">Completed</th>
              <th className="text-lg font-medium px-4 py-2 border">Failed Task</th> {/* New Column */}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {usedata.map((employee, index) => (
              <tr key={employee.id} className="bg-[#1c1c1c] rounded mt-5  text-white font-semibold overflow-auto">
                <td className="px-4 py-2 border font-medium text-white,lg font-semibold">{employee.firstName}</td>
                <td className=" text-lg font-medium px-4 py-2 border text-blue-300 underline cursor-pointer">{employee.taskSummary.newTask}</td>
                <td className=" text-lg font-medium px-4 py-2 border text-yellow-500">{employee.taskSummary.active}</td>
                <td className=" text-lg font-medium px-4 py-2 border text-green-100">{employee.taskSummary.completed}</td>
                <td className=" text-lg font-medium px-4 py-2 border text-red-700">{employee.taskSummary.failedTask}</td> {/* Failed Task Data */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTask;
