import React from "react";
const AcceptTask=({data})=>{
    return(
        <div className="h-full w-[300px] p-5 bg-red-400 rounded-xl flex-shrink-0">
        <div className="flex justify-between items-center">
        <h3 className="bg-yellow-400  text-sm px-10 py-1 rounded">Category</h3>
        <h4 className="text-sm">15 Nov 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold"> DO 2 question of DSA</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis exercitationem alias iusto sint neque aspernatur quia necessitatibus explicabo nam facere.</p>
        <div className="flex justify-between mt-4">
            <button className="bg-green-500 py-1 px-2 text-sm">Mark as Completed</button>
            <button className="bg-red-500 py-1 px-2 text-sm">Mark as Failed </button>
        </div>
    </div>
    )
}
export default AcceptTask