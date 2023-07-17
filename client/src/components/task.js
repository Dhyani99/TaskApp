import "../css/task.css";
import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Task(list) {
  const tasks = list.name;
  //useEffect(() => {}, []);
  return (
    <div className="task-row row">
      {tasks.map((task) => {
        return (
          <div
            className="task card text-white m-2"
            style={{
              background: task.priority === "high" ? "#ba2020" : "#28a745",
            }}
          >
            <div className="card-header">{task.title}</div>
            <div className="card-body">
              {/* <p className="card-text">{task.details}</p> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Task;
