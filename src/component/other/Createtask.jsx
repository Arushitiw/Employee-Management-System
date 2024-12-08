import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Createtask = () => {
  const [usedata, setusedata] = useContext(AuthContext);
  const [taskTitle, settaskTitle] = useState("");
  const [taskDes, settaskDes] = useState("");
  const [taskdate, settaskdate] = useState("");
  const [assignto, setassignto] = useState("");
  const [category, setcategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    // Create the new task object
    const newTask = {
      taskTitle,
      taskDes,
      taskdate,
      category,
      assignto,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

const data=usedata
    // Make a copy of `usedata` to avoid mutating state directly
    const updatedData = usedata.map((elem) => {
      if (assignto === elem.firstName) {
        return {
          ...elem,
          tasks: [...elem.tasks, newTask], // Add the new task to the employee's task list
          taskSummary: {
            ...elem.taskSummary,
            newTask: elem.taskSummary.newTask + 1, // Increment the newTask counter
          },
        };
      }
      return elem; // Return the element as is if it doesn't match
    });
    setusedata(updatedData)
    //console.log(data);
    
    setusedata(updatedData); // Update the context with modified data
    alert("Task assigned successfully!");

    // Clear the form inputs
    setassignto("");
    settaskDes("");
    setcategory("");
    settaskTitle("");
    settaskdate("");
  };

  return (
    <div className="p-7 bg-gray-800 mt-7 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-5">Create New Task</h2>

      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap w-full gap-5"
      >
        {/* Left Column */}
        <div className="w-full lg:w-1/2 space-y-4">
          <div>
            <label className="text-sm text-gray-400 mb-1 block">Task Title</label>
            <input
              value={taskTitle}
              onChange={(e) => {
                settaskTitle(e.target.value);
              }}
              className="text-sm px-3 py-2 w-full rounded-md bg-gray-700 border border-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <label className="text-sm text-gray-400 mb-1 block">Date</label>
            <input
              value={taskdate}
              onChange={(e) => {
                settaskdate(e.target.value);
              }}
              className="text-sm px-3 py-2 w-full rounded-md bg-gray-700 border border-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
              type="date"
            />
          </div>
          <div>
            <label className="text-sm text-gray-400 mb-1 block">Assign To</label>
            <input
              value={assignto}
              onChange={(e) => {
                setassignto(e.target.value);
              }}
              className="text-sm px-3 py-2 w-full rounded-md bg-gray-700 border border-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div>
            <label className="text-sm text-gray-400 mb-1 block">Category</label>
            <input
              value={category}
              onChange={(e) => {
                setcategory(e.target.value);
              }}
              className="text-sm px-3 py-2 w-full rounded-md bg-gray-700 border border-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Design, Dev, etc."
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 space-y-4">
          <div>
            <label className="text-sm text-gray-400 mb-1 block">Description</label>
            <textarea
              value={taskDes}
              onChange={(e) => {
                settaskDes(e.target.value);
              }}
              className="text-sm px-3 py-2 w-full h-40 rounded-md bg-gray-700 border border-gray-600 outline-none resize-none focus:ring-2 focus:ring-blue-500"
              placeholder="Task details..."
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="w-full text-right">
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-md transition-all duration-200 focus:ring-2 focus:ring-blue-500">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default Createtask;