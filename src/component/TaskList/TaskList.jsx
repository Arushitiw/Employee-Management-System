import React from "react";
import AcceptTask from "./AcceptTaskList";
import NewTask from "./newtask";
import CompletedTask from "./completeTask";
import FailedTask from "./failedTask";

const Task = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="overflow-x-auto h-[55%] w-full flex items-center justify-start gap-5 flex-nowrap py-5 mt-10"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.status.pending) {
          return <AcceptTask key={idx} data={elem} />;
        }
        if (elem.status.completed) {
          return <CompletedTask key={idx} data={elem} />;
        }
        if (elem.status.failed) {
          return <FailedTask key={idx} data={elem} />;
        }
        if (elem.status.inProgress) {
          return <NewTask key={idx} data={elem} />;
        }
        return null;
      })}
    </div>
  );
};

export default Task;
