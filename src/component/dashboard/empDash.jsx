import React from "react";
import Header from '../other/header'
import TaskList from "../other/Tasklistnum";
import Task from "../TaskList/TaskList";
const Empdash=({data})=>{
    //console.log(data);
    
    return(
        <div className="p-20 bg-[#1c1c1c] h-screen">
            <Header data={data}/>
            <TaskList data={data}/>
            <Task data={data}/>
        </div>
    )
}
export default Empdash