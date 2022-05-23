import React from "react";


const TasksList= ({GetAllTasks})=>{
        return(
            <div className="row container">
                {GetAllTasks.map((eachTask)=>(
                    <div className="col-md-3 bordered">
                        <b>{eachTask.TaskTitle}</b>
                </div>
                ))}
                
            </div>
        );
}

export default TasksList;