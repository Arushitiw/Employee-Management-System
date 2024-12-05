import React from "react";

const TaskList = ({ data }) => {
  return (
    <div className="flex mt-10 justify-between gap-5 w-screen">
      <div className="px-10 py-6 rounded-xl w-[35%] w-1/2 bg-red-400">
        <h2 className="text-3xl">{data.taskSummary.completed}</h2>
        <h3 className="text-xl font-medium">Completed Tasks</h3>
      </div>
      <div className="px-10 py-6 rounded-xl w-[45%] w-1/2 bg-blue-400">
        <h2 className="text-3xl">{data.taskSummary.pending}</h2>
        <h3 className="text-xl font-medium">Pending Tasks</h3>
      </div>
      <div className="px-10 py-6 rounded-xl w-[45%] w-1/2 bg-green-400">
        <h2 className="text-3xl">{data.taskSummary.inProgress}</h2>
        <h3 className="text-xl font-medium">In Progress Tasks</h3>
      </div>
      <div className="px-10 py-6 rounded-xl w-[45%] w-1/2 bg-yellow-400">
        <h2 className="text-3xl">{data.taskSummary.onHold}</h2>
        <h3 className="text-xl font-medium">On Hold Tasks</h3>
      </div>
    </div>
  );
};

export default TaskList;
