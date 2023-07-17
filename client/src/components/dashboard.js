import Header from "./header";
import Footer from "./footer";
import Task from "./task";
import "../css/dashboard.css";
import React, { useEffect } from "react";
import { useState } from "react";

import axios from "axios";

function Dashboard() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");

    const id = JSON.parse(loggedInUser)["_id"];

    const fetchTask = async () => {
      await axios.get(`api/tasks/user/${id}`).then((res) => {
        setTask(res.data.result);
        console.log(task);
      });
    };
    fetchTask();
  }, []);

  return (
    <div className="dashboard">
      <Header />
      <Task name={task} />
      <Footer />
    </div>
  );
}

export default Dashboard;
