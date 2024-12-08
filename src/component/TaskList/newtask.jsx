import React from "react";

const NewTask = ({ data }) => {
  return (
    <div className="h-full w-[300px] p-5 bg-blue-400 rounded-xl flex-shrink-0">
      <div className="flex justify-between items-center">
        <h3 className="bg-yellow-400 text-sm px-10 py-1 rounded">{data.category}</h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2">{data.description}</p>
      <div className="mt-2">
        <button className="py-1 px-2 text-sm bg-green-500 rounded">Start Task</button>
      </div>
    </div>
  );
};

export default NewTask;