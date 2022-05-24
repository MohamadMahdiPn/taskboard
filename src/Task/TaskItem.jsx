import React from "react";



const TaskItem = ({ itemTitle, itemDescription }) => {
    return (
        <div className="col-md-3 border m-3 border-secondary bg-warning rounded">

            <ul>
                <li><p><b>Title : </b>{itemTitle}</p></li>
                <li><p><b>Description : </b>{itemDescription}</p></li>
            </ul>
        </div>
    );
}

export default TaskItem;