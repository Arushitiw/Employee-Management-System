import React from "react";
import AcceptTask from "../TaskList/AcceptTaskList";
import FailedTask from "../TaskList/failedTask";
import NewTask from "../TaskList/newtask";

const TaskList = ({ data }) => {
  return (
    <div className="flex mt-10 justify-between gap-5 w-screen">
      <div className="px-10 py-6 rounded-xl w-[35%] w-1/2 bg-red-400">
        <h2 className="text-3xl">{data.taskSummary?.completeTask ?? 0}</h2>
        <h3 className="text-xl font-medium">Completed Tasks</h3>
      </div>
      <div className="px-10 py-6 rounded-xl w-[45%] w-1/2 bg-blue-400">
        <h2 className="text-3xl">{data.taskSummary?.AcceptTask ?? 0}</h2>
        <h3 className="text-xl font-medium">Active Task</h3>
      </div>
      <div className="px-10 py-6 rounded-xl w-[45%] w-1/2 bg-green-400">
        <h2 className="text-3xl">{data.taskSummary?.NewTask ?? 0}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="px-10 py-6 rounded-xl w-[45%] w-1/2 bg-yellow-400">
        <h2 className="text-3xl">{data.taskSummary?.FailedTask ?? 0}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskList;
