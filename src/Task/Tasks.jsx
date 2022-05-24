import React from "react";
import TaskItem from "./TaskItem";


const TasksList= ({GetAllTasks})=>{
        return(
            <div className="row container-fluid">
                {GetAllTasks.map((eachTask)=>(

                    <TaskItem key={eachTask.id} itemDescription={eachTask.taskDescription} itemTitle={eachTask.taskTitle} />
                    
                ))}
                
            </div>
        );
}

export default TasksList;