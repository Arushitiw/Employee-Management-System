import React from "react";

const AllTask = () => {
    return (
        <div className="bg-gray-800 p-6 mt-10 rounded-lg shadow-lg h-64 overflow-auto">
            <h2 className="text-lg font-semibold mb-4 text-gray-100">All Tasks</h2>

            {/* Task Items */}
            <div className="space-y-3">
                <div className="bg-red-500 hover:bg-red-600 py-3 px-5 flex justify-between items-center rounded-lg shadow-md transition-all duration-200">
                    <h2 className="text-gray-100 font-medium">Arushi</h2>
                    <h3 className="text-gray-200 font-light">Make a UI design</h3>
                    <h5 className="text-gray-100 font-semibold bg-gray-700 px-3 py-1 rounded-md">Pending</h5>
                </div>

                <div className="bg-green-500 hover:bg-green-600 py-3 px-5 flex justify-between items-center rounded-lg shadow-md transition-all duration-200">
                    <h2 className="text-gray-100 font-medium">Arushi</h2>
                    <h3 className="text-gray-200 font-light">Make a UI design</h3>
                    <h5 className="text-gray-100 font-semibold bg-gray-700 px-3 py-1 rounded-md">Completed</h5>
                </div>

                <div className="bg-blue-500 hover:bg-blue-600 py-3 px-5 flex justify-between items-center rounded-lg shadow-md transition-all duration-200">
                    <h2 className="text-gray-100 font-medium">Arushi</h2>
                    <h3 className="text-gray-200 font-light">Make a UI design</h3>
                    <h5 className="text-gray-100 font-semibold bg-gray-700 px-3 py-1 rounded-md">In Progress</h5>
                </div>

                <div className="bg-pink-500 hover:bg-pink-600 py-3 px-5 flex justify-between items-center rounded-lg shadow-md transition-all duration-200">
                    <h2 className="text-gray-100 font-medium">Arushi</h2>
                    <h3 className="text-gray-200 font-light">Make a UI design</h3>
                    <h5 className="text-gray-100 font-semibold bg-gray-700 px-3 py-1 rounded-md">On Hold</h5>
                </div>

                <div className="bg-orange-500 hover:bg-orange-600 py-3 px-5 flex justify-between items-center rounded-lg shadow-md transition-all duration-200">
                    <h2 className="text-gray-100 font-medium">Arushi</h2>
                    <h3 className="text-gray-200 font-light">Make a UI design</h3>
                    <h5 className="text-gray-100 font-semibold bg-gray-700 px-3 py-1 rounded-md">Review</h5>
                </div>
            </div>
        </div>
    );
};

export default AllTask;
